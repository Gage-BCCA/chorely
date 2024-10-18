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
      <br></br>
      <div className="chore-list-container">
      {chores.length > 0 ? (
        //.filter(chore => chore.data_json.chore.toLowerCase().includes(filter))
        chores.map((chore) => {
            chore["data_json"]["id"] = chore["id"];
            return (
            <div className={'chore-items'} key={chore['id']}>
              <Chores chore={chore["data_json"]} handlePopup={handlePopup} />
            </div>
          )}
        )) : (
              <p>No chores provided</p>
          )}
      </div>
    </div>
  );
};

export default ChoreListContainer;
