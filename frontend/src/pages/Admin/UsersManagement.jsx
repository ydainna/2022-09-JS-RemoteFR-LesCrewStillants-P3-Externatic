import { useState, useEffect } from "react";
import instance from "@utils/instance";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/UsersManagement.scss";

export default function UsersManagement() {
  // filters states and array for roles
  const arrayRoleName = ["Admin", "Candidat", "Consultant"];
  const [roleFilter, setRoleFilter] = useState(0);
  const [search, setSearch] = useState("");

  // state array of users that we get from axios
  const [arrayCandidature, setArrayCandidature] = useState([]);

  // state for users to delete
  const [usersToDelete, setUsersToDelete] = useState([]);

  const handleCheck = (candidatureId, statusCheckBox) => {
    if (statusCheckBox) {
      setUsersToDelete([...usersToDelete, candidatureId]);
    }
    if (!statusCheckBox) {
      setUsersToDelete([...usersToDelete.filter((id) => id !== candidatureId)]);
    }
  };

  const handleDeleteClick = () => {
    console.warn(usersToDelete);
    instance
      .delete("/users-deletion", { data: { arr: usersToDelete } })
      // .then(() => setUsersToDelete([]))
      .catch((err) => {
        console.error(err);
      });
  };

  // axios to get data, it should refresh each time we delete some users if everything goes well
  useEffect(() => {
    instance
      .get("/users")
      .then((result) => {
        setArrayCandidature(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [handleDeleteClick]);

  return (
    <SpecialUsersLayout>
      <section className="users-management">
        <h1>Gestion des Utilisateurs</h1>
        <div className="users-management-div">
          <button type="button" onClick={handleDeleteClick}>
            Supprimer les profil
          </button>
          <button type="button">Créer un compte consultant</button>
        </div>
        <div className="users-management-filter">
          <input
            type="text"
            placeholder="Rechercher..."
            onChange={(e) => setSearch(e.target.value)}
          />
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
          <button type="button">Réinitialiser ma sélection</button>
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
              .filter(
                (candidat) =>
                  (candidat.firstname
                    ? candidat.firstname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    : "") ||
                  (candidat.lastname
                    ? candidat.lastname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    : "")
              )
              .map((candidature) => (
                <tr key={candidature.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheck(candidature.id, e.target.checked)
                      }
                    />
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
