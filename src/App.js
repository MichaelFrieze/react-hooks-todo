import React, { useState } from 'react';

// Now lets created Todo component
// We passed 3 props from the return statement at the bottom of file
// However, index is used twice
// We could use props.todo and props.index
// But lets use destructoring
function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}
// now we should be able to run the application and text should be displayed

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

export default App;
