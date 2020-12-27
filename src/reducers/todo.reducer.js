import * as actionTypes from "../actions/todo.actions";

const initialState = {
  todos: [],
  totalTodos: 0,
  completedTodos: 0,
  incompleteTodos: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.id, text: action.text, isCompleted: false },
        ],
      };
    case actionTypes.COMPLETE_TODO:
      return {
        ...state,
      };

    case actionTypes.DELETE_TODO:
      return {
        ...state,
      };

    case actionTypes.FETCH_TODO:
      return {
        ...state,
      };

    default:
      return state;
  }
}
