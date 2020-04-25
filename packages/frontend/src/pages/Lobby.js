import React from "react";
import { useParams } from "react-router-dom";
export default Lobby => {
  const { id } = useParams();

  return <h1>This is the lobby page, your id is {id}</h1>;
};
