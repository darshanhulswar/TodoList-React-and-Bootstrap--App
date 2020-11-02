import React, { Component } from 'react'
import Header from './../Header/Header';
import AddTodo from './AddTodo'
import Todo from './Todo'

export class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    id: 1,
                    todo: 'Task One',
                    isCompleted: false
                },
                {
                    id: 2,
                    todo: 'Task Two',
                    isCompleted: false
                },
                {
                    id: 3,
                    todo: 'Task Three',
                    isCompleted: false
                },
                {
                    id: 4,
                    todo: 'Task Four',
                    isCompleted: true
                },
                {
                    id: 5,
                    todo: 'Task Four',
                    isCompleted: false
                }
            ]
        }
    }

    completeTask = (id) => {
        let todos = this.state.todos.map(
            todo => (todo.id !== id) ?
                todo : {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
        )
        this.setState({ todos })
    }

    render() {
        return (
            <div>
                <Header />
                <AddTodo />
                <h2 className="h2 text-center mt-3 text-secondary">You have {this.state.todos.length} to do tasks in your list </h2>
                <p className="lead text-center text-primary">Take up your task and complete it</p>
                <div className="w-50 mx-auto mt-5">
                    {
                        this.state.todos.map(todo => (
                            <Todo change={() => this.completeTask(todo.id)} key={todo.id} todo={todo.todo} id={todo.id} completed={todo.isCompleted} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default TodoApp
