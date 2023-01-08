import "./SearchParameters.scss";

export default function SearchParameters() {
  return (
    <section id="searchParameters">
      <h1>Critères de recherche</h1>

      <p>
        Contrat <input type="text" />
      </p>
      <p>
        Date de Début <input type="text" />
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
        Technologie <input type="text" />
      </p>

      <button type="button">Enregistrer</button>
    </section>
  );
}
