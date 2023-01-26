import "./Address.scss";

export default function Address({ id, handleSubmit, handleChange }) {
  return (
    <section id="address">
      <form onSubmit={handleSubmit}>
        <h1>Adresse</h1>
        <div>
          <label>
            Numéro{" "}
            <input
              type="number"
              value={id.number_address}
              onChange={handleChange}
            />
          </label>
          <label>
            Rue{" "}
            <input type="text" value={id.street_name} onChange={handleChange} />
          </label>
        </div>
        <label>
          Informations Complémentaires{" "}
          <input
            type="text"
            value={id.complementary_info}
            onChange={handleChange}
          />
        </label>
        <div>
          <label>
            Code Postal{" "}
            <input type="number" value={id.zipcode} onChange={handleChange} />
          </label>
          <label>
            Ville <input type="text" value={id.city} onChange={handleChange} />
          </label>
        </div>
        <label>
          Pays <input type="text" value={id.country} onChange={handleChange} />
        </label>

        <button type="button">Enregistrer</button>
      </form>
    </section>
  );
}
