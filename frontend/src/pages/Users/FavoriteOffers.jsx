import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import heart from "@assets/icons/Heart.svg";

import "@components/UserProfile/FavoritesOffers.scss";

export default function FavoriteOffers() {
  const arrayFavorite = [
    { id: 1, name: "Développeur Web Front-End", city: "Paris" },
    { id: 2, name: "Développeur Web Front-End", city: "Lille" },
    { id: 3, name: "Développeur Web Front-End", city: "Marseille" },
    { id: 4, name: "Développeur Web Front-End", city: "Lyon" },
    { id: 5, name: "Développeur Web Front-End", city: "Londres" },
    { id: 6, name: "Développeur Web Front-End", city: "Bordeaux" },
    { id: 7, name: "Développeur Web Back-End Symfony", city: "Paris" },
    { id: 8, name: "Développeur Web Front-End", city: "Paris" },
  ];
  return (
    <LoggedUsersLayout>
      <section className="favorite-offers">
        {arrayFavorite.map((favorite) => (
          <p key={favorite.id}>
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
