import * as actionTypes from "../actions/todo.actionTypes";

const initialState = {
  todos: [],
  requestAddTodo: false,
  requestTodos: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_REQUEST:
      return {
        ...state,
        requestAddTodo: true,
      };

    case actionTypes.ADD_TODO_RESPONSE:
      return {
        ...state,
        requestAddTodo: false,
      };

    case actionTypes.TODOS_REQUEST:
      return {
        ...state,
        requestTodos: true,
      };

    case actionTypes.TODOS_RESPONSE:
      return {
        ...state,
        todos: [...action.todos],
        requestTodos: false,
      };

    default:
      return state;
  }
};

export { reducer };
