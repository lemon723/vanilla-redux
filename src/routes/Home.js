import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state); //
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
    </>
  );
}
export default Home;

//Redux state로부터 home(component)에 prop으로써 전달함
// function mapStateToProps(state) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
