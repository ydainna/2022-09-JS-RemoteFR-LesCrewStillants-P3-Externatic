import { useState } from "react";
import featuredData from "@services/featuredData";

import "./Slider.scss";

export default function Slider() {
  const [slideClasses, setSlideClasses] = useState([
    "slides slideLeft",
    "slides",
    "slides slideRight",
  ]);

  return (
    <section id="slider">
      {featuredData.map((slide) => (
        <div
          className={slideClasses[slide.class]}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="backgroundSlide">
            <h1>Secteur {slide.sector}</h1>
            <p>{slide.number} offres disponible</p>
          </div>
          <button type="button">Voir les offres</button>
        </div>
      ))}
      <button
        type="button"
        className="sliderNavigationLeft"
        onClick={() =>
          setSlideClasses(["slides", "slides slideRight", "slides slideLeft"])
        }
      >
        gauche
      </button>
      <button
        type="button"
        className="sliderNavigationRight"
        onClick={() =>
          setSlideClasses(["slides slideRight", "slides slideLeft", "slides"])
        }
      >
        droite
      </button>
    </section>
  );
}
