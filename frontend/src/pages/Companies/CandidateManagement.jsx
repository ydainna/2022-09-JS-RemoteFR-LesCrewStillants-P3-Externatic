import "./CandidateManagement.scss";

function CanditateManagement() {
  return (
    <div>
      <div className="candidatManag">
        <div className="rectangle">
          <h4>Gestion des pages candidats</h4>
        </div>
      </div>

      <div className="buttons">
        <select className="select" name="candidats" id="candidats">
          <option value="">Candidats</option>
          <option value="dog">Martine Dupont</option>
          <option value="cat">Michel Michelle</option>
          <option value="hamster">Son Goku</option>
        </select>

        <select className="select" name="filtre" id="filtre">
          <option value="">Filtrer par</option>
          <option value="favori">Favoris</option>
          <option value="candidatures">Candidatures</option>
          <option value="autres">Autres</option>
          <option value="tout">Voir tout</option>
        </select>
      </div>
      <h5>Martine Dupont</h5>

      <div className="tab">
        <div className="tableau1">
          <p>Photo</p>
          <div>
            <p>12/06/2023</p>
          </div>
        </div>

        <div className="tableau2">
          <p>En Favori</p>
          <div>
            <p>
              <p>Offre</p>
            </p>
          </div>
          <p>15/04/2022</p>
        </div>

        <div className="tableau1">
          <p>A postulé</p>
          <div>
            <p>
              <p>Offre</p>
            </p>
          </div>
          <p>01/04/2020</p>
        </div>

        <div className="tableau2">
          <p>Changement d'adresse</p>
          <div>
            <p>12/01/2023</p>
          </div>
        </div>
      </div>

      <div className="fin">
        <select className="select" name="filtre" id="filtre">
          <option value="">Consultants</option>
        </select>
        <button type="submit" className="bu">
          Transférez le Candidat
        </button>
        <button type="submit" className="bu">
          Envoyer un message
        </button>
      </div>
    </div>
  );
}

export default CanditateManagement;
