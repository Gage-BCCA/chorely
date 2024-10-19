import './deletionForm.css'
import React, { useState } from "react";

export default function DeletionForm (chore) {
    const deleteMethod = {
        method: 'DELETE', 
       }
       fetch(`https://unit-4-project-app-24d5eea30b23.herokuapp.com/delete/data${chore.id}`, deleteMethod) 
       .then(response => response.json())
       .then(data => console.log(data)) 
       .catch(err => console.log(err)) 
    return (
        <div>
        {useState && (
        <div className="popupp-form">
            <form>
            <h3>Remove chore below!</h3>
            <label>
             Name:
              <input type="text" name="name" defaultValue={chore.name}/>
             </label>
                <br />
            <label>
             Chore:
             <input type="text" name="chore" defaultValue={chore.chore}/>
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
        <button type="submit1">Submit</button>


      </form>
    </div>
  )}
</div>
);
}