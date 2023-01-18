import { Player } from "@lottiefiles/react-lottie-player";
import sadPage from "../../assets/lottie/sadPage.json";

import "@components/Error/Error.scss";

export default function Error() {
  return (
    <>
      <div className="notFoundContainer">
        <Player autoplay loop src={sadPage} className="notFoundLottie" />
        <h2>
          Il semblerais ne rien y avoir ici aucune entreprise, aucune offre rien
          ... seulement une page vide assise ici en attendant de trouver la
          bonne recherche.
        </h2>
        <h2>
          Est-ce vous ? vous pouvez retourner à l'accueil du site si vous le
          souhaitez
        </h2>
        <button type="button" className="notFoundButton">
          Go Back
        </button>
      </div>
      {/*
        __                 
        '. \  🅷🅴🅻🅻🅾, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅴🅻🅼🅴🆁 ❗
        '- \               
          / /_         .---.
        / | \\,.\/--.//    )
        |  \//        )/  / 
          \  ' ^ ^    /    )____.----..  6
          '.____.    .___/            \._) 
              .\/.                      )
              '\                       /
              _/ \/    ).        )    (
              /#  .!    |        /\    /
              \  C// #  /'-----''/ #  / 
          .   'C/ |    |    |   |    |mrf  ,
          \), .. .'OOO-'. ..'OOO'OOO-'. ..\(,
      */}
    </>
  );
}
