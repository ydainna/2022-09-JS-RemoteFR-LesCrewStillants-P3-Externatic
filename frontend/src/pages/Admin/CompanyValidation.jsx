import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

import "@components/ManagementsPages/Admin/CompanyValidation.scss";

export default function CompanyValidation() {
  const arrayCompanies = [
    {
      id: 1,
      name: "Maison du Monde",
      link: "",
      consultant: "Georges",
    },
    {
      id: 2,
      name: "Elmer Entreprise",
      link: "",
      consultant: "Valentin",
    },
    {
      id: 3,
      name: "Induseo",
      link: "",
      consultant: "Damien",
    },
    {
      id: 4,
      name: "Underguard",
      link: "",
      consultant: "Laure",
    },
    {
      id: 5,
      name: "Decathlon Tech",
      link: "",
      consultant: "Anaïs",
    },
    {
      id: 6,
      name: "Groupama",
      link: "",
      consultant: "Alicia",
    },
    {
      id: 7,
      name: "U Iris",
      link: "",
      consultant: "Yohan",
    },
    {
      id: 8,
      name: "Lucca",
      link: "",
      consultant: "Christopher",
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
              <th>Nom Entreprise</th>
              <th>Lien Page</th>
              <th>Valider la Page</th>
              <th>Consultant</th>
            </tr>
            {arrayCompanies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>
                  <a href={company.link}>Voir la page</a>
                </td>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{company.consultant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
