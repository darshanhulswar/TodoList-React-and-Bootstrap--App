import React, { useEffect } from "react";
import Header from "./../Header/Header";
import AddTodo from "./AddTodo";
// import Todo from "./Todo";
import Footer from "./../Footer/Footer";
// import { useState, useDispatch } from "react-redux";
import { fetchTodo } from "../../actions";

export default function TodoApp() {
  useEffect(() => {
    console.log("useEffect");
    fetchTodo();
  });

  return (
    <div>
      <Header />
      <AddTodo />
      {/* <h2 className="h2 text-center mt-3 text-secondary">
        You have {remainingTasks} to do tasks in your list{" "}
      </h2> */}
      <p className="lead text-center text-primary">
        Take up your task and complete
      </p>
      {/* <div className="container mt-5">{<Todo />}</div> */}
      <Footer />
    </div>
  );
}
