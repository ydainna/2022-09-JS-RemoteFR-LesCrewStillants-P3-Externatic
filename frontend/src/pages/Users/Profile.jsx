import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import Cv from "@components/UserProfile/cv/Cv";
import Parameters from "@components/UserProfile/parameters/Parameters";
import Presentation from "@components/UserProfile/presentation/Presentation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";

import instance from "@utils/instance";

export default function Profile() {
  const [info, setInfo] = useState([]);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

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
  }, []);

  return (
    <LoggedUsersLayout>
      {info.role_id === 1 || info.role_id === 3 ? (
        <Link to="/users-management" className="link-consultant">
          Accéder aux pages consultants
        </Link>
      ) : (
        ""
      )}
      <Presentation info={info} />
      <Cv />
      <CurrentSituation />
      <SearchParameters />
      <Parameters id={info.id} />
    </LoggedUsersLayout>
  );
}
