import { useState, useEffect } from "react";
import instance from "@utils/instance";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/UsersManagement.scss";

export default function UsersManagement() {
  const [arrayCandidature, setArrayCandidature] = useState([]);

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
          <select name="" id="">
            <option value="Rôles">Rôles</option>
            <option value="Candidat">Candidats</option>
            <option value="Consultant">Consultants</option>
            <option value="Admin">Admins</option>
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
            {arrayCandidature.map((candidature) => (
              <tr key={candidature.id}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{candidature.lastname}</td>
                <td>{candidature.firstname}</td>
                <td>{candidature.email}</td>
                <td>{candidature.role_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
