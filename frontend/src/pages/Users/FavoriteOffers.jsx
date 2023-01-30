import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import heart from "@assets/icons/Heart.svg";
import instance from "@utils/instance";

import "@components/UserProfile/FavoritesOffers.scss";

export default function FavoriteOffers() {
  const token = sessionStorage.getItem("token");
  const [arrayFavorite, setArrayFavorite] = useState([
    {
      id: 1,
      title: "Développeur Web Front-End",
      localisation: "Paris",
      isFavorite: 1,
    },
    {
      id: 2,
      title: "Développeur Web Front-End",
      localisation: "Lille",
      isFavorite: 1,
    },
    {
      id: 3,
      title: "Développeur Web Front-End",
      localisation: "Marseille",
      isFavorite: 1,
    },
    {
      id: 4,
      title: "Développeur Web Front-End",
      localisation: "Lyon",
      isFavorite: 1,
    },
    {
      id: 5,
      title: "Développeur Web Front-End",
      localisation: "Londres",
      isFavorite: 1,
    },
    {
      id: 6,
      title: "Développeur Web Front-End",
      localisation: "Bordeaux",
      isFavorite: 1,
    },
    {
      id: 7,
      title: "Développeur Web Back-End Symfony",
      localisation: "Paris",
      isFavorite: 1,
    },
    {
      id: 8,
      title: "Développeur Web Front-End",
      localisation: "Paris",
      isFavorite: 1,
    },
  ]);

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
    <LoggedUsersLayout>
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
    </LoggedUsersLayout>
  );
}
