import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "@utils/instance";

import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Pencil from "@assets/icons/Pencil.svg";
import Check from "@assets/icons/Check.svg";
import "./OfferForm.scss";

function OfferForm() {
  // States pour récupérer les données dans la database
  const [company, setCompany] = useState([]);
  const [offers, setOffers] = useState([]);
  const { id } = useParams();

  // States pour changer les données dans la database
  const [img, setImg] = useState("");
  const [nameJob, setNameJob] = useState("");
  const [nameEntreprise, setNameEntreprise] = useState("");
  const [adressEntreprise, setAdressEntreprise] = useState("");
  const [contrat, setContrat] = useState("");
  const [compensation, setCompensation] = useState("");
  const [schedule, setSchedule] = useState("");
  const [descJob, setDescJob] = useState("");
  const [descEntreprise, setDescEntreprise] = useState("");
  const [mission, setMission] = useState("");
  const [profil, setProfil] = useState("");
  const [advantages, setAdvantages] = useState("");

  // States pour actionner l'état édition on/off de la page
  const [isEditingForm1, setIsEditingForm1] = useState(false);
  const [isEditingForm2, setIsEditingForm2] = useState(false);
  const [isEditingForm3, setIsEditingForm3] = useState(false);
  const [modif, setModif] = useState("Pencil");
  const [showModal, setShowModal] = useState(false);
  const images = {
    Pencil,
    Check,
  };

  // Pour le 2ème form, la dépendance react-quill nous oblige à récupérer une string vide dans le state, c'est pourquoi on utilise un useEffect pour récupérer les données dans un 2ème temps.
  useEffect(() => {
    if (offers.length !== 0) {
      setNameJob(offers.title);
      setAdressEntreprise(offers.localisation);
      setContrat(offers.type_of_contract);
      setCompensation(offers.compensation);
      setSchedule(offers.schedule);
      setDescJob(offers.job_description);
      setMission(offers.mission);
      setProfil(offers.seeked_profile);
      setAdvantages(offers.complementary_info);
    }
  }, [offers]);
  useEffect(() => {
    if (company.length !== 0) {
      setImg(company.banner);
      setNameEntreprise(company.name);
      setDescEntreprise(company.description);
    }
  }, [company]);

  // useEffect pour récupérer les données de la database
  useEffect(() => {
    instance
      .get(`/offers/${id}`)
      .then((result) => {
        setOffers(result.data);
        // extract the company_id from the returned data
        const companyId = result.data.company_id;
        // make the second request using the company_id
        instance
          .get(`/company/${companyId}`)
          .then((results) => {
            setCompany(results.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  // Fonctions handleEdit qui permettent de passer en mode édition des formulaires
  function handleEdit1() {
    setIsEditingForm1(!isEditingForm1);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function handleEdit2() {
    setIsEditingForm2(!isEditingForm2);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function handleEdit3() {
    setIsEditingForm3(!isEditingForm3);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function toggleModal() {
    handleEdit3();
    setShowModal(!showModal);
  }

  // Fonction pour update les données dans la database
  function handleSubmit(event) {
    event.preventDefault();
    setIsEditingForm1(false);
    setIsEditingForm2(false);
    console.warn("infos envoyées");
    // Envoyer les données vers le backend ici
    instance
      .put(`/offers/${id}`, {
        title: nameJob,
        localisation: adressEntreprise,
        type_of_contract: contrat,
        compensation,
        schedule,
        job_description: descJob,
        mission,
        seeked_profile: profil,
        complementary_info: advantages,
      })
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section
      className="container"
      style={{ backgroundImage: `url(${company.banner})` }}
      onChange={(event) => setImg(event.target.value)}
    >
      <div className="titre">
        <h1>Enregistrer une nouvelle offre d'emploi</h1>
      </div>
      <div className="banner_top">
        <button className="button" type="submit" onClick={() => toggleModal()}>
          <img src={images[modif]} alt="Modif" />
        </button>
        {showModal && (
          <form className="modal_form" onSubmit={handleSubmit}>
            <p>Changer l'image :</p>
            <input
              type="text"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
          </form>
        )}
      </div>
      <section className="banner_job">
        {isEditingForm1 ? (
          <>
            <form className="title_job" onSubmit={handleSubmit}>
              <input
                type="text"
                value={nameJob}
                onChange={(event) => setNameJob(event.target.value)}
              />
              <input
                type="text"
                value={nameEntreprise}
                onChange={(event) => setNameEntreprise(event.target.value)}
              />
              <input
                type="text"
                value={adressEntreprise}
                onChange={(event) => setAdressEntreprise(event.target.value)}
              />
              <input
                type="text"
                value={contrat}
                onChange={(event) => setContrat(event.target.value)}
              />
              <input
                type="text"
                value={compensation}
                onChange={(event) => setCompensation(event.target.value)}
              />
              <input
                type="text"
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
              />
            </form>
            <button className="button" type="submit" onClick={handleEdit1}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </>
        ) : (
          <>
            <form className="title_job">
              <h2>{nameJob}</h2>
              <h3>{nameEntreprise}</h3>
              <h3>{adressEntreprise}</h3>
              <p>{contrat}</p>
              <p>{compensation}</p>
              <p>{schedule}</p>
            </form>
            <button className="button" type="submit" onClick={handleEdit1}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </>
        )}
      </section>
      <section className="banner_description">
        {isEditingForm2 ? (
          <>
            <form className="description_job" onSubmit={handleSubmit}>
              <h2 className="first-h2">Description du poste</h2>
              <ReactQuill
                theme="snow"
                value={descJob}
                rows={4}
                onChange={(value) => setDescJob(value)}
              />
              <h2>Description de l'entreprise</h2>
              <ReactQuill
                theme="snow"
                rows={4}
                value={descEntreprise}
                onChange={(value) => setDescEntreprise(value)}
              />
              <h2>Votre mission</h2>
              <ReactQuill
                theme="snow"
                rows={4}
                value={mission}
                onChange={(value) => setMission(value)}
              />
              <h2>Profil et expérience souhaités</h2>
              <ReactQuill
                theme="snow"
                rows={4}
                value={profil}
                onChange={(value) => setProfil(value)}
              />
              <h2>Avantages</h2>
              <ReactQuill
                theme="snow"
                rows={4}
                value={advantages}
                onChange={(value) => setAdvantages(value)}
              />
            </form>
            <div className="align">
              <button className="button" type="submit" onClick={handleEdit2}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </div>
          </>
        ) : (
          <>
            <form className="description_job">
              <h2 className="first-h2">Description du poste</h2>
              <p>{parse(descJob)}</p>
              <h2>Description de l'entreprise</h2>
              <p>{parse(descEntreprise)}</p>
              <h2>Votre mission</h2>
              <p>{parse(mission)}</p>
              <h2>Profil et expérience souhaités</h2>
              <p>{parse(profil)}</p>
              <h2>Avantages</h2>
              <p>{parse(advantages)}</p>
            </form>
            <div className="align">
              <button className="button" type="submit" onClick={handleEdit2}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </div>
          </>
        )}
      </section>
      <div className="align">
        <button className="button_valid" type="submit" onClick={handleSubmit}>
          Envoyer les modifications
        </button>
      </div>
    </section>
  );
}

export default OfferForm;
