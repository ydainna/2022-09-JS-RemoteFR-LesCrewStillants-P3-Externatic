import { useState } from "react";
import { Link } from "react-router-dom";

import "./SubNavSpecialUsers.scss";

export default function SubNavSpecialUsers({ role }) {
  const [currentCandidatePage, setCurrentCandidatePage] = useState(0);
  const [isAdminView, setIsAdminView] = useState(false);

  const handleAdminView = () => {
    setCurrentCandidatePage(2);
    setIsAdminView(!isAdminView);
  };

  return (
    <section id="SubNavSpecialUsers">
      <ul>
        <Link to={isAdminView ? "/users-management" : "/company-management"}>
          <li
            id={currentCandidatePage === 0 ? "currentCandidatePage" : ""}
            onClick={() => setCurrentCandidatePage(0)}
            aria-hidden="true"
          >
            {isAdminView
              ? "Gestion des Utilisateurs"
              : "Gestion des Pages Entreprises"}
          </li>
        </Link>

        <Link
          to={isAdminView ? "/companies-validation" : "/candidate-management"}
        >
          <li
            id={currentCandidatePage === 1 ? "currentCandidatePage" : ""}
            onClick={() => setCurrentCandidatePage(1)}
            aria-hidden="true"
          >
            {isAdminView
              ? "Validation des Pages Entreprises"
              : "Gestion des Candidats"}
          </li>
        </Link>

        {role === 1 ? (
          <li
            id={currentCandidatePage === 2 ? "currentCandidatePage" : ""}
            onClick={handleAdminView}
            aria-hidden="true"
          >
            {isAdminView ? "Panneau Consultant" : "Panneau Admin"}
          </li>
        ) : (
          ""
        )}
      </ul>
    </section>
  );
}
