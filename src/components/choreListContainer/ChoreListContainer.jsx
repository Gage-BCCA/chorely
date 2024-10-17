import React from "react";
import { useState } from "react";
import Chores from "../chores/Chores";
import "./choreListContainer.css";

const ChoreListContainer = ({ chores, handlePopup }) => {
  const [filter, setFilter] = useState("");
  function filterChores (text) {
    setFilter(text.toLowerCase());
  }

  return (
    <div>
      <input 
      type='text' 
      placeholder='Search'
      onInput={ (e) => filterChores(e.target.value)}
      ></input>
      <div className="chore-list-container">
      {chores.length > 0 ? (
        chores.filter(chore => chore.data_json.chore.toLowerCase().includes(filter)).map((chore, index) => <Chores key={index} chore={chore["data_json"]} handlePopup={handlePopup} />)
      ) : (
        <p>No chores provided</p>
      )}
    </div>
    </div>

  );
};

export default ChoreListContainer;
