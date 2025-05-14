import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const editTodo = (index) => {
    const newTodo = prompt("Enter updated todo:", todos[index]);
    if (newTodo) {
      const updatedTodos = [...todos];
      updatedTodos[index] = newTodo;
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = () => {
    
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className='h-[120px] flex flex-row rounded w-[560px] shadow-xl bg-slate-200 m-auto mt-11'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='h-[60px] placeholder:text-black text-black text-xl placeholder:text-xl w-[410px] p-4 m-4 mt-6 border-black border-[1px] shadow-lg'
          placeholder="Enter todo"
        />
        <button 
          onClick={addTodo} 
          className='text-xl h-[50px] w-[150px] text-white font-semibold mt-7 mr-2 bg-blue-600'>
          Add
        </button>
      </div>

      <ul className="text-2xl font-sans flex flex-col items-center mt-10 space-y-4">
        {todos.map((todo, index) => (
          <li key={index} className="w-[500px] max-w-xl border border-white bg-yellow-400 rounded-md p-4 text-white">
            <div className="flex justify-between items-center">
              <span>{todo}</span>
              <div className="space-x-2">
                <button 
                  onClick={() => editTodo(index)} 
                  className="h-10 w-24 rounded bg-blue-500 hover:bg-blue-600">
                  Edit
                </button>
                <button 
                  onClick={() => deleteTodo(index)} 
                  className="h-10 w-24 rounded bg-red-500 hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
