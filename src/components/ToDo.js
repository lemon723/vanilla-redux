import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../store";

function ToDo({ id, text }) {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>{" "}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

export default ToDo;
