import React, { useReducer } from "react";
import Main from "../view/Main/Main";
import {
  initialState,
  todoReducer,
  NEW_TODO,
  ADD_TODO,
} from "../reducers/todoReducer";

const MainCt = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleChange = ({ target }) => {
    dispatch({
      type: NEW_TODO,
      payload: {
        [target.name]: target.value,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
    });
  };
  return (
    <Main
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      state={state}
    />
  );
};

export default MainCt;

{
  /* <MainCt>  <-----
    <Main>
      lista de todos
      <Form>
        <input></input>
        <input></input>
        <buton>Add</buton>
      </Form>
    </Main>
  </MainCt>; */
}
