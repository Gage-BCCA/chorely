import React from "react";
import "./chores.css";

const Chores = ({ chore, handlePopup }) => {
  return (
    <div className={ (chore.chore.length > 40) ? 'chores chores-small-title' : 'chores' }>

      <h2>{chore.chore}</h2>
      <p>{chore.owner}</p>
      <button
      onClick={ (e) => {
        handlePopup("details", chore)
        console.log(chore)
      
      }
    }
      >See More</button>
      <button id="mark-complete">&#x2705;</button>
      <button id="mark-incomplete">&#10060;</button>
      {/* <div className="status-btns">
        <button id="mark-complete">&#x2705;</button>
        <button id="mark-incomplete">&#10060;</button>
      </div> */}
    </div>
  );
};

export default Chores;
