import { useState } from 'react'
import './App.css'
import './index.css'
import Todo from './components/todo'

function App() {

  return (
    <>
    <h1 className='text-5xl text-center font-mono mt-36'>Todo App</h1>       
    <Todo />
    </>
  )
}

export default App
