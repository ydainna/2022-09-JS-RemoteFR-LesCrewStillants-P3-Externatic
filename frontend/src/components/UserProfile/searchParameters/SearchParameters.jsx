import "./SearchParameters.scss";

export default function SearchParameters() {
  return (
    <section id="searchParameters">
      <h1>Critères de recherche</h1>

      <p>
        Contrat{" "}
        <select name="contrat" id="contrat-select">
          <option value="">--Veuillez choisir une option--</option>
          <option value="Alternance">Alternance</option>
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="Stage">Stage</option>
        </select>
      </p>
      <p>
        Date de Début <input type="date" />
      </p>
      <p>
        Localisation <input type="text" />
      </p>
      <p>
        Télétravail <input type="text" />
      </p>
      <p>
        Poste <input type="text" />
      </p>
      <p>
        Technologie Principale{" "}
        <select name="techonology" id="techonology-select">
          <option value="">--Veuillez choisir une option--</option>
          <option value="Java">Java</option>
          <option value="Javascript">Javascript</option>
          <option value="Php">Php</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
        </select>
      </p>

      <button type="button">Enregistrer</button>
    </section>
  );
}
