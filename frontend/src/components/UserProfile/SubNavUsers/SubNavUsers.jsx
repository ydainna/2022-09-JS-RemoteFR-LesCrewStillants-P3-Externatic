import { useState } from "react";
import heart from "@assets/icons/Heart.svg";

import "./SubNavUsers.scss";

export default function SubNavUsers() {
  const [currentCandidatePage, setCurrentCandidatePage] = useState(0);

  return (
    <section id="SubNavUsers">
      <ul>
        <li
          id={currentCandidatePage === 0 ? "currentCandidatePage" : ""}
          onClick={() => setCurrentCandidatePage(0)}
          aria-hidden="true"
        >
          Profil
        </li>
        <li
          id={currentCandidatePage === 1 ? "currentCandidatePage" : ""}
          onClick={() => setCurrentCandidatePage(1)}
          aria-hidden="true"
        >
          Offres <img src={heart} alt="favorite icon" height="16px" />
        </li>
        <li
          id={currentCandidatePage === 2 ? "currentCandidatePage" : ""}
          onClick={() => setCurrentCandidatePage(2)}
          aria-hidden="true"
        >
          Candidatures en cours
        </li>
      </ul>
    </section>
  );
}
