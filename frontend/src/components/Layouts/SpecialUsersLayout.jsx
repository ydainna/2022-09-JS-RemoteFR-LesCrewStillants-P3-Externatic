import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import instance from "@utils/instance";
import Notify from "@utils/notification";
import SubNavSpecialUsers from "@components/ManagementsPages/subNavUsers/SubNavSpecialUsers";

export default function SpecialUsersLayout() {
  const [role, setRole] = useState(0);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const reloadInfo = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return instance
        .get(`/users/${decodedHeader.id}`)
        .then((response) => {
          setRole(response.data.role_id);

          if (response.data.role_id !== 1 && response.data.role_id !== 3) {
            Notify.error("Vous n'avez pas accès aux pages consultants.");
            return navigate("/profile");
          }

          return "";
        })
        .catch((err) => {
          console.error(err);
        });
    }
    Notify.error("Vous n'êtes pas connecté.");
    return navigate("/login");
  };

  useEffect(() => {
    reloadInfo();
  }, []);

  return (
    <>
      <SubNavSpecialUsers role={role} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
