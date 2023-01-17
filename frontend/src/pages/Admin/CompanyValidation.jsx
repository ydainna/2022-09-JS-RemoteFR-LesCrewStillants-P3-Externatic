import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/CompanyValidation.scss";

export default function CompanyValidation() {
  const arrayCompanies = [
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
      <section className="companies-validation">
        <h1>Validation des Pages Entreprises</h1>
        <button type="button">Valider la page entreprise</button>
        <table width="100%">
          <tbody>
            <tr>
              <th>Offre</th>
              <th>Retour Entreprise</th>
              <th>Entretien</th>
            </tr>
            {arrayCompanies.map((company) => (
              <tr key={company.id}>
                <td>
                  {company.name} - {company.city}
                </td>
                <td>{company.feedback}</td>
                <td>{company.meeting}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
