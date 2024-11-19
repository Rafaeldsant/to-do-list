import { Check, Trash } from "phosphor-react";
import styles from "./Item.module.css";

interface ItemProps {
  task: Task;
  onDelete: () => void;
  onToggleTask: () => void;
}

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export const Item: React.FC<ItemProps> = ({ task, onDelete, onToggleTask }) => {
  const handleDeleteTask = () => {
    onDelete();
  };

  const handleToogleTask = () => {
    onToggleTask();
  };

  const checkboxCheckedClassname = task.completed
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];
  const paragraphCheckedClassname = task.completed
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleToogleTask}>
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {task.completed && <Check size={12} weight="bold" />}
          </span>
          <p className={paragraphCheckedClassname}>{task.description}</p>
        </label>
      </div>
      <div>
        <button onClick={handleDeleteTask}>
          <Trash size={16} color="#808080" />
        </button>
      </div>
    </div>
  );
};
