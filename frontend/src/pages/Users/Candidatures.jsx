import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";

import "@components/UserProfile/Candidatures.scss";

export default function Candidatures() {
  const arrayFavorite = [
    {
      name: "Développeur Web Front-End",
      city: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      name: "Développeur Web Front-End",
      city: "Lille",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      name: "Développeur Web Front-End",
      city: "Marseille",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      name: "Développeur Web Front-End",
      city: "Lyon",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      name: "Développeur Web Front-End",
      city: "Londres",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      name: "Développeur Web Front-End",
      city: "Bordeaux",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
      name: "Développeur Web Back-End Symfony",
      city: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
    },
    {
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
            <tr>
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
