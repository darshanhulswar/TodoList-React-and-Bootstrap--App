import React from 'react'

function Todo(props) {
    let styles = {}
    let completedClass = ''
    let completedBgClass = 'bg-light'
    let cursorStyle = {
        cursor: 'pointer'
    }
    if (props.completed) {
        styles = {
            textDecoration: 'line-through',
        }
        completedClass = 'text-success'
        completedBgClass = 'bg-dark'
    }

    return (
        <div className="w-50 mx-auto">
            <div
                style={cursorStyle}
                onClick={() => props.change(props.id)}
                className={`${completedBgClass} my-1 p-2 shadow rounded-sm text-secondary font-weight-bolder`}>
                <span className="">
                    <input
                        required
                        checked={props.completed}
                        onChange={() => props.change(props.id)}
                        id={props.id}
                        type="checkbox"
                        className="form-check d-inline-block mr-2" />
                </span>
                <span
                    className={`${completedClass} text-wrap`}
                    style={styles}>
                    {props.todo}
                </span>
            </div>
        </div>
    )
}

export default Todo
