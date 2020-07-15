export const NEW_TODO = "NEW_TODO";
export const ADD_TODO = "ADD_TODO";

export const initialState = {
  todos: [],
  newTodo: {
    title: "",
    text: "",
  },
};

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case NEW_TODO:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          ...payload,
        },
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [state.newTodo, ...state.todos],
        newTodo: {
          title: "",
          text: "",
        },
      };
    default:
      return state;
  }
};
