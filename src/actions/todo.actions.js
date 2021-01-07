import * as actionTypes from "./todo.actionTypes";
import { storeTodo, fetchTodos } from "../@config/firebase.config";

function addTodo(todoText) {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_TODO_REQUEST });
    storeTodo(todoText);
    dispatch({ type: actionTypes.ADD_TODO_RESPONSE });
  };
}

function getTodos() {
  return async (dispatch) => {
    dispatch({ type: actionTypes.TODOS_REQUEST });
    const todos = await fetchTodos();
    dispatch({ type: actionTypes.TODOS_RESPONSE, todos });
  };
}

export { addTodo, getTodos };
