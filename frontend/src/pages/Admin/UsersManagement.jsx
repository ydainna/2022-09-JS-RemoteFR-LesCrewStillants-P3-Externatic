import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/UsersManagement.scss";

export default function UsersManagement() {
  const arrayCandidature = [
    {
      id: 1,
      lastname: "Dupont",
      firstname: "Martine",
      email: "martine.dupont@email.com",
      role: "Candidat",
    },
    {
      id: 2,
      lastname: "Elmer",
      firstname: "Valentin",
      email: "valentin.elmer@externatic.fr",
      role: "Consultant",
    },
    {
      id: 3,
      lastname: "Durand",
      firstname: "Patrick",
      email: "patric.durand@externatic.fr",
      role: "Admin",
    },
    {
      id: 4,
      lastname: "Dugoûter",
      firstname: "Alicia",
      email: "aliciadugouter@gmail.fr",
      role: "Candidat",
    },
    {
      id: 5,
      lastname: "Castanor",
      firstname: "Estelle",
      email: "estelle.castanor@yahoo.org",
      role: "Candidat",
    },
    {
      id: 6,
      lastname: "Dupuis",
      firstname: "Marie",
      email: "marie.dupuis@msn.fr",
      role: "Candidat",
    },
    {
      id: 7,
      lastname: "Doe",
      firstname: "John",
      email: "johndoe@yopmail.com",
      role: "Candidat",
    },
    {
      id: 8,
      lastname: "Pivert",
      firstname: "Georges",
      email: "georges.pivert@externatic.fr",
      role: "Consultant",
    },
  ];
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
                <td>{candidature.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
