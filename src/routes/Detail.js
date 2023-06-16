import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const toDos = useSelector((state) => state);
  const id = useParams().id;

  const toDoText = toDos.find((el) => el.id === parseInt(id));

  return (
    <>
      <h1>{toDoText?.text}</h1>
      <h5>Created at: {toDoText?.id}</h5>
    </>
  );
}
export default Detail;
