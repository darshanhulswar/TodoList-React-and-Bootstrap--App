import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./../Header/Header";
import AddTodo from "./AddTodo";
// import Todo from "./Todo";
import Footer from "./../Footer/Footer";
import { fetchAndStoreInTodosState } from "../../actions";

export default function TodoApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
    dispatch(fetchAndStoreInTodosState());
    console.log("DONE");
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
