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
<<<<<<< HEAD
      <button id="mark-complete" onClick={ () => {handlePopup('confirm')}}>&#x2705;</button>
      <button id="mark-incomplete" onClick={ () => {handlePopup('confirm')}}>&#10060;</button>
=======
      <button id="mark-complete"><img src="./images/greencheck.png" alt=""/></button>
      <button id="mark-incomplete">&#10060;</button>
      {/* <div className="status-btns">
        <button id="mark-complete">&#x2713;</button>
        <button id="mark-incomplete">&#10060;</button>
      </div> */}
>>>>>>> 739f5f610c70a9fce968eba6456dbdcbfe55ceb6
    </div>
  );
};

export default Chores;
