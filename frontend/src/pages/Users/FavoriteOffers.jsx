import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import jwtDecode from "jwt-decode";
import Heart from "@assets/icons/Heart.svg";
import instance from "@utils/instance";
import empty from "../../assets/lottie/empty.json";

import "@components/UserProfile/FavoritesOffers.scss";

export default function FavoriteOffers() {
  const token = sessionStorage.getItem("token");
  const [arrayFavorite, setArrayFavorite] = useState([]);
  const [user, setUser] = useState(0);
  const [isFavorite, setIsFavorite] = useState(true);

  const navigate = useNavigate();

  const getData = (decodedHeader) => {
    instance
      .get(`/user-offers/${decodedHeader.id}`)
      .then((result) => {
        setArrayFavorite(result.data);
        setIsFavorite(result.data.filter((off) => off.isFavorite).length === 0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLike = (favorite) => {
    instance
      .delete(`/uoffer/${user}/${favorite}`)
      .then(() => {
        setIsFavorite(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);
      setUser(decodedHeader.id);
      return getData(decodedHeader);
    }
    return navigate("/login");
  }, [handleLike]);

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
                <button
                  className="heart-offer"
                  type="button"
                  onClick={() => handleLike(favorite.id)}
                >
                  <img
                    src={Heart}
                    className={isFavorite ? "" : "greyHeart-offer"}
                    alt="Logo Heart"
                  />
                </button>
              </p>
            ))}
        </>
      )}
    </section>
  );
}
