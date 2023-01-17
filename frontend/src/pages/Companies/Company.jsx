import { Link } from "react-router-dom";
import bannerOffer from "@assets/offers/bannerOffer.png";
import eye from "@assets/icons/eye.svg";

import "../../components/Company/company.scss";

export default function Company() {
  const arrayOffersCompany = [
    { id: "1", name: "Nom de l'offre", city: "Lyon" },
    { id: "2", name: "Nom de l'offre", city: "Lille" },
    { id: "3", name: "Nom de l'offre", city: "Bordeaux" },
    { id: "4", name: "Nom de l'offre", city: "Lyon" },
    { id: "5", name: "Nom de l'offre", city: "Londres" },
    { id: "6", name: "Nom de l'offre", city: "Berlin" },
    { id: "7", name: "Nom de l'offre", city: "Paris" },
    { id: "8", name: "Nom de l'offre", city: "Tour" },
  ];
  return (
    <>
      <section className="entreprise">
        <img src={bannerOffer} alt="Entreprise" />
        <div className="presentation_entreprise">
          <div className="name_entreprise">
            <h2>Nom de l'entreprise</h2>
            <p>Description de l'entreprise</p>
            <a
              href="https://www.externatic.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Lien vers l'entreprise
            </a>
          </div>
        </div>
        <h3>Secteur</h3>
      </section>
      <section className="offres_entreprise">
        <h2 className="Liste_offres">Les offres de l'entreprise</h2>
        {arrayOffersCompany.map((offer) => (
          <p key={offer.id}>
            <span>
              {offer.name} - {offer.city}
            </span>
            <Link to={`/offers/:${offer.id}`}>
              <img src={eye} alt="Look icon" />
            </Link>
          </p>
        ))}
      </section>
    </>
  );
}
