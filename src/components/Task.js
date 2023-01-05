import React from "react";

const Task = ({title,description,index,deleteTask}) => {
  return (
    <div className="card">
      <div className="todo">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button onClick={()=>deleteTask(index)}>Mark as Complete</button>
    </div>
  );
};

export default Task;
