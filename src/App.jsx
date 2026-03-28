import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  function completeTodo(id) {
    setTodos(todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  }
  return (
    <section className={styles.container}>
      <TodoForm setTodos={setTodos} />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </section>
  );
}

export default App;
