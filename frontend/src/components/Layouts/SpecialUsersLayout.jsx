import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import instance from "@utils/instance";
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
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return navigate("/login");
  };

  useEffect(() => {
    reloadInfo();
    console.warn(role);
  }, []);

  return (
    <>
      <SubNavSpecialUsers />
      <main>
        <Outlet />
      </main>
    </>
  );
}
