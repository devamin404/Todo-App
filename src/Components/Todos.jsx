import Todo from "./Todo";
import styles from "./Todos.module.css";

function Todos({ todos, deleteTodo, completeTodo, updateTodo }) {
  return (
    <section className={`${styles.todoList} ${styles.container}`}>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            todos={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </section>
  );
}

export default Todos;
