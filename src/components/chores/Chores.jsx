import React from "react";
import "./chores.css";

const Chores = ({ chore, handlePopup }) => {
  return (
    <div className="chores">
      <h2>{chore.chore}</h2>
      <p>{chore.owner}</p>
      <button
      onClick={ (e) => {
        handlePopup("details", chore)
        console.log(chore)
      
      }
    }
      >See More</button>
    </div>
  );
};

export default Chores;
