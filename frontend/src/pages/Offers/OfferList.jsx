import React, { useState } from "react";
import CardOffer from "../../components/Offers/CardOffer";
import OffersToAccept from "../../services/offersToAccept";
import "../../components/Offers/offerlist.css";

function OfferList() {
  const [offers, setOffers] = useState(OffersToAccept);

  const handleSelect = (e) => {
    const typeContrat = e.target.value;
    const typeLocalisation = e.target.value;

    if (typeContrat === "CDI") {
      setOffers(OffersToAccept.filter((offer) => offer.contrat === "CDI"));
    } else if (typeContrat === "CDD") {
      setOffers(OffersToAccept.filter((offer) => offer.contrat === "CDD"));
    } else if (typeLocalisation === "Paris") {
      setOffers(
        OffersToAccept.filter((offer) => offer.localisation === "Paris")
      );
    } else if (typeLocalisation === "Toulouse") {
      setOffers(
        OffersToAccept.filter((offer) => offer.localisation === "Toulouse")
      );
    } else if (typeLocalisation === "Marseille") {
      setOffers(
        OffersToAccept.filter((offer) => offer.localisation === "Marseille")
      );
    } else {
      setOffers(OffersToAccept);
    }
  };

  const handleClick = (e) => {
    if (e.target.checked) {
      setOffers(OffersToAccept.filter((offer) => offer.remote));
    } else {
      setOffers(OffersToAccept);
    }
  };

  return (
    <div>
      <header>
        <h1>Offres d'emploi</h1>
      </header>
      <div className="wrapper">
        <div className="filters">
          <input
            type="text"
            className="search-input"
            placeholder="🔎 Type to search"
          />

          <select
            className="select-localisation"
            name="offer"
            onChange={handleSelect}
          >
            <option value="All">Localisation</option>
            <option value="Paris">Paris</option>
            <option value="Toulouse">Toulouse</option>
            <option value="Marseille">Marseille</option>
          </select>

          <select
            className="select-contract"
            name="offer"
            onChange={handleSelect}
          >
            <option value="All">Contrats</option>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
          </select>
          <div>
            <label htmlFor="remote">Show only Remote </label>
            <input
              type="checkbox"
              className="remote-checkbox"
              name="checkbox"
              id=""
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="offers-cards">
          <div className="cards">
            {offers.map((offer) => (
              <CardOffer key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferList;
