import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/UsersManagement.scss";

export default function UsersManagement() {
  const arrayCandidature = [
    {
      id: 1,
      name: "Développeur Web Front-End",
      city: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 2,
      name: "Développeur Web Front-End",
      city: "Lille",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 3,
      name: "Développeur Web Front-End",
      city: "Marseille",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 4,
      name: "Développeur Web Front-End",
      city: "Lyon",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 5,
      name: "Développeur Web Front-End",
      city: "Londres",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 6,
      name: "Développeur Web Front-End",
      city: "Bordeaux",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 7,
      name: "Développeur Web Back-End Symfony",
      city: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      id: 8,
      name: "Développeur Web Front-End",
      city: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
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
        <table width="100%">
          <tbody>
            <tr>
              <th>Offre</th>
              <th>Retour Entreprise</th>
              <th>Entretien</th>
            </tr>
            {arrayCandidature.map((candidature) => (
              <tr key={candidature.id}>
                <td>
                  {candidature.name} - {candidature.city}
                </td>
                <td>{candidature.feedback}</td>
                <td>{candidature.meeting}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
