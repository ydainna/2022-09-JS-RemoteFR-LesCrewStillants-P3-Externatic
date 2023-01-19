import { Link } from "react-router-dom";
import bannerOffer from "@assets/offers/bannerOffer.png";
import eye from "@assets/icons/eye.svg";

import "../../components/Company/company.scss";

export default function Company() {
  const arrayCompagnies = [
    {
      id: "1",
      name: "Nom de l'entreprise",
      desc: "Une super entreprise avec tout plein de choses chouettes et des babyfoot.",
      link: "https://www.externatic.fr/",
      sector: "Industrie",
    },
  ];

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
      {arrayCompagnies.map((compagny) => (
        <section key={compagny.id} className="entreprise">
          <img src={bannerOffer} alt="Entreprise" />

          <div className="presentation_entreprise">
            <div className="name_entreprise">
              <h2>{compagny.name}</h2>
              <p>{compagny.desc}</p>
              <a href={`${compagny.link}`} target="_blank" rel="noreferrer">
                Voir le site de l'entreprise
              </a>
            </div>
          </div>
          <h3>{compagny.sector}</h3>
        </section>
      ))}
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
