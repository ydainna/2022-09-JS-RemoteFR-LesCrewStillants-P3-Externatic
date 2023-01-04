import partnersData from "@services/partnersData";
import "./Partners.scss";

export default function Partners() {
  return (
    <section id="partners">
      {partnersData.map((partners) => (
        <div className="partnersSlide">
          {partners.map((partner) =>
            partner.url ? (
              <a
                href={partner.url}
                alt={`${partner.name} link`}
                target="__blank"
              >
                <img src={partner.img} alt={partner.name} />
              </a>
            ) : (
              <img src={partner.img} alt={partner.name} />
            )
          )}
        </div>
      ))}
    </section>
  );
}
