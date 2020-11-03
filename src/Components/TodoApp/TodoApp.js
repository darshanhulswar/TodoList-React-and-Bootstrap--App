import React, { Component } from 'react'
import Header from './../Header/Header';
import AddTodo from './AddTodo'
import Todo from './Todo'
import Footer from './../Footer/Footer'

import { nanoid } from 'nanoid'

export class TodoApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],

            latestTodo: ''
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

    addTodoHandler = (todo) => {
        const todoList = [...this.state.todos]
        todoList.push({
            id: nanoid(),
            todo: todo,
            isCompleted: false
        })
        this.setState({ todos: [...todoList] })
    }

    render() {
        let remainingTasks = this.state.todos.filter(todo => !todo.isCompleted).length

        return (
            <div>
                <Header />
                <AddTodo addTodo={this.addTodoHandler} />
                <h2
                    className="h2 text-center mt-3 text-secondary">You have {remainingTasks} to do tasks in your list </h2>
                <p
                    className="lead text-center text-primary">Take up your task and complete it</p>
                <div className="container mt-5">
                    {
                        this.state.todos.map(todo => (
                            <Todo change={() => this.completeTask(todo.id)} key={todo.id} todo={todo.todo} id={todo.id} completed={todo.isCompleted} />
                        ))
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default TodoApp
