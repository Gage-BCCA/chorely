import './deletionForm.css'
import React, { useState} from "react";

export default function DeletionForm ({chore, handlePopup}) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`https://unit-4-project-app-24d5eea30b23.herokuapp.com/delete/data?teamId=2&recordId=${chore.id}`, {
                method: 'DELETE'
            });
    
            const result = await response.json(); 
            console.log('Delete Status: ', response.status);
            console.log('Delete Response: ', result); 
    
            if (response.ok) {
                handlePopup('close'); 
            } else {
                console.error('Delete failed:', result); 
            }
        } catch (err) {
            console.error('Delete Error: ', err.message);
        }
    };
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
        <button type="submit1">Submit</button>


      </form>
    </div>
  )}
</div>
);
}