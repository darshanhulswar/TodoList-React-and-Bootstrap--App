import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./../Header/Header";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Footer from "./../Footer/Footer";
import { getTodos } from "../../actions/todo.actions";

export default function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AddTodo />
      <p className="lead text-center text-primary">
        Take up your task and complete
      </p>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
      <Footer />
    </div>
  );
}
