import styles from "./index.module.css";

import Task from "../Task";

function Tasks({ tasks }) {
  //   console.log(tasks);
  return (
    <ul className={styles.tasksContainer}>
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
        // <li>{task.toDo}</li>
      ))}
    </ul>
  );
}

export default Tasks;
