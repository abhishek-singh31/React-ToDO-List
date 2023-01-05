import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const startArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(startArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((value, i) => {
      return i != index;
    });
    setTasks(newTasks);
  };
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <div className="container">
      <h1>Enter Tasks & Description</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Home;
