import { useState } from "react";
import partnersData from "@services/partnersData";
import "./Partners.scss";

export default function Partners() {
  const [partnerSlide, setPartnerSlide] = useState(0);
  return (
    // <section id="partners">
    //   {partnersData.map((partners) => (
    //     <div className="partnersSlide">
    //       {partners.map((partner) =>
    //         partner.url ? (
    //           <a
    //             href={partner.url}
    //             alt={`${partner.name} link`}
    //             target="__blank"
    //           >
    //             <img src={partner.img} alt={partner.name} />
    //           </a>
    //         ) : (
    //           <img src={partner.img} alt={partner.name} />
    //         )
    //       )}
    //     </div>
    //   ))}
    // </section>

    <section id="partners">
      <div className="partnersSlide">
        {partnersData[partnerSlide].map((partner) =>
          partner.url ? (
            <a href={partner.url} alt={`${partner.name} link`} target="__blank">
              <img src={partner.img} alt={partner.name} />
            </a>
          ) : (
            <img src={partner.img} alt={partner.name} />
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
