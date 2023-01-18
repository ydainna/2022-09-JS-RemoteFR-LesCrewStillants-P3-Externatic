import "./SearchParameters.scss";

export default function SearchParameters() {
  return (
    <section id="searchParameters">
      <form>
        <h1>Critères de recherche</h1>

        <label>
          Contrat{" "}
          <select name="contrat" id="contrat-select">
            <option value="">--Veuillez choisir une option--</option>
            <option value="Alternance">Alternance</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Stage">Stage</option>
          </select>
        </label>
        <label>
          Date de Début <input type="date" />
        </label>
        <label>
          Localisation <input type="text" />
        </label>
        <label>
          Télétravail{" "}
          <select name="teletravail" id="teletravail-select">
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </label>
        <label>
          Poste <input type="text" />
        </label>
        <label>
          Technologie Principale{" "}
          <select name="techonology" id="techonology-select">
            <option value="">--Veuillez choisir une option--</option>
            <option value="Java">Java</option>
            <option value="Javascript">Javascript</option>
            <option value="Php">Php</option>
            <option value="Python">Python</option>
            <option value="Ruby">Ruby</option>
          </select>
        </label>

        <button type="button">Enregistrer</button>
      </form>
    </section>
  );
}
