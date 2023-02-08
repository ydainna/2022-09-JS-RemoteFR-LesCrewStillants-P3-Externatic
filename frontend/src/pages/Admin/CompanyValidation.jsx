import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "@utils/instance";
import jwtDecode from "jwt-decode";
import Notify from "@utils/notification";
import ConsultantName from "@components/ManagementsPages/Admin/ConsultantName";

import "@components/ManagementsPages/Admin/CompanyValidation.scss";

export default function CompanyValidation() {
  const [arrayCompanies, setArrayCompanies] = useState([]);

  const handleCheck = (companyId, isChecked) => {
    setArrayCompanies(
      arrayCompanies.map((company) =>
        company.id === companyId
          ? { ...company, is_validated: isChecked }
          : company
      )
    );
  };

  const handleSubmit = () => {
    arrayCompanies.forEach((company) => {
      instance
        .patch(`/company/validate/${company.id}`, {
          is_validated: company.is_validated,
        })
        .then(() => {})
        .catch((err) => {
          console.error(err);
        });
    });
    Notify.success("Les pages entreprises ont bien été validées");
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

  // Check if you're admin or consultant + get role for subNav component
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const reloadInfo = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return instance
        .get(`/users/${decodedHeader.id}`)
        .then((response) => {
          if (response.data.role_id === 3) {
            Notify.error("Vous n'avez pas accès aux pages admin.");
            return navigate("/company-management");
          }

          return "";
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return navigate("/company-management");
  };

  useEffect(() => {
    reloadInfo();
  }, []);

  return (
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
                <Link
                  className="link"
                  to={`/companies/${company.id}`}
                  target="_blank"
                >
                  Voir la page
                </Link>
              </td>
              <td>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-box"
                    checked={company.is_validated}
                    onChange={(e) => handleCheck(company.id, e.target.checked)}
                    name="is_validated"
                  />
                  <span className="checkbox-cursor" />
                </label>
              </td>
              <td>
                <ConsultantName id={company.user_id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
