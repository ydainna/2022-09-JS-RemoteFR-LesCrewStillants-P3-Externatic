import { useState } from "react";
import partnersData from "@services/partnersData";
import "./Partners.scss";

export default function Partners() {
  const [partnerSlide, setPartnerSlide] = useState(0);
  return (
    <section id="partners">
      <h1>Nos partenaires</h1>
      <p>Les plus grandes entreprises nous font confiance</p>
      <div className="partnersSlide">
        {partnersData[partnerSlide].map((partner) =>
          partner.url ? (
            <a
              href={partner.url}
              alt={`${partner.name} link`}
              target="__blank"
              key={partner.img}
            >
              <img src={partner.img} alt={partner.name} />
            </a>
          ) : (
            <img src={partner.img} alt={partner.name} key={partner.img} />
          )
        )}
      </div>

      <div className="sliderSpots">
        <span
          className={partnerSlide === 0 ? "spanChecked" : ""}
          onClick={() => {
            setPartnerSlide(0);
          }}
          aria-hidden="true"
        />
        <span
          className={partnerSlide === 1 ? "spanChecked" : ""}
          onClick={() => {
            setPartnerSlide(1);
          }}
          aria-hidden="true"
        />
        <span
          className={partnerSlide === 2 ? "spanChecked" : ""}
          onClick={() => {
            setPartnerSlide(2);
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
