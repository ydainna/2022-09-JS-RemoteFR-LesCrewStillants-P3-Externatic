import cvImg from "@assets/icons/CV.svg";

import "./Cv.scss";

export default function Cv() {
  return (
    <section id="cv">
      <h1>CV</h1>
      <div>
        <img src={cvImg} alt="Cv" />
        <button type="button">Mettre à jour le CV</button>
      </div>
      <button type="button">Enregistrer</button>
    </section>
  );
}
