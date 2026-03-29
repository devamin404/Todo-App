import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }

  function completeTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function updateTodo(id, newTitle) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        } else {
          return todo;
        }
      }),
    );
  }
  return (
    <section className={styles.container}>
      <TodoForm setTodos={setTodos} />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
    </section>
  );
}

export default App;
