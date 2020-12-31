import * as actionTypes from "../actions/todo.actions";

const initialState = {
  todos: [],
  todoStoredStatus: false,
  fetchingTodo: false,
  todoFetchCompleteStatus: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todoStoredStatus: true,
      };

    case actionTypes.STORE_TODOS_IN_STATE:
      console.log(action.todoCollections);
      return {
        ...state,
        todos: [...state.todos, 1, ...action.todoCollections, 2],
      };

    case actionTypes.FETCH_TODO:
      return {
        ...state,
        todoFetchCompleteStatus: true,
      };

    default:
      return state;
  }
}
