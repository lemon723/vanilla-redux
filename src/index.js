import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

number.innerText = 0;

//reducer은 data를 modify하는 function
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); // store 변화 감지 후 onChange로 span 값 변화

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

// 버튼 누르면 => dispatch로 action 전달 => reducer에서 action 체크 => 데이터 수정 후 store저장
// => subscribe가 값 변화 감지 => 콜백함수(onchange)로 알아서 변경값 조정
