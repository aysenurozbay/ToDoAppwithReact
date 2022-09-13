import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import styles from "./styles/app.module.css";

function App() {
  // const [tasks, setTasks] = useState({
  //   id: "",
  //   toDo: "",
  //   isCompleted: "",
  // })([]);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      toDo: "DO THE DİSHES",
      isCompleted: "false",
    },
    {
      id: "2",
      toDo: "DO LOUNDRY",
      isCompleted: "true",
    },
  ]);
  const [input, setInput] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>TODOLIST</h1>

        <div className={styles.toDoContainer}>
          <Tasks tasks={tasks} />
        </div>

        {/* <footer className={styles.footer}>
          <h6>
            Total de tarefas:
            <span>TOTAL</span>
          </h6>

          <h6>
            Total de tarefas concluidas:
            <span>COMPLETED</span>
          </h6>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
