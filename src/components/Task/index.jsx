import styles from "./index.module.css";

function Task({ id, toDo, isCompleted }) {
  return <ul className={styles.tasksContainer}>{toDo}</ul>;
}

export default Task;
