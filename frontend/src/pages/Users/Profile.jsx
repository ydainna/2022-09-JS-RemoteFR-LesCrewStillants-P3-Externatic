import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import Cv from "@components/UserProfile/cv/Cv";
import Parameters from "@components/UserProfile/parameters/Parameters";
import Presentation from "@components/UserProfile/presentation/Presentation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";

import instance from "@utils/instance";
import Notify from "@utils/notification";

export default function Profile() {
  const [info, setInfo] = useState([]);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  // Retrieve data from the database
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState(info.avatar);

  const handleFilesChange = (file) => {
    setFilesToUpload(file.target.value.split("\\")[2]);
  };

  const [updateUser, setUpdateUser] = useState({
    civility: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
  });

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateUser.email === "") {
      Notify.error("Veuillez renseigner une addresse mail.");
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    // post de l'image done ✅
    instance
      .post(`${import.meta.env.VITE_BACKEND_URL}/uploads/avatar`, formData)
      .then((res) => {
        console.warn(res.data);
      })
      .catch((err) => console.error(err));

    instance
      .put(`/users/${info.id}`, { filesToUpload, updateUser })
      .catch((err) =>
        console.error(err, Notify.error("Mauvaises Informations! ❌"))
      );
    Notify.success("Vos informations ont été mises à jour!");
  };

  useEffect(() => {
    setUpdateUser([info][0]);
  }, [info]);

  const reloadInfo = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return instance
        .get(`/users/${decodedHeader.id}`)
        .then((response) => {
          setInfo(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return navigate("/login");
  };

  useEffect(() => {
    reloadInfo();
  }, [info, setInfo, handleSubmit]);

  return (
    <LoggedUsersLayout>
      {info.role_id === 1 || info.role_id === 3 ? (
        <Link to="/users-management" className="link-consultant">
          Accéder aux pages consultants
        </Link>
      ) : (
        ""
      )}
      <Presentation
        updateUser={updateUser}
        handleFilesChange={handleFilesChange}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        filesToUpload={filesToUpload}
        className={error}
      />
      <Cv />
      <CurrentSituation />
      <SearchParameters />
      <Parameters id={info.id} />
    </LoggedUsersLayout>
  );
}
