import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import moment from "moment";

import instance from "@utils/instance";
import "@components/UserProfile/ProfileCandidat.scss";

export default function ProfileCandidat() {
  const [isOpen, setIsOpen] = useState(false);
  const [profil, setProfile] = useState([]);
  const [information, setInformation] = useState([]);
  const [address, setAddress] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await instance.get(`/users/${id}`);
        setProfile(profile.data);

        const infos = await instance.get(
          `/information/${profile.data.information_id}`
        );
        setInformation(infos.data);

        const adresse = await instance.get(
          `/address/${profile.data.address_id}`
        );
        setAddress(adresse.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(id);
  }, [id]);

  return (
    <section className="container_profile">
      <h1>Profil Candidat</h1>
      <section className="candidat_resume">
        <div className="candidat_presentation">
          <img
            className="avatar"
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/avatar/${
              profil.avatar !== "" ? profil.avatar : "avatarTemoin.png"
            }`}
            alt="Avatar"
          />
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
          <div>
            <iframe
              title={`${import.meta.env.VITE_BACKEND_URL}/uploads/cv/${
                information.cv
              }`}
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/cv/${
                information.cv
              }`}
              className="modal"
            />
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
