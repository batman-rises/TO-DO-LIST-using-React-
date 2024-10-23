import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm"; // Importing NewTodoForm component
import { TodoList } from "./TodoList"; // Importing TodoList component

export default function App() {
  const [todos, setTodos] = useState([]); // Initial state for todos

  // The addTodo function is responsible for adding a new todo item to the current list of todos
  function addTodo(title) {
    setTodos(currentTodos => {
      // Passing a function "currentTodos" to the state function "setTodos"
      return [
        ...currentTodos, // Spread operator to keep existing todos
        {
          id: crypto.randomUUID(), // Generate a unique ID for the new todo item
          title, // Title of the new todo, received as a parameter
          completed: false, // By default, the new todo is not completed
        },
        // This creates a new array that includes all the existing todos (using the spread operator)
        // plus a new todo object
      ];
    });
  }

  // The toggleTodo function is designed to update the completion status of a specific todo item
  // based on the user's interaction with a checkbox.
  // When the user checks or unchecks a checkbox, this function is called to reflect the new state of that todo item in your app.
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, // Spread operator to copy all properties of the todo object
            completed, // Only the 'completed' property is updated with the new value (checked/unchecked)
          };
          //todo.completed = completed; WE CAN'T DO LIKE THIS BY THIS WE ARE MUTATING THE STATE BUT A STATE IS IMMUTABLE
        }
        return todo; // If the current todo's id does not match the provided id, return the original todo object without changes.
      });
    });
  }

  // The deleteTodo function removes a todo item based on its id
  function deleteTodo(id) {
    setTodos(currentTodos => {
      // Filter out the todo that has the matching id and return a new array of todos
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <>
      {/* The NewTodoForm component is responsible for accepting user input for new todos.
      onSubmit is passed down as a prop to handle adding a new todo */}
      <NewTodoForm onSubmit={addTodo} />
      {/* react smart enough to detect a custom component */}

      <h1 className="header">To Do List</h1>

      {/* Passing the todos state down to the TodoList component as a prop */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
