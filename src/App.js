import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:5000/data");

    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
