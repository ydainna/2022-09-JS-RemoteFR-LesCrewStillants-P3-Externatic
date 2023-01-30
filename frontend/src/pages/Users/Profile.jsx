import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import Presentation from "@components/UserProfile/presentation/Presentation";
import Address from "@components/UserProfile/address/Address";
import Cv from "@components/UserProfile/cv/Cv";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";
import Parameters from "@components/UserProfile/parameters/Parameters";

import instance from "@utils/instance";
import Notify from "@utils/notification";

export default function Profile() {
  const [info, setInfo] = useState({});
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve data from the database
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState(info.avatar);

  const handleFilesChange = (file) => {
    setFilesToUpload(file.target.value.split("\\")[2]);
  };

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.email === "") {
      Notify.error("Veuillez renseigner une addresse mail.");
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    // si j'upload une image alors, post moi le
    if (filesToUpload) {
      instance
        .post(`${import.meta.env.VITE_BACKEND_URL}/uploads/avatar`, formData)
        .catch((err) => console.error(err));
    }
    // sinon tu me met le nom que j'ai get en BDD

    instance
      .put(`/users/${info.id}`, { filesToUpload, info })
      .catch((err) =>
        console.error(err, Notify.error("Mauvaises Informations! ❌"))
      );

    Notify.success("Vos informations ont été mises à jour!");
  };

  const reloadInfo = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return instance
        .get(`/users/${decodedHeader.id}`)
        .then((response) => {
          setInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return navigate("/login");
  };

  useEffect(() => {
    reloadInfo();
  }, []);

  useEffect(() => {
    setFilesToUpload(info.avatar);
  }, [isLoading]);

  return (
    <LoggedUsersLayout>
      {info.role_id === 1 || info.role_id === 3 ? (
        <Link to="/company-management" className="link-consultant">
          Accéder aux pages consultants
        </Link>
      ) : (
        ""
      )}
      {isLoading ? (
        "en cours de chargement"
      ) : (
        <>
          <Presentation
            updateUser={info}
            handleFilesChange={handleFilesChange}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            filesToUpload={filesToUpload}
            className={error}
          />
          <Address id={info.address_id} />
          <Cv id={info.information_id} />
          <CurrentSituation id={info.information_id} />
          <SearchParameters id={info.information_id} />
          <Parameters id={info.id} />
        </>
      )}
    </LoggedUsersLayout>
  );
}
