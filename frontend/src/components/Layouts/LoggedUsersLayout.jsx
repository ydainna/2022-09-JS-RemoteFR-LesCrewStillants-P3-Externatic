import { Outlet } from "react-router-dom";
import SubNavUsers from "@components/UserProfile/SubNavUsers/SubNavUsers";

export default function LoggedUsersLayout() {
  return (
    <>
      <SubNavUsers />
      <main>
        <Outlet />
      </main>
    </>
  );
}
