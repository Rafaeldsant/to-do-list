import { Header, TaskCount } from "./Header";
import { Item, Task } from "./Item";
import styles from "./List.module.css";

interface ListProps {
  tasks: Task[];
  taskCount: TaskCount;
  onDelete: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export const List: React.FC<ListProps> = ({
  tasks,
  taskCount,
  onDelete,
  onToggleTask,
}) => {
  return (
    <div className={styles.container}>
      <Header taskCount={taskCount} />
      <div>
        {tasks.map((task) => (
          <Item
            key={task.id}
            task={task}
            onDelete={() => onDelete(task.id)}
            onToggleTask={() => onToggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};
