import { useState, useEffect } from "react";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import Cv from "@components/UserProfile/cv/Cv";
import Parameters from "@components/UserProfile/parameters/Parameters";
import Presentation from "@components/UserProfile/presentation/Presentation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";
import jwtDecode from "jwt-decode";

import instance from "@utils/instance";
import { useNavigate } from "react-router-dom";

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
      <Presentation info={info} />
      <Cv />
      <CurrentSituation />
      <SearchParameters />
      <Parameters id={info.id} />
    </LoggedUsersLayout>
  );
}
