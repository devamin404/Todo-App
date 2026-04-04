import styles from "./Stats.module.css";
import { ChartNoAxesCombined } from "lucide-react";

function Stats({ todos }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  const percentage = totalTodos
    ? Math.floor((completedTodos / totalTodos) * 100)
    : 0;

  return (
    <section className={styles.statContainer}>
      <div className={styles.statsIntro}>
        <ChartNoAxesCombined color="#32d2bf" />
        <h1 className={styles.statsHeading}>Stats</h1>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3>Total Todos</h3>
          <p className={styles.number}>{totalTodos}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Completed</h3>
          <p className={`${styles.number} ${styles.completed}`}>
            {completedTodos}
          </p>
        </div>
        <div className={styles.statCard}>
          <h3>Pending</h3>
          <p className={`${styles.number} ${styles.pending}`}>{pendingTodos}</p>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <h1 className={styles.progressHeading}>Progress Bar</h1>
        <span>({percentage} %) </span>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
}

export default Stats;
