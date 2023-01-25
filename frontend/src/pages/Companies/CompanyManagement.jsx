import "./CManagement.scss";
import triangle from "@assets/icons/Triangle.svg";
import stylo from "@assets/icons/Pencil.svg";
import oeil from "@assets/icons/Eye.svg";

function CompanyManagement() {
  return (
    <section id="company-management">
      <div className="companyManag">
        <div className="rectangle">
          <h4>Validation des pages Entreprises</h4>
        </div>
      </div>

      <div className="button">
        <button type="submit" className="bu">
          Entreprise
          <img alt="#" className="tri" src={triangle} />
        </button>
        <button type="submit" className="bu">
          Crée une nouvelle page entreprise
        </button>
      </div>

      <div className="infos">
        <img
          className="image"
          alt="#"
          src="https://img-0.journaldunet.com/gcFxQdXNrx_SEqEx53NYdxidcGM=/1500x/smart/df12c3d6f77445008518acae53aa34a4/ccmcms-jdn/11174895.jpg"
        />

        <div>
          <p>Nom entreprise</p>
        </div>

        <div>
          <p className="secteur">Secteur</p>
        </div>

        <div>
          <img alt="#" className="icones" src={stylo} />
        </div>

        <div>
          <p>Description</p>
        </div>

        <div>
          <p>Lien vers votre site</p>
        </div>
      </div>

      <div className="tab">
        <div className="tableau1">
          <p>Nom Offre - Ville</p>
          <div>
            <img alt="#" className="icn" src={oeil} />
            <img alt="#" className="icn" src={stylo} />
          </div>
        </div>

        <div className="tableau2">
          <p>Nom Offre - Ville</p>
          <div>
            <img alt="#" className="icn" src={oeil} />
            <img alt="#" className="icn" src={stylo} />
          </div>
        </div>

        <div className="tableau3">
          <p>Nom Offre - Ville</p>
          <div>
            <img alt="#" className="icn" src={oeil} />
            <img alt="#" className="icn" src={stylo} />
          </div>
        </div>
      </div>

      <div className="end">
        <button type="submit" className="button_end">
          Ajoutez une offre
        </button>
      </div>
    </section>
  );
}

export default CompanyManagement;
