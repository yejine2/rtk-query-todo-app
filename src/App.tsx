import React from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoHead from './components/TodoHead'
import TodoContainer from './components/TodoContainer'

import './App.css'

function App() {
  return (
    <div>
      <TodoContainer>
        <TodoHead />
        <TodoList />
        <TodoAdd />
      </TodoContainer>
    </div>
  )
}

export default App
