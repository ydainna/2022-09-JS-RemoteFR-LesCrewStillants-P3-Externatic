import "./CurrentSituation.scss";

export default function CurrentSituation() {
  return (
    <section id="currentSituation">
      <form action="">
        <h1>Situation Actuelle</h1>
        <label>
          Recherche Active <input type="radio" name="search" value="active" />
        </label>

        <label>
          Recherche Passive{" "}
          <input type="radio" name="search" value="passive" checked />
        </label>

        <button type="button">Enregistrer</button>
      </form>
    </section>
  );
}
