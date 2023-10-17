
import styles from "./Statistics.module.css";

export const Statistics = ({stats}) => {
  return (
    <section className={styles.conteiner}>
      <div className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

      <ul style={{ listStyle: "none" }} className={styles.statList}>
        {stats.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
};