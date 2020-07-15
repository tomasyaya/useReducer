import React from "react";
import { Continaer, Text, Title } from "./styles";

const Todo = ({ title, text }) => (
  <Continaer>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Continaer>
);

// const Todo = (props) => (
//   <div>
//     <h2>{props.title}</h2>
//     <p>{props.text}</p>
//   </div>
// );

export default Todo;
