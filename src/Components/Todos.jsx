import Todo from "./Todo";
import styles from "./Todos.module.css";

function Todos({
  deleteTodo,
  completeTodo,
  updateTodo,
  todos,
  filteredTodos,
  filter,
}) {
  return (
    <section className={`${styles.todoList} ${styles.container}`}>
      {todos.length === 0 ? (
        <h1>There are no todos yet. Take a break.</h1>
      ) : filter === "completed" && filteredTodos.length === 0 ? (
        <h1>There are no completed todos yet.</h1>
      ) : filter === "pending" && filteredTodos.length === 0 ? (
        <h1>There are no pending todos yet.</h1>
      ) : (
        filteredTodos.map((todo) => (
          <Todo
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
          />
        ))
      )}
    </section>
  );
}

export default Todos;
