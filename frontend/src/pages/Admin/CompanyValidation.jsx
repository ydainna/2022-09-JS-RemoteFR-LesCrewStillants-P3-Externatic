import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "@utils/instance";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";
import ConsultantName from "@components/ManagementsPages/Admin/ConsultantName";

import "@components/ManagementsPages/Admin/CompanyValidation.scss";

export default function CompanyValidation() {
  const [arrayCompanies, setArrayCompanies] = useState([]);
  const [companiesToValidate, setCompaniesToValidate] = useState([]);

  const handleChangeValidate = (e) => {
    const { name, value } = e.target;
    setCompaniesToValidate({ ...companiesToValidate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .patch(`company/validate${companiesToValidate}`, "1")
      .then((result) => {
        console.warn(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    instance
      .get("/company")
      .then((result) => {
        setArrayCompanies(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SpecialUsersLayout>
      <section className="companies-validation">
        <h1>Validation des Pages Entreprises</h1>
        <button type="button" onClick={handleSubmit}>
          Valider la page entreprise
        </button>
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
                  <Link to={`/companies/${company.id}`} target="_blank">
                    Voir la page
                  </Link>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="validate"
                    value={company.id}
                    onChange={handleChangeValidate}
                    checked={!!company.is_validated}
                  />
                </td>
                <td>
                  <ConsultantName id={company.user_id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </SpecialUsersLayout>
  );
}
