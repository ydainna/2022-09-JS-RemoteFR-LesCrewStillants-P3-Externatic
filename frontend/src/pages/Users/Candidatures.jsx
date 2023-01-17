import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";

import "@components/UserProfile/Candidatures.scss";

export default function Candidatures() {
  const arrayFavorite = [
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
    <LoggedUsersLayout>
      <section className="favorite-offers">
        <table width="100%">
          <tr>
            <th>Offre</th>
            <th>Retour Entreprise</th>
            <th>Entretien</th>
          </tr>
          {arrayFavorite.map((favorite) => (
            <tr key={favorite.id}>
              <td>
                {favorite.name} - {favorite.city}
              </td>
              <td>{favorite.feedback}</td>
              <td>{favorite.meeting}</td>
            </tr>
          ))}
        </table>
      </section>
    </LoggedUsersLayout>
  );
}
