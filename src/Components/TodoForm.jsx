import styles from "./TodoForm.module.css";
import { useState } from "react";

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      alert("Enter a valid todo!");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <h1 className={styles.todoHeading}>TODO APP</h1>
      <div className={styles.todoFormContainer}>
        <input
          type="text"
          className={styles.todoInput}
          placeholder="Enter your text here and press enter"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.todoBtn}>ADD</button>
      </div>
    </form>
  );
}

export default TodoForm;
