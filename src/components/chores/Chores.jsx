import React from "react";
import "./chores.css";

const Chores = ({ chore, handlePopup }) => {
  return (
    <div className="chores">
      <button>Delete</button>
      <h2>{chore.chore}</h2>
      <button
      onClick={ () => handlePopup("details", chore)}
      >See more details</button>
    </div>
  );
};

export default Chores;
