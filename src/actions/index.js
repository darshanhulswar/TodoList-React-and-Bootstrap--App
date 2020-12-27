import * as actionTypes from "./todo.actions";
import { nanoid } from "nanoid";
import axios from "axios";

function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    text: text,
    id: nanoid(5),
  };
}

function completeTodo(id) {
  return {
    type: actionTypes.ADD_TODO,
    id: id,
  };
}

function deleteTodo(id) {
  return {
    type: actionTypes.ADD_TODO,
    id: id,
  };
}

function fetchTodo() {
  console.log("inside fetchTodo()");
  return function (dispatch) {
    console.log("inside anonymous function(dispatch) {...}");
    let data = null;
    axios
      .get("http://jsonplaceholder.typicode.com/todos/20")
      .then(function (res) {
        data = res.data;
        console.log(data);
        dispatch(addTodo(data.title));
        console.log("action dispatch done...");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}

export { addTodo, completeTodo, deleteTodo, fetchTodo };
