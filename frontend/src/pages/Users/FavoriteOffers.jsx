import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import heart from "@assets/icons/Heart.svg";
import instance from "@utils/instance";

import "@components/UserProfile/FavoritesOffers.scss";

export default function FavoriteOffers() {
  const token = sessionStorage.getItem("token");
  const [arrayFavorite, setArrayFavorite] = useState([]);

  const navigate = useNavigate();

  const getData = (decodedHeader) => {
    instance
      .get(`/user-offers/${decodedHeader.id}`)
      .then((result) => {
        setArrayFavorite(result.data);
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

  return (
    <section className="favorite-offers">
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
    </section>
  );
}
