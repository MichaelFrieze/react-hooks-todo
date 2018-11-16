import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

// Now adding To-Do form
// Going to create another functional component
// Takes in one prop, the method to add a to-do
// Make sure to use brackets because we are using destructoring
// Going to use the useState hook here since this form is going to use state
// value for the state and setValue for the method that updates the state
// the input classname is for styling
// for onChange we need to be able to handle the submit so that needs to be created for the setValue
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  console.log('What is value? - ', value);
  console.log('What is setValue? - ', setValue);

  // since it is a submit we want ot make sure we prevent a default action
  // we don't want to submit an empty value
  // also notice we clear the setValue
  const handleSubmit = e => {
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  // we should make this look a little nicer by using a placeholder
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add Todo..." onChange={e => setValue(e.target.value)} />
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

  console.log('What is todos? - ', todos);
  console.log('What is setValue? - ', setTodos);

  // each new todo is updating the state
  // so we need to take the array of todos
  // can use spread to copy what is there and add in text
  // now we can set the Todos basically updating the state
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // Under the map we need to put our to-do form
  // we need to create the addTodo function above this
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
