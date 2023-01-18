import { Player } from "@lottiefiles/react-lottie-player";
import sadPage from "../../assets/lottie/sadPage.json";

import "@components/Error/Error.scss";

export default function Error() {
  return (
    <>
      <div className="notFoundContainer">
        <Player autoplay loop src={sadPage} className="notFoundLottie" />
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
