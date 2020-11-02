import React from 'react'

function Todo(props) {
    let styles = {}
    let completedClass = ''
    let completedBgClass = 'bg-light'
    if (props.completed) {
        styles = {
            textDecoration: 'line-through',
        }
        completedClass = 'text-success'
        completedBgClass = 'bg-dark'
    }

    return (
        <div className={`${completedBgClass} w-50 mx-auto my-1 p-2 shadow rounded-sm text-secondary font-weight-bolder`}>
            <span>
                <input defaultChecked={props.completed} onChange={props.change} id={props.id} type="checkbox" className="form-check d-inline-block mr-2" />
            </span>
            <span className={completedClass} style={styles}>
                {props.todo}
            </span>
        </div>
    )
}

export default Todo
