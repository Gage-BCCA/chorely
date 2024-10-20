import React from "react";
import { useState } from "react";
import Chores from "../chores/Chores";
import "./choreListContainer.css";

const ChoreListContainer = ({ chores, handlePopup }) => {
  // There is a random bug that happens when re-rendering that 
  // is hard to reproduce, we may need to nuke this function
  const [searchTopic, setSearchTopic] = useState("chore");
  const [searchTerm, setSearchTerm] = useState("");

  const [showCompleted, setShowCompleted] = useState(true);

  const [filter, setFilter] = useState("");

  function searchChores (text) {
    setSearchTerm(text.toLowerCase());
  }

  function handleSearchTopic(e){
    console.log(e.target.value);
    setSearchTopic(e.target.value);
  }

  function handleShowCompleted(e){
    if (!showCompleted){
      setShowCompleted(true);
    } else {
      setShowCompleted(false);
    }
    console.log(showCompleted);
  }

  return (
    <div>
      <select
      onChange={(e) => handleSearchTopic(e)}
      >
        <option value="owner" >Owner</option>
        <option value="chore" selected>Chore</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>

      <input 
      type='text' 
      placeholder='Search'
      onInput={ (e) => searchChores(e.target.value)}
      ></input>

      <label for="showCompleted">Show Completed</label>
      <input 
      type="checkbox" 
      name="showCompleted"
      onChange={(e) => setShowCompleted(e.target.value)}

      ></input>

      <div className="chore-list-container">
      {chores.length > 0 ? ( showCompleted ?
        (chores.filter(chore => chore.data_json[searchTopic].toLowerCase().includes(searchTerm))
        .map((chore) => {
            chore["data_json"]["id"] = chore["id"];
            return (
            <div className={'chore-items'} key={chore['id']}>
              <Chores chore={chore["data_json"]} handlePopup={handlePopup} />
            </div>
          )}
        )) : (
              <p>No chores provided</p>
          )) : 
        
          (chores.filter(chore => chore.data_json[searchTopic].toLowerCase().includes(searchTerm))
          .filter((chore) => !chore.data_json.completed)
          .map((chore) => {
              chore["data_json"]["id"] = chore["id"];
              return (
              <div className={'chore-items'} key={chore['id']}>
                <Chores chore={chore["data_json"]} handlePopup={handlePopup} />
              </div>
            )}
          ))
          }
      </div>
    </div>
  );
};

export default ChoreListContainer;
