import React from "react";

import "./banner.scss";

export default function Banner() {
  return (
    <section className="totalBanner">
      <div className="textBanner">
        <h2>Nous cassons les codes du recrutement informatique</h2>
        <p>
          Externatic est un cabinet de recrutement informatique et de conseil RH
          qui répond aux vrais besoins de vraies personnes.
        </p>
      </div>
      <div className="buttonsBanner">
        <button type="button">Je suis un candidat</button>
        <button type="button">Je suis une entreprise</button>
      </div>
    </section>
  );
}
