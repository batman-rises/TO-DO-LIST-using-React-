export function TodoList({ todos, toggleTodo, deleteTodo }) { 
    // Receiving todos, toggleTodo, and deleteTodo as props from App.jsx
  
    return (
      <>
        {todos.length === 0 && <h2>no todos</h2>} {/* React way of error handling */}
        <ul className="list">
          {todos.map(todo => {
            return (
              <li key={todo.id}> {/* Each todo item needs a unique key */}
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed} // Checkbox state depends on todo completion status
                    onChange={e => toggleTodo(todo.id, e.target.checked)} 
                    // Function which takes todo id and boolean to check if the todo is checked or not
                  />
                  {todo.title}
                </label>
                <button 
                  onClick={() => deleteTodo(todo.id)} 
                  className="btn btn-danger"
                >
                  Delete {/* Button to delete a todo */}
                </button>
              </li>
            );
          })}
          {/* Mapping (JSX way of iterating array) through the array of todos from state */}
        </ul>
      </>
    );
  }
  