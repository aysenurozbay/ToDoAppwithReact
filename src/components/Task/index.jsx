import styles from "./index.module.css";

function Task({ id, content, isCompleted }) {
  console.log(content);
  return <ul className={styles.container}>{content}</ul>;
}

export default Task;
