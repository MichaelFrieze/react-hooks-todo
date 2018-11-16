import React, { useState } from 'react';
import './App.css';

// so we need to add a new button
// lets call it removeTodoRef since it is going to get a reference rather than a value
// Label the button as X
// bring this in as a prop as well
function Todo({ todo, index, completeTodoRef, removeTodoRef }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodoRef(index)}>Complete</button>
        <button onClick={() => removeTodoRef(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodoRef }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodoRef(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // Now, lets create our deleteTodo function
  // it needs an index
  // now we are going to create a new array with spread
  // then splice it out by the index and just 1
  // then setTodos for the state
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Now add our removeTodoRef prop and assign it to removeTodo function we created above
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodoRef={completeTodo} removeTodoRef={removeTodo} />
        ))}
        <TodoForm addTodoRef={addTodo} />
      </div>
    </div>
  );
}

export default App;
