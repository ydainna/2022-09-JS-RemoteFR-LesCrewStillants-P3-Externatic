import { useState } from "react";
import { Link } from "react-router-dom";
import heart from "@assets/icons/Heart.svg";

import "./SubNavUsers.scss";

export default function SubNavUsers() {
  const [currentCandidatePage, setCurrentCandidatePage] = useState(0);

  return (
    <section id="SubNavUsers">
      <ul>
        <Link to="/profile" onClick={() => setCurrentCandidatePage(0)}>
          <li id={currentCandidatePage === 0 ? "currentCandidatePage" : ""}>
            Profil
          </li>
        </Link>

        <Link to="/favorite-offers" onClick={() => setCurrentCandidatePage(1)}>
          <li id={currentCandidatePage === 1 ? "currentCandidatePage" : ""}>
            Offres <img src={heart} alt="favorite icon" height="16px" />
          </li>
        </Link>

        <Link to="/candidatures" onClick={() => setCurrentCandidatePage(2)}>
          <li id={currentCandidatePage === 2 ? "currentCandidatePage" : ""}>
            Candidatures en cours
          </li>
        </Link>
      </ul>
    </section>
  );
}
