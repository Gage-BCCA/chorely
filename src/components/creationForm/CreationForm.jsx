import './creationForm.css'
import React, { useState } from "react";

export default function CreationForm() {
    return (
        <div className='popup'>
            <h1>Creation Form</h1>
      <button onClick={CreationForm}>
        {useState ? "Close Form" : "Open Form"}
      </button>

      {/* Conditionally render the form */}
      {useState && (
        <div className="popup-form">
          <form>
            <h3>Enter details below!</h3>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Chore:
              <input type="text" name="chore" />
            </label>
            <br />
            <label>
              Description:
              <input type="text" name="description" />
            </label>
            <br />
            <label>
              Owner:
              <input type="text" name="owner" />
            </label>
            <br />
            <label>
              Due Date:
              <input type="text" name="due-date" />
            </label>
            <br />
            <label>
              Image:
              <input type="text" name="image" />
            </label>
            <br />
            <label>
              Paid:
              <input type="text" name="paid" />
            </label>
            <br />
            <label>
              <label for="slider">Importance value:</label>
                <input type="range" id="slider" name="slider" min="1" max="10" value="5" step="1" />

            </label>
            <br />
           
            <label>
                Category:
                <select>
                    <option value= ''>Outdoor</option>
                    <option value= ''>Indoor</option>
                </select>
                
            </label>
            <br />
            <label>
                Status:
                <select>
                    <option value=''>Yes</option>
                    <option value=''>No</option>
                </select>
           
            </label>
            <br />

            <button type="submit">Submit</button>
    

          </form>
        </div>
      )}
    </div>
  );
}