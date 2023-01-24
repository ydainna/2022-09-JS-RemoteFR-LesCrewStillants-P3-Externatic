import "./CandidateManagement.scss";



function Canditate_Management() {


    return (

        <>
            <div className="candidatManag">
                <div className="rectangle"><h4>Gestion des pages candidats</h4></div>
            </div>

            <div className="buttons" >
                <label for=""></label>
                <select name="candidats" id="candidats">
                    <option value="">Candidats</option>
                    <option value="dog">Martine Dupont</option>
                    <option value="cat">Michel Michelle</option>
                    <option value="hamster">Son Goku</option>
                </select>
                <label for="pet-select"></label>
                <select name="filtre" id="filtre">
                    <option value="">Filtrer par</option>
                    <option value="favori">Favoris</option>
                    <option value="candidatures">Candidatures</option>
                    <option value="autres">Autres</option>
                    <option value="tout">Voir tout</option>
                </select>
            </div>
            <h5>Martine Dupont</h5>

            <div className="tab" >

                <div className="tableau1" >
                    <p>Photo</p>
                    <div>
                        <p>12/06/2023</p>

                    </div>
                </div>

                <div className="tableau2" >
                    <p>En Favori</p>
                    <div>
                        <p><a href="">Offre</a></p>
                    </div>
                    <p>15/04/2022</p>
                </div>


                <div className="tableau1" >
                    <p>A postulé</p>
                    <div>
                        <p><a href="">Offre</a></p>
                    </div>
                    <p>01/04/2020</p>
                </div>

                <div className="tableau2" >
                    <p>Changement d'adresse</p>
                    <div>
                        <p>12/01/2023</p>
                    </div>
                </div>
            </div>

            <div className="fin" >
                <button className="bu">Consultants</button>
                <button className="bu">Transférez le Candidat</button>
                <button className="bu">Envoyer un message</button>
            </div>

        </>


    );

}

export default Canditate_Management;