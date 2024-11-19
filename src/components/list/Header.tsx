import styles from "./Header.module.css";

interface HeaderProps {
  taskCount: TaskCount;
}
export interface TaskCount {
  completed: number;
  total: number;
}

export const Header: React.FC<HeaderProps> = ({ taskCount }) => {
  return (
    <header className={styles.header}>
      <div>
        <p>Tarefas criadas</p>
        <span className={styles.badge}>{taskCount.total}</span>
      </div>
      <div>
        <p>Concluídas</p>
        <span className={styles.badge}>
          {taskCount.completed} de {taskCount.total}
        </span>
      </div>
    </header>
  );
};
