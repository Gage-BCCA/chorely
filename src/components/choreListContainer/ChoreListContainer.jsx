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

  const [sort, setSort] = useState("owner");

  function searchChores(text) {
    setSearchTerm(text.toLowerCase());
  }

  function handleSearchTopic(e) {
    console.log(e.target.value);
    setSearchTopic(e.target.value);
  }

  function handleShowCompleted(e) {
    if (!showCompleted) {
      setShowCompleted(true);
    } else {
      setShowCompleted(false);
    }
    console.log(showCompleted);
  }

  function handleSort(e){
    console.log(sort);
    setSort(e.target.value);
    console.log(sort);
  }

  return (
    <div>
      <div className="filtering">
        <div className="filteringChild">
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
            onInput={(e) => searchChores(e.target.value)}
          ></input>
        </div>

        <div className="filteringChild">
          <label for="showCompleted">Show Completed</label>
          <input
            type="checkbox"
            name="showCompleted"
            onChange={(e) => handleShowCompleted(e)}
          ></input>
        </div>
        <div className="filteringChild">


          <label for="sort">Sort</label>
          <select 
          name="sort"
          onChange={(e) => handleSort(e)}
          value={sort}
          >
            <option value="due_date" selected>Due Date</option>
            <option value="date_posted">Date Posted</option>
            <option value="chore">Alphabetical</option>
            <option value="allowance_amount">Amount Paid</option>
            <option value="owner">Owner Name</option>
          </select>
        </div>
      </div>
      <div className="chore-list-container">


        {chores.length > 0
          ?
          // This is code from satan himself  
          // I have 0 idea why this is checkbox condition is reversed  
          (!showCompleted
            ?
            (chores.filter(chore => chore.data_json[searchTopic].toLowerCase().includes(searchTerm))
            .sort((a, b) => {
              if (a.data_json[sort] > b.data_json[sort]){
                return -1;
              }
              if (a.data_json[sort] < b.data_json[sort]){
                return 1;
              }

              return 0;
            })  
            .map((chore) => {
                chore["data_json"]["id"] = chore["id"];
                return (
                  <div className={'chore-items'} key={chore['id']}>
                    <Chores chore={chore["data_json"]} handlePopup={handlePopup} />
                  </div>
                )
              }
              ))
            :

            (chores.filter(chore => chore.data_json[searchTopic].toLowerCase().includes(searchTerm))
              .filter((chore) => !chore.data_json.completed)
              .sort((a, b) => {
                if (a.data_json[sort] > b.data_json[sort]){
                  return -1;
                }
                if (a.data_json[sort] < b.data_json[sort]){
                  return 1;
                }
  
                return 0;
              })  
              .map((chore) => {
                chore["data_json"]["id"] = chore["id"];
                return (
                  <div className={'chore-items'} key={chore['id']}>
                    <Chores chore={chore["data_json"]} handlePopup={handlePopup} />
                  </div>
                )
              }
              ))
          )
          :
          (
            <p>No chores provided</p>
          )
        }
      </div>
    </div>
  );
};

export default ChoreListContainer;
