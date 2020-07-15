import React from "react";
import { Container } from "./styles";
import Form from "../../components/Form/Form";
import Todo from "../../components/Todo/Todo";

const Main = ({ handleChange, state, handleSubmit }) => {
  const displayTodos = state.todos.map(({ text, title }) => (
    <Todo key={title} title={title} text={text} />
  ));
  return (
    <Container>
      {displayTodos}
      <Form
        handleSubmit={handleSubmit}
        title={state.newTodo.title}
        text={state.newTodo.text}
        handleChange={handleChange}
      />
    </Container>
  );
};

Main.defaultProps = {
  todos: [],
  state: {},
  handleChange: () => {},
  handleSubmit: () => {},
};

export default Main;

{
  /* <MainCt>
    <Main>  <-----
      lista de todos
      <Form>
        <input></input>
        <input></input>
        <buton>Add</buton>
      </Form>
    </Main>
  </MainCt>; */
}
