import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import CurrentSituation from "@components/UserProfile/currentSituation/CurrentSituation";
import Cv from "@components/UserProfile/cv/Cv";
import Parameters from "@components/UserProfile/parameters/Parameters";
import Presentation from "@components/UserProfile/presentation/Presentation";
import SearchParameters from "@components/UserProfile/searchParameters/SearchParameters";

export default function Profile() {
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
