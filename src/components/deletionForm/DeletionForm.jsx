import './deletionForm.css'
import React, { useState } from "react";

export default function DeletionForm () {
    return (
        <div>
        {useState && (
        <div className="popupp-form">
            <form>
            <h3>Remove chore below!</h3>
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
               Remove:
               <select>
                    <option value= ''>Yes</option>
                    <option value= ''>No</option>
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