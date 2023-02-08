import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import jwtDecode from "jwt-decode";
import heart from "@assets/icons/Heart.svg";
import instance from "@utils/instance";
import empty from "../../assets/lottie/empty.json";

import "@components/UserProfile/FavoritesOffers.scss";

export default function FavoriteOffers() {
  const token = sessionStorage.getItem("token");
  const [arrayFavorite, setArrayFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(true);

  const navigate = useNavigate();

  const getData = (decodedHeader) => {
    instance
      .get(`/user-offers/${decodedHeader.id}`)
      .then((result) => {
        setArrayFavorite(result.data);
        setIsFavorite(result.data.length === 0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return getData(decodedHeader);
    }
    return navigate("/login");
  }, []);

  // const handleLike = () => {
  //   if (isFavorite) {
  //     instance
  //       .delete(`/uoffer/${user}/${offer.id}`)
  //       .then(() => {
  //         setIsFavorite(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } else {
  //     instance
  //       .post(`/uoffer`, {
  //         isFavorite: true,
  //         isApplied: false,
  //         user_id: user,
  //         offer_id: offer.id,
  //         consultant_id: company.user_id,
  //       })
  //       .then(() => {
  //         setIsFavorite(true);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // };

  return (
    <section className="favorite-offers">
      {isFavorite ? (
        <>
          Vous n'avez pas encore mis d'offres en favoris
          <br />
          <br />
          <br />
          <Player autoplay loop src={empty} className="notFoundLottie" />
        </>
      ) : (
        <>
          {arrayFavorite
            .filter((fav) => fav.isFavorite === 1)
            .map((favorite) => (
              <p key={favorite.id}>
                <span>
                  {favorite.title} - {favorite.localisation}
                </span>
                <img src={heart} alt="favorite icon" />
              </p>
            ))}
        </>
      )}
    </section>
  );
}
