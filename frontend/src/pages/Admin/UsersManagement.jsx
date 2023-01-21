import { useState, useEffect } from "react";
import instance from "@utils/instance";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/UsersManagement.scss";

export default function UsersManagement() {
  const arrayRoleName = ["Admin", "Candidat", "Consultant"];

  const [arrayCandidature, setArrayCandidature] = useState([]);

  const [roleFilter, setRoleFilter] = useState(0);

  useEffect(() => {
    instance
      .get("/users")
      .then((result) => {
        setArrayCandidature(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SpecialUsersLayout>
      <section className="users-management">
        <h1>Gestion des Utilisateurs</h1>
        <div className="users-management-div">
          <button type="button">Supprimer le profil</button>
          <button type="button">Créer un compte consultant</button>
        </div>
        <div className="users-management-filter">
          <input type="search" name="" id="" placeholder="Rechercher..." />
          <select
            name=""
            id=""
            onChange={(e) => setRoleFilter(parseInt(e.target.value, 10))}
          >
            <option value="0">Rôles</option>
            <option value="2">Candidats</option>
            <option value="3">Consultants</option>
            <option value="1">Admins</option>
          </select>
          <button type="button">Réinitialiser ma rechercher</button>
        </div>
        <table width="100%">
          <tbody>
            <tr>
              <th> </th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Rôles</th>
            </tr>
            {arrayCandidature
              .filter(
                (candidat) =>
                  candidat.role_id === roleFilter || roleFilter === 0
              )
              .map((candidature) => (
                <tr key={candidature.id}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{candidature.lastname}</td>
                  <td>{candidature.firstname}</td>
                  <td>{candidature.email}</td>
                  <td>{arrayRoleName[candidature.role_id - 1]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
