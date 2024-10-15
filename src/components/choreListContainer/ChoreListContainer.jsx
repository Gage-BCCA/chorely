import React from "react";
import Chores from "../chores/Chores";
import "./choreListContainer.css";

const ChoreListContainer = ({ chores }) => {
  return (
    <div className="chore-list-container">
      {chores.length > 0 ? (
        chores.map((chore, index) => <Chores key={index} chore={chore} />)
      ) : (
        <p>No chores provided</p>
      )}
    </div>
  );
};

export default ChoreListContainer;
