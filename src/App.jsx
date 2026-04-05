import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import Stats from "./Components/Stats";
import Filter from "./Components/Filter";
import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
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

  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    if (filter === "pending") {
      return !todo.completed;
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
      <Stats todos={todos} />
      <Filter filter={filter} setFilter={setFilter} />
      <Todos
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        filteredTodos={filteredTodos}
        filter={filter}
        todos={todos}
      />
    </section>
  );
}

export default App;
