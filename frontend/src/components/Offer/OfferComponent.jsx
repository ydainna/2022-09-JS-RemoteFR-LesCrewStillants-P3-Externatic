import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Notify from "@utils/notification";
import instance from "@utils/instance";
import parse from "html-react-parser";
import Heart from "@assets/icons/Heart.svg";
import jwtDecode from "jwt-decode";
import "./OfferComponent.scss";

function OfferComponent() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [company, setCompany] = useState([]);
  const [offers, setOffers] = useState([]);
  const [descJob, setDescJob] = useState("");
  const [descEntreprise, setDescEntreprise] = useState("");
  const [mission, setMission] = useState("");
  const [profil, setProfil] = useState("");
  const [advantages, setAdvantages] = useState("");
  const { id } = useParams();
  const token = sessionStorage.getItem("token");
  const [user, setUser] = useState(0);
  const [userOffer, setUserOffer] = useState([]);
  const [candidate, setCandidate] = useState(false);

  useEffect(() => {
    if (offers.length !== 0) {
      setDescJob(offers.job_description);
      setMission(offers.mission);
      setProfil(offers.seeked_profile);
      setAdvantages(offers.complementary_info);
    }
  }, [offers]);
  useEffect(() => {
    if (company.length !== 0) {
      setDescEntreprise(company.description);
    }
  }, [company]);

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
  }, []);

  const reloadInfo = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return instance
        .get(`/users/${decodedHeader.id}`)
        .then((response) => {
          setUser(response.data.id);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return "";
  };

  useEffect(() => {
    reloadInfo();
  }, []);

  const handleLike = () => {
    if (isFavorite) {
      instance
        .delete(`/uoffer/${user}/${offers.id}`)
        .then(() => {
          setIsFavorite(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      instance
        .post(`/uoffer`, {
          isFavorite: true,
          isApplied: false,
          user_id: user,
          offer_id: offers.id,
          consultant_id: company.user_id,
        })
        .then(() => {
          setIsFavorite(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleCandidate = () => {
    if (!candidate && token !== null) {
      instance
        .post(`/uoffer`, {
          isFavorite: false,
          isApplied: true,
          user_id: user,
          offer_id: offers.id,
          consultant_id: company.user_id,
        })
        .then(() => {
          setCandidate(true);
        })
        .catch((err) => {
          console.error(err);
        });

      Notify.success(
        "Merci d'avoir postulé, l'un de nos consultant vous contactera très bientôt"
      );
    }
  };

  const getData = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);
      instance
        .get(`/user-offers/${decodedHeader.id}`)
        .then((result) => {
          setUserOffer(result.data);
        })
        .then(() => console.warn(userOffer))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (userOffer.length !== 0) {
      userOffer
        .filter((off) => off.isFavorite)
        .forEach((currentoffer) => {
          if (currentoffer.offer_id === offers.id) {
            setIsFavorite(true);
          }
        });
    }

    if (userOffer.length !== 0) {
      userOffer
        .filter((off) => off.isApplied)
        .forEach((currentoffer) => {
          if (currentoffer.offer_id === offers.id) {
            setCandidate(true);
          }
        });
    }
  }, [offers]);

  return (
    <section
      className="container-offer"
      style={{
        backgroundImage: `url(${company.banner})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="banner_job-offer">
        <div className="title_job-offer">
          <h2>{offers.title}</h2>
          <h3>{company.name}</h3>
          <h3>{offers.localisation}</h3>
          <p>{offers.type_of_contract}</p>
          <p>{offers.compensation}</p>
          <p>{offers.schedule}</p>
        </div>
        <div className="buttons-offer">
          <button
            className={
              !candidate ? "button-offer" : "button-offer greyHeart-offer"
            }
            type="button"
            onClick={handleCandidate}
          >
            Postuler
          </button>
          <button className="heart-offer" type="button" onClick={handleLike}>
            <img
              src={Heart}
              className={isFavorite ? "" : "greyHeart-offer"}
              alt="Logo Heart"
            />
          </button>
        </div>
      </section>
      <section className="description_job-offer">
        <h2>Description du poste</h2>
        {parse(descJob)}
        <h2>Description de l'entreprise</h2>
        {parse(descEntreprise)}
        <div className="align-offer">
          <Link to={`/companies/${company.id}`}>
            <button className="button-offer" type="button">
              Voir l'entreprise
            </button>
          </Link>
        </div>
        <h2>Votre mission</h2>
        {parse(mission)}
        <h2>Profil et expérience souhaités</h2>
        {parse(profil)}
        <h2>Avantages</h2>
        {parse(advantages)}
        <div className="align-offer">
          <button
            className={
              !candidate ? "button-offer" : "button-offer greyHeart-offer"
            }
            type="button"
            onClick={handleCandidate}
          >
            Postuler
          </button>
        </div>
      </section>
    </section>
  );
}

export default OfferComponent;
