import "./CurrentSituation.scss";

export default function CurrentSituation() {
  return (
    <section id="currentSituation">
      <h1>Situation Actuelle</h1>
      <label>
        Recherche Active <input type="radio" />
      </label>

      <label>
        Recherche Passive <input type="radio" checked />
      </label>

      <button type="button">Enregistrer</button>
    </section>
  );
}
