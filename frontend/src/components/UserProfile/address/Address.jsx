import "./Address.scss";

export default function Address({ id }) {
  console.warn(id);
  // number address -
  // street_name
  // complementary info
  // zipcode
  // city
  // country
  return (
    <section id="address">
      <form>
        <h1>Adresse</h1>
        <div>
          <label>
            Numéro <input type="number" />
          </label>
          <label>
            Rue <input type="text" />
          </label>
        </div>
        <label>
          Informations Complémentaires <input type="text" />
        </label>
        <div>
          <label>
            Code Postal <input type="number" />
          </label>
          <label>
            Ville <input type="text" />
          </label>
        </div>
        <label>
          Pays <input type="text" />
        </label>

        <button type="button">Enregistrer</button>
      </form>
    </section>
  );
}
