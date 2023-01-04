import featuredData from "@services/featuredData";

import "./Slider.scss";

export default function Slider() {
  return (
    <section id="slider">
      {featuredData.map((slide) => (
        <div
          className="slides"
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="backgroundSlide">
            <h1>Secteur {slide.sector}</h1>
            <p>{slide.number} offres disponible</p>
          </div>
          <button type="button">Voir les offres</button>
        </div>
      ))}
    </section>
  );
}
