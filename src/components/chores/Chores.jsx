import React from "react";
import "./chores.css";

const Chores = ({ chore }) => {
  return (
    <div className="chores">
      <h2>{chore.chore}</h2>
    </div>
  );
};

export default Chores;
