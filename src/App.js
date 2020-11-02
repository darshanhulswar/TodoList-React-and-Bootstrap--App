import React, { Component } from 'react'
import Header from './Components/Header/Header'
import AddTodo from './Components/AddTodo/AddTodo'


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
      </div>
    )
  }
}

export default App
