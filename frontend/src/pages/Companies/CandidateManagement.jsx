import "./CandidateManagement.scss";

import React, { useState, useEffect } from "react";
import instance from "@utils/instance";
import oeil from "@assets/icons/Eye.svg";
import { Link } from "react-router-dom";

function CanditateManagement() {
  const [candidats, setCandidats] = useState([]);
  const [filter, setFilter] = useState(candidats);
  const [array, setArray] = useState([]);

  useEffect(() => {
    instance
      .get(`/users`)
      .then((result) => {
        setCandidats(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (filter.length !== 0) {
      instance
        .get(`/user-offers/${filter[0].id}`)
        .then((result) => {
          setArray(result.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [filter]);

  const handleSelect = (e) => {
    setFilter(
      candidats.filter((comp) => comp.id === parseInt(e.target.value, 10))
    );
  };

  return (
    <section id="candidate-management">
      <div className="candidatManag">
        <div className="rectangle">
          <h4>Gestion des pages candidats</h4>
        </div>
      </div>

      <div className="buttons">
        <select
          onChange={handleSelect}
          className="select"
          name="candidats"
          id="candidats"
        >
          <option>Candidat</option>
          {candidats
            .filter((cand) => cand.role_id === 2)
            .map((candidat) => (
              <option value={candidat.id}>
                {candidat.firstname} {candidat.lastname}
              </option>
            ))}
        </select>

        <select className="select" name="filtre" id="filtre">
          <option value="">Filtrer par</option>
          <option value="favori">Favoris</option>
          <option value="candidatures">Candidatures</option>
          <option value="autres">Autres</option>
          <option value="tout">Voir tout</option>
        </select>
      </div>

      {filter.map((fil) => (
        <h5>
          {fil.firstname} {fil.lastname}
        </h5>
      ))}

      {array.map((fil) => (
        <div className="tab">
          <div className="affichage">
            {fil.isFavorite ? "A ajouter en favoris" : "A candidaté"}
          </div>
          <div className="affichage">
            <Link to={`/offers/${fil.offer_id}`} target="_blank">
              <img alt="#" className="icn" src={oeil} />
            </Link>
          </div>
        </div>
      ))}

      <div className="fin">
        <select className="select" name="filtre" id="filtre">
          <option value="">Consultants</option>
          {candidats
            .filter((candid) => candid.role_id === 3)
            .map((candidates) => (
              <option value={candidates.id}>
                {candidates.firstname} {candidates.lastname}
              </option>
            ))}
        </select>
        <button type="submit" className="bu">
          Transférez le Candidat
        </button>
        {filter[0] ? (
          <a href={`mailto:${filter[0].email}`}>
            <button type="submit" className="bu">
              Envoyer un message
            </button>
          </a>
        ) : (
          <button type="submit" className="bu">
            Envoyer un message
          </button>
        )}
      </div>
    </section>
  );
}

export default CanditateManagement;
