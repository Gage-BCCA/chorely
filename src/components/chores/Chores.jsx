import React from "react";
import "./chores.css";

const Chores = ({ chore, handlePopup }) => {

  return (
    <div className={ (chore.chore.length > 40) ? 'chores chores-small-title' : 'chores' }>

      <h2>{chore.chore}</h2>
      <p>{chore.owner}</p>
      <button onClick={ () => {
        handlePopup("details", chore)
        console.log(chore)}}>See More</button>

      <button onClick={ () => handlePopup('confirm', chore)}
        id="mark-complete"><img src="./images/greencheck.png" alt=""/></button>

      <button onClick={ () => handlePopup('confirm', chore)}
        id="mark-incomplete">&#10060;</button>
    </div>
  );
};

export default Chores;
