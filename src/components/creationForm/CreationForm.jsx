import "./creationForm.css";
import React, { useState } from "react";

export default function CreationForm({ handlePopup, createNewChore }) {

  function handleSubmit(e){
    
    e.preventDefault();
    let body = {
      "owner": e.target.owner.value,
      "chore": e.target.chore.value,
      "description": e.target.description.value,
      "due_date": e.target.dueDate.value,
      "completed": false,
      "status": "incomplete",
      "paid": parseInt(e.target.paid.value) ? true : false,
      "allowance_amount": e.target.paid.value,
      "importance": e.target.importance.value,
      "date_posted": new Date(),
      "category": e.target.category.value,
      "comments": []
    }
    console.log(body);
    createNewChore(body);
    handlePopup("close");

  }
  return (
    <div>
      {/* Conditionally render the form */}
      {useState && (
        <div className="popup-form">
          <button 
          className="close-button"
          onClick={() => handlePopup("close")}
          >Close</button>
          <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Chore Creation Form</h1>
            <div className="form">
            <div className="form-container">
              <label for="chore">Chore Name</label>
              <input type="text" name="chore" />
              <label for="owner">Owner</label>
              <input type="text" name="owner" />
              <label for="description">Description</label>
              <input type="text" name="description" />
              
              
            </div>
            <div className="form-container">
            <label for="dueDate">Due Date</label>
              <input type="date" name="dueDate" />
              <label for="paid">Amount Paid</label>
              <input type="number" name="paid" />
              <label for ='importance'>Importance: </label>
                        <select name="importance">
                            <option value='Low'>Low</option>
                            <option value='Medium'>Medium</option>
                            <option value='High'>High</option>
                        </select>
                  
                            
              

              <label for="category">Category</label>
              <select name="category">
                <option value="outdoor">Outdoor</option>
                <option value="indoor">Indoor</option>
              </select>
             </div>
            </div>
            <button type="submit" id="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
