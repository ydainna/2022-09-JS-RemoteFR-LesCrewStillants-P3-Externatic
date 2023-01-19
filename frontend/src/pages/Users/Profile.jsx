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
    // depuis le back, on res.json({ message: "Ok", token});
    // depuis le front, on récupère le token
    // option, session ou context
    // sessionStorage.setItem("token", res.data.token);
    // const token: sessionStorage.getItem('token')
    // console.log(jwtDecode(token));

    const decodedHeader = jwtDecode(token);
    console.warn(decodedHeader);

    instance.get(`/users/${decodedHeader.id}`).then((response) => {
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
