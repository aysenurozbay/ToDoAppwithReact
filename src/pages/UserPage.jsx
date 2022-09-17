import { useState } from "react";
import { useNavigate } from "react-router-dom";
function UserPage() {
  const [name, setName] = useState("");
  const navigateTo = useNavigate();

  const handleUserName = (event) => {
    event.preventDefault();
    // console.log(name);
    localStorage.setItem("username", JSON.stringify(name));
    navigateTo("/toDoList");
  };

  return (
    <form onSubmit={handleUserName}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
export default UserPage;
