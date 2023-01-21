import { useState, useEffect } from "react";
import instance from "@utils/instance";

export default function ConsultantName({ id }) {
  const [name, setName] = useState([]);

  useEffect(() => {
    instance.get(`/users/${id}`).then((response) => {
      setName(response.data);
    });
  }, []);

  console.warn(name);
  return (
    <>
      {name.firstname} {name.lastname}
    </>
  );
}
