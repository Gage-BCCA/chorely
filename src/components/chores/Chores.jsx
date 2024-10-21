import React from "react";
import "./chores.css";

const Chores = ({ chore, handlePopup }) => {

  return (
    <div className={ (chore.chore.length > 40) ? 'chores chores-small-title' : 'chores' }>

      <h2>{chore.chore}</h2>
      <h3>{chore.owner}</h3>
      <div className='chore-details'>
        <p>Due: {chore.due_date}</p>
        <p>Importance: {chore.importance}</p>
        <p>Allowance: ${chore.allowance_amount}</p>
      </div>
      <div className='btns'>
        <button className='sub-button' 
        onClick={() => {
          handlePopup("details", chore)
          console.log(chore)}}>&#9432;</button>

        <button className='sub-button' 
        onClick={ () => 
          handlePopup('confirm', chore)}
          id="mark-complete"><img src="./images/greencheck.png" alt=""/></button>
      </div>
      

    </div>
  );
};

export default Chores;
