import { useState, useEffect } from "react";
import instance from "@utils/instance";
import Notify from "@utils/notification";

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

  // state for new role selection
  const [newRole, setNewRole] = useState(0);

  const handleCheck = (candidatureId, statusCheckBox) => {
    if (statusCheckBox) {
      setUsersToDelete([...usersToDelete, candidatureId]);
    }
    if (!statusCheckBox) {
      setUsersToDelete([...usersToDelete.filter((id) => id !== candidatureId)]);
    }
  };

  const getData = () => {
    instance
      .get("/users")
      .then((result) => {
        setArrayCandidature(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteClick = () => {
    if (usersToDelete.length === 0) {
      return Notify.error("Veuillez selectionner au moins un utilisateur.");
    }

    return instance
      .delete("/users-deletion", { data: { arr: usersToDelete } })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRoleClick = () => {
    if (usersToDelete.length === 0) {
      return Notify.error("Veuillez selectionner au moins un utilisateur.");
    }
    if (newRole === 0) {
      return Notify.error("Veuillez choisir un rôle à attribuer.");
    }

    return instance
      .put("/edit-role", {
        data: { arr: usersToDelete, roleId: newRole },
      })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // axios to get data, it should refresh each time we delete some users if everything goes well

  useEffect(() => {
    getData();
  }, [handleDeleteClick]);

  return (
    <section className="users-management">
      <h1>Gestion des Utilisateurs</h1>
      <div className="users-management-div">
        <button type="button" onClick={handleDeleteClick}>
          Supprimer les profil
        </button>
        <select onChange={(e) => setNewRole(parseInt(e.target.value, 10))}>
          <option value="0">Rôles</option>
          <option value="2">Candidats</option>
          <option value="3">Consultants</option>
          <option value="1">Admins</option>
        </select>
        <button type="button" onClick={handleRoleClick}>
          Attributer un rôle
        </button>
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
              (candidat) => candidat.role_id === roleFilter || roleFilter === 0
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
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-box"
                      onChange={(e) =>
                        handleCheck(candidature.id, e.target.checked)
                      }
                    />
                    <span className="checkbox-cursor" />
                  </label>
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
  );
}
