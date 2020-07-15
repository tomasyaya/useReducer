import { useReducer } from "react";
import {
  initialState,
  todoReducer,
  NEW_TODO,
  ADD_TODO,
} from "../reducers/todoReducer";

export const useTodos = () => {
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

  return {
    state,
    handleChange,
    handleSubmit,
  };
};
