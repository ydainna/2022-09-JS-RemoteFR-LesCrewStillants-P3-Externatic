import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import instance from "@utils/instance";
import "@components/UserProfile/Candidatures.scss";

export default function Candidatures() {
  const token = sessionStorage.getItem("token");
  const [arrayCandidature, setArrayCandidature] = useState([]);

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
  );
}
