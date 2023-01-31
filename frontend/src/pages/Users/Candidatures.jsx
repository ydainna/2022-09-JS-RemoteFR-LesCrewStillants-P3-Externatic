import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import instance from "@utils/instance";
import "@components/UserProfile/Candidatures.scss";

export default function Candidatures() {
  const token = sessionStorage.getItem("token");
  const [arrayCandidature, setArrayCandidature] = useState([
    {
      id: 1,
      title: "Développeur Web Front-End",
      localisation: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 2,
      title: "Développeur Web Front-End",
      localisation: "Lille",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 3,
      title: "Développeur Web Front-End",
      localisation: "Marseille",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 4,
      title: "Développeur Web Front-End",
      localisation: "Lyon",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 5,
      title: "Développeur Web Front-End",
      localisation: "Londres",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 6,
      title: "Développeur Web Front-End",
      localisation: "Bordeaux",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 7,
      title: "Développeur Web Back-End Symfony",
      localisation: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
    {
      id: 8,
      title: "Développeur Web Front-End",
      localisation: "Paris",
      feedback: "Retour Entreprise",
      meeting: "Entretien",
      isApplied: 1,
    },
  ]);

  const navigate = useNavigate();

  const getData = (decodedHeader) => {
    instance
      .get(`/user-offers/${decodedHeader.id}`)
      .then((result) => {
        setArrayCandidature(result.data);
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
      <section className="candidatures">
        <table width="100%">
          <tbody>
            <tr>
              <th>Offre</th>
              <th>Retour Entreprise</th>
              <th>Entretien</th>
            </tr>
            {arrayCandidature
              .filter((cand) => cand.isApplied === 1)
              .map((apply) => (
                <tr key={apply.id}>
                  <td>
                    {apply.title} - {apply.localisation}
                  </td>
                  <td>{apply.feedback}</td>
                  <td>{apply.meeting}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </LoggedUsersLayout>
  );
}
