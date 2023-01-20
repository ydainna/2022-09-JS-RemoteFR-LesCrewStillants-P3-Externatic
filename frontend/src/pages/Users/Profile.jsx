import { useState, useEffect } from "react";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import Cv from "@components/UserProfile/cv/Cv";
import Parameters from "@components/UserProfile/parameters/Parameters";
import Presentation from "@components/UserProfile/presentation/Presentation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";
import jwtDecode from "jwt-decode";

import instance from "@utils/instance";

export default function Profile() {
  const [info, setInfo] = useState([]);
  const token = sessionStorage.getItem("token");

  const reloadInfo = () => {
    const decodedHeader = jwtDecode(token);

    instance.get(`/users/${decodedHeader.id}`).then((response) => {
      setInfo(response.data);
    });
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
