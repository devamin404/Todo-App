import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import { ToastContainer } from "react-toastify";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const data = localStorage.getItem("todos");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <ToastContainer pauseOnHover autoClose={2000} position="bottom-right" />
      <TodoForm setTodos={setTodos} todos={todos} />
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
