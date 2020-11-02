import React from 'react'

function AddTodo() {
    return (
        <div className="container">
            <form className="form-inline w-70 mx-auto">
                <div className="form-group mx-auto">
                    <input
                        className="form-control"
                        type="text"
                        name="todo"
                        placeholder="Meeting with Boss..."
                        autoComplete="off"
                    ></input>
                    <input
                        className="btn btn-primary ml-2"
                        type="submit"
                        value="Add"
                    />
                </div>
            </form>
        </div>
    )
}

export default AddTodo
