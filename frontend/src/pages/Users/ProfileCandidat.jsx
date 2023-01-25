import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
// import cvExp from "@assets/cv/cvExp.png";

import instance from "@utils/instance";
import "@components/UserProfile/ProfileCandidat.scss";

export default function ProfileCandidat() {
  const [isOpen, setIsOpen] = useState(false);
  const [profil, setProfile] = useState([]);
  const [information, setInformation] = useState([]);
  const [address, setAddress] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/users/${id}`)
      .then((result) => {
        setProfile(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    instance
      .get(`/information/${profil.information_id}`)
      .then((result) => {
        setInformation(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [profil.information_id]);

  useEffect(() => {
    instance
      .get(`/address/${profil.address_id}`)
      .then((result) => {
        setAddress(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [profil.address_id]);

  return (
    <section className="container_profile">
      <h1>Profil Candidat</h1>
      <section className="candidat_resume">
        <div className="candidat_presentation">
          <img className="avatar" src={profil.avatar} alt="Avatar" />
          <div className="description">
            <p>
              {profil.firstname} {profil.lastname}
            </p>
            <p>
              {address.number_address} {address.street_name} {address.zipcode}{" "}
              {address.city}
            </p>
            <p>{profil.email}</p>
            <p>{profil.phone_number}</p>
          </div>
        </div>
        <div className="candidat_titre">{information.job}</div>
        <button
          type="button"
          className="button_cv"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Fermer" : "Voir le CV"}
        </button>
        {isOpen && (
          <div className="modal">
            <img src={information.cv} className="modal" alt="Cv" />
          </div>
        )}
      </section>
      <section className="candidat_souhaits">
        <div className="boxes">
          <div className="box1">
            <p>Situation actuelle :</p>
          </div>
          <div className="box2">
            <p>{information.actual_situation}</p>
          </div>
          <div className="box3">
            <p>Critères de recherche :</p>
          </div>
          <div className="box4">
            <p>Type de contrat : {information.type_of_contract}</p>
            <p>
              Date de début :{" "}
              {moment(information.start_date).format("DD/MM/YYYY")}
            </p>
            <p>Localisation : {information.localisation_job}</p>
            <p>{`Souhait : ${
              information.isRemote ? "Télétravail souhaité" : "Présentiel"
            }`}</p>
            <p>Poste recherché : {information.job}</p>
            <p>Technos : {information.technology}</p>
          </div>
        </div>
      </section>
      <button type="button" className="contact_button">
        Contacter
      </button>
    </section>
  );
}
