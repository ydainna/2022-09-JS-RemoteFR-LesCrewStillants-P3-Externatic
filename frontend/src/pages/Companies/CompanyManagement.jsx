import "./CManagement.scss";
import triangle from "@assets/icons/Triangle.svg";
import stylo from "@assets/icons/Pencil.svg"
import oeil from "@assets/icons/Eye.svg";


function CompanyManagement() {

    return (
        <>
            <div className="companyManag" >

                <div className="rectangle"><h4>Validation des pages Entreprises</h4></div>
            </div>

            <div className="button">
                <button className="bu">Entreprise<img className="tri" src={triangle}></img></button>
                <button className="bu">Crée une nouvelle page entreprise</button>
            </div>


            <section className="infos">
                <img className="image" src="https://img-0.journaldunet.com/gcFxQdXNrx_SEqEx53NYdxidcGM=/1500x/smart/df12c3d6f77445008518acae53aa34a4/ccmcms-jdn/11174895.jpg"></img>

                <div >
                    <p>Nom entreprise</p>
                </div>

                <div>
                    <p className="secteur" >Secteur</p>
                </div>


                <div>
                    <img className="icones" src={stylo}></img>
                </div>
            </section>


            <div className="tab" >

                <div className="tableau1" >
                    <p>Nom Offre - Ville</p>
                    <div>
                        <img className="icn" src={oeil}  ></img>
                        <img className="icn" src={stylo} ></img>
                    </div>
                </div>

                <div className="tableau2" >
                    <p>Nom Offre - Ville</p>
                    <div>
                        <img className="icn" src={oeil}  ></img>
                        <img className="icn" src={stylo} ></img>
                    </div>
                </div>

                <div className="tableau3" >
                    <p>Nom Offre - Ville</p>
                    <div>
                        <img className="icn" src={oeil}  ></img>
                        <img className="icn" src={stylo} ></img>
                    </div>
                </div>
            </div>

            <div className="end" >
                <button className="button_end">Ajoutez une offre</button>
            </div>






        </>

    )
}

export default CompanyManagement;
