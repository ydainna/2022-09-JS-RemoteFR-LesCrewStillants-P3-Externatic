import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import jwtDecode from "jwt-decode";
import instance from "@utils/instance";
import empty from "../../assets/lottie/empty.json";

import "@components/UserProfile/Candidatures.scss";

export default function Candidatures() {
  const token = sessionStorage.getItem("token");
  const [arrayCandidature, setArrayCandidature] = useState([]);
  const [isFavorite, setIsFavorite] = useState(true);

  const navigate = useNavigate();

  const getData = (decodedHeader) => {
    instance
      .get(`/user-offers/${decodedHeader.id}`)
      .then((result) => {
        setArrayCandidature(result.data);
        setIsFavorite(result.data.filter((off) => off.isApplied).length === 0);
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
    <section className="candidatures">
      {isFavorite ? (
        <>
          Vous n'avez pas encore postulé à une offre
          <br />
          <br />
          <br />
          <Player autoplay loop src={empty} className="notFoundLottie" />
        </>
      ) : (
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
      )}
    </section>
  );
}
