import React from "react";
import "./chores.css";

const Chores = ({ chore }) => {
  return (
    <div className="chores">
      <button>Delete</button>
      <h2>{chore.chore}</h2>
      <button>See more details</button>
    </div>
  );
};

export default Chores;
