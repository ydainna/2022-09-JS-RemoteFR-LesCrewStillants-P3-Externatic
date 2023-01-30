import { useRef, useState, useEffect } from "react";
import instance from "@utils/instance";
import Notify from "@utils/notification";
// import cvImg from "@assets/icons/CV.svg";

import "./Cv.scss";

export default function Cv({ id }) {
  const [info, setInfo] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    instance
      .get(`/information/${id}`)
      .then((result) => {
        setInfo(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleFilesChange = (file) => {
    setFilesToUpload(file.target.value.split("\\")[2]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cv", inputRef.current.files[0]);
    if (filesToUpload) {
      console.warn("uploaded");
      instance
        .post(`${import.meta.env.VITE_BACKEND_URL}/uploads/cv`, formData)
        .then(() => {
          Notify.success("Vos informations ont été mises à jour !");
        })
        .catch(() => Notify.error("Erreur lors de l'upload ❌"));
    }
    instance.put(`/information/cv/${id}`, { filesToUpload });
  };

  return (
    <section id="cv">
      <h1>CV</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/cv/${info.cv}`}
          alt="CV"
        />
        <input
          type="file"
          style={{ display: "none" }}
          name="cv"
          ref={inputRef}
          onChange={handleFilesChange}
        />
        <button type="button" onClick={() => inputRef.current.click()}>
          Mettre à jour le CV
        </button>
        <p>{filesToUpload}</p>
        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
