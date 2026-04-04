import styles from "./Filter.module.css";
import { Funnel } from "lucide-react";

function Filter({ filter, setFilter }) {
  return (
    <section className={styles.filterContainer}>
      <div className={styles.filterIntro}>
        <Funnel color="#3eb4cc" />
        <h1 className={styles.filterHeading}>Filter</h1>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Todos</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
