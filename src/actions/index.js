import * as actionTypes from "./todo.actions";
import { storeTodo, getTodosCollection } from "../@config/firebase.config";

function addTodo() {
  return {
    type: actionTypes.ADD_TODO,
  };
}

function storeInState(todos) {
  console.log(todos);
  return {
    type: actionTypes.STORE_TODOS_IN_STATE,
    todoCollections: todos,
  };
}

function fetchAndStoreInTodosState() {
  return async (dispatch) => {
    const todos = getTodosCollection();
    console.log(todos);
    dispatch(storeInState(todos));
  };
}

// thunk to store todo in firestore
function saveTodo(text) {
  return (dispatch) => {
    // storing firebase function ....
    storeTodo(text);
    dispatch(addTodo());
  };
}

// thunk to fetch todos from firestore
function fetchTodo() {
  console.log("inside fetchTodo()");
  return function (dispatch) {};
}

export {
  addTodo,
  fetchTodo,
  saveTodo,
  fetchAndStoreInTodosState,
  storeInState,
};
