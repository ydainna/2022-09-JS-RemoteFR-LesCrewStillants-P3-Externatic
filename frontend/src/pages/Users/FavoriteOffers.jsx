import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import heart from "@assets/icons/Heart.svg";

import "@components/UserProfile/FavoritesOffers.scss";

export default function FavoriteOffers() {
  const arrayFavorite = [
    { name: "Développeur Web Front-End", city: "Paris" },
    { name: "Développeur Web Front-End", city: "Lille" },
    { name: "Développeur Web Front-End", city: "Marseille" },
    { name: "Développeur Web Front-End", city: "Lyon" },
    { name: "Développeur Web Front-End", city: "Londres" },
    { name: "Développeur Web Front-End", city: "Bordeaux" },
    { name: "Développeur Web Back-End Symfony", city: "Paris" },
    { name: "Développeur Web Front-End", city: "Paris" },
  ];
  return (
    <LoggedUsersLayout>
      <section className="favorite-offers">
        {arrayFavorite.map((favorite) => (
          <p>
            <span>
              {favorite.name} - {favorite.city}
            </span>
            <img src={heart} alt="favorite icon" />
          </p>
        ))}
      </section>
    </LoggedUsersLayout>
  );
}
