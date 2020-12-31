import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./../Header/Header";
import AddTodo from "./AddTodo";
// import Todo from "./Todo";
import Footer from "./../Footer/Footer";
import { getTodos } from "../../actions/index";

export default function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  });

  return (
    <div>
      <Header />
      <AddTodo />
      <p className="lead text-center text-primary">
        Take up your task and complete
      </p>
      {/* <Todo /> */}
      <Footer />
    </div>
  );
}
