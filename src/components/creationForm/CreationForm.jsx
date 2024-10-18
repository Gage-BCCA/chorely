import "./creationForm.css";
import React, { useState } from "react";

export default function CreationForm({ handlePopup, createNewChore }) {

  function handleSubmit(e){
    e.preventDefault();
    let body = {
      "owner": e.target.name.value,
      "chore": e.target.chore.value,
      "description": e.target.description.value,
      "due_date": e.target.dueDate.value,
      "completed": false,
      "status": e.target.status.value,
      "paid": parseInt(e.target.paid.value) ? true : false,
      "allowance_amount": e.target.paid.value,
      "important": e.target.importance.value,
      "date_posted": new Date(),
      "category": e.target.category.value,
      "comments": []
    }

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
              <label for="chore">Chore</label>
              <input type="text" name="chore" />
              <label for="description">Description</label>
              <input type="text" name="description" />
              <label for="owner">Owner</label>
              <input type="text" name="owner" />
              
            </div>
            <div className="form-container">
            <label for="due-date">Due Date</label>
              <input type="date" name="dueDate" />
              <label for="paid">Amount Paid</label>
              <input type="number" name="paid" />
              <label for="importance">Importance value</label>
              <input
                type="range"
                id="slider"
                name="importance"
                min="1"
                max="10"
                value="5"
                step="1"
              />

              <label for="category">Category</label>
              <select name="category">
                <option value="outdoor">Outdoor</option>
                <option value="indoor">Indoor</option>
              </select>
              <label for="status">Chore Status</label>
              <select name="status">
                <option value="Yes">Yes</option>
                <option value="Yes">No</option>
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
