import React from "react";

function Todo(props) {
  let styles = {};
  let completedClass = "";
  let completedBgClass = "bg-light";
  let cursorStyle = {
    cursor: "pointer",
  };
  if (props.isCompleted) {
    styles = {
      textDecoration: "line-through",
    };
    completedClass = "text-success";
    completedBgClass = "bg-dark";
  }

  function changeHandler(id) {
    console.log(`Todo with id ${id} completed`);
  }

  return (
    <div className="w-70 mx-auto">
      <div
        style={cursorStyle}
        className={`${completedBgClass} my-1 p-2 shadow rounded-sm text-secondary font-weight-bolder`}
      >
        <span className="">
          <input
            style={{ styles }}
            required
            checked={props.isCompleted}
            onChange={() => changeHandler(props.id)}
            id={props.id}
            type="checkbox"
            className="form-check d-inline-block mr-2"
          />
        </span>
        <span className={`${completedClass} text-wrap`} style={styles}>
          {props.text}
        </span>
      </div>
    </div>
  );
}

export default Todo;
