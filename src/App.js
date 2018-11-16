// All components are going to be functional
// Get rid of everything in this create-react-app generated file
// Now import React with useState
import React, { useState } from 'react';

// Now we are going to create an App function
// This is our main component
// useState gives us 2 variables
// the first is the value of the state like this.state within a class
// it also gives us a function to update the state like this.setState
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

  // Now we want a return
  // in the todo-list we want to map through the to-do's in the state
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

// Export this App
export default App;
