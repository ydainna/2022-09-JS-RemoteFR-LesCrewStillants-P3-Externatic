import cvImg from "@assets/icons/Cv.svg";

import "./Cv.scss";

export default function Cv() {
  return (
    <section id="cv">
      <h1>CV</h1>
      <img src={cvImg} alt="Cv" />
      <button type="button">Mettre à jour le CV</button>
      <button type="button">Enregistrer</button>
    </section>
  );
}
