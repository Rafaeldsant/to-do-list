import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { List } from "./components/list/List";
import { useState } from "react";
import { Task } from "./components/list/Item";

export function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const taskCount = {
    completed: taskList.reduce(
      (acc, task) => (task.completed ? acc + 1 : acc),
      0
    ),
    total: taskList.length,
  };

  function handleCreateTask() {
    if (!taskInput) return;

    const newTask = {
      id: taskList.length + 1,
      description: taskInput,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskInput("");
  }

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return { ...task };
      })
    );
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.wrapper}>
          <div className={styles.inputWrapper}>
            <input
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Adicione uma nova tarefa"
            />
            <button onClick={() => handleCreateTask()}>
              <strong>Criar</strong> <PlusCircle size={16} weight="bold" />
            </button>
          </div>
          <List
            tasks={taskList}
            taskCount={taskCount}
            onDelete={deleteTask}
            onToggleTask={toggleTask}
          />
        </section>
      </main>
    </>
  );
}
