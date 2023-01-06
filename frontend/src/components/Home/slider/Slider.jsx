import { useState } from "react";
import featuredData from "@services/featuredData";

import "./Slider.scss";

export default function Slider() {
  const [slideClasses, setSlideClasses] = useState([
    "slides slideLeft",
    "slides",
    "slides slideRight",
  ]);

  const handleLeftArrowSlider = () => {
    const arraySliderReorder = slideClasses.slice(0, 2);
    arraySliderReorder.unshift(slideClasses[2]);
    setSlideClasses(arraySliderReorder);
  };

  const handleRightArrowSlider = () => {
    const arraySliderReorder = slideClasses.slice(1);
    arraySliderReorder.push(slideClasses[0]);
    setSlideClasses(arraySliderReorder);
  };

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
        onClick={() => handleLeftArrowSlider()}
      >
        gauche
      </button>
      <button
        type="button"
        className="sliderNavigationRight"
        onClick={() => handleRightArrowSlider()}
      >
        droite
      </button>
    </section>
  );
}
