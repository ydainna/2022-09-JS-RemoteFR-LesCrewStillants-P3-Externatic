import { Outlet } from "react-router-dom";
import SubNavSpecialUsers from "@components/ManagementsPages/subNavUsers/SubNavSpecialUsers";

export default function SpecialUsersLayout() {
  return (
    <>
      <SubNavSpecialUsers />
      <main>
        <Outlet />
      </main>
    </>
  );
}
