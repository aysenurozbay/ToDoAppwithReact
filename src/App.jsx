import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks";
import UserPage from "./pages/UserPage";
import styles from "./styles/app.module.css";

function App() {
  const userName = localStorage.getItem("username");
  // const [tasks, setTasks] = useState({
  //   id: "",
  //   toDo: "",
  //   isCompleted: "",
  // })([]);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: "DO THE DİSHES",
      isCompleted: false,
    },
    {
      id: "2",
      content: "DO LOUNDRY",
      isCompleted: false,
    },
  ]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  return (
    <Router>
      <Routes>
        {!userName ? (
          <>
            <Route exact path="/" element={<UserPage />} />
            <Route exact path="/toDoList" element={<Tasks tasks={tasks} />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Tasks tasks={tasks} />} />{" "}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
