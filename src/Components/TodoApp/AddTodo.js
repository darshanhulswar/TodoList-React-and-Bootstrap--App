import React, { useState } from "react";

export default function AddTodo(props) {
  const [todoContent, setTodoContent] = useState("");

  function onChangeHandler(event) {
    setTodoContent(event.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("Todo Submitted", todoContent);
  }

  return (
    <div className="container">
      <form className="form-inline" onSubmit={onSubmitHandler}>
        <div className="form-group ml-auto">
          <input
            onChange={onChangeHandler}
            value={todoContent}
            className="form-control"
            type="text"
            name="todo"
            placeholder="Meeting with Boss..."
            autoComplete="off"
          ></input>
        </div>
        <div className="form-group mr-auto">
          <input className="btn btn-primary ml-2" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}
