import { useState, useEffect } from "react";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import Cv from "@components/UserProfile/cv/Cv";
import Parameters from "@components/UserProfile/parameters/Parameters";
import Presentation from "@components/UserProfile/presentation/Presentation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";
import jwt_decode from "jwt-decode";

import instance from "@utils/instance";

export default function Profile() {
  const token = browser.cookie.get("user_auth");
  const [info, setInfo] = useState([]);

  const reloadInfo = () => {
    // au lieu de 8 on mettre ${id} et il faut qu'on trouve le moyen de le récupérer cet id depuis le token
    // const id = 8;
    const decoded = jwt_decode(token);

    const decodedHeader = jwt_decode(token, { header: true });
    console.warn(decodedHeader);

    instance.get(`/users/${id}`).then((response) => {
      setInfo(response.data);
    });
  };

  useEffect(() => {
    reloadInfo();
  }, []);

  console.warn(info);

  return (
    <LoggedUsersLayout>
      <Presentation />
      <Cv />
      <CurrentSituation />
      <SearchParameters />
      <Parameters />
    </LoggedUsersLayout>
  );
}
