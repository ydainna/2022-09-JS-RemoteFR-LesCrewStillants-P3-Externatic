import "./CurrentSituation.scss";

export default function CurrentSituation() {
  return (
    <section id="currentSituation">
      <h1>Situation Actuelle</h1>
      <p>
        Recherche Active <input type="radio" />
      </p>

      <p>
        Recherche Passive <input type="radio" />
      </p>

      <button type="button">Enregistrer</button>
    </section>
  );
}
