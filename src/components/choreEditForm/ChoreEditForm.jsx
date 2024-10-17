import './choreEditForm.css';
import { useState } from "react";

/* 

My thoughts (Double check with Gage):

Possibility of updating individual details without resubmitting all previous details?

1 - Render Form from the update button in DetailsPopup (copy creationForm? )
2 - Fill fields with existing chore data (populateForm) (I think it has to be a state?)??????????????
3 - Take user updates and previous chore data and merge changes
4 - form submission & post updates to database (handleUpdate - useEffect)

If all else fails, just delete previous chore and make a new one.

*/

// Styling
// Input Validation!!


export default function ChoreEditForm({ chore, handlePopup, handleUpdate }) {
    // 1 - Storing details from DetailsPopup (choreDetails)
    // 1.1 - Will need to take stored details and fill the new form (populateForm)

    /* 
    Gage - Do I actually need this? I may have been overcomplicating it in my head. I think just calling the chore info is the simplified answer.
    
    const [choreDetails, populateForm] = useState({
        chore: chore.chore,
        chore_owner: chore.owner,
        date_posted: chore.date_posted,
        importance: chore.importance,
        due_date: chore.due_date,
        status: chore.status,
        description: chore.description,
        allowance: chore.allowance_amount,
        paid: chore.paid,
        // include comments? Not sure if this is where comments will be created
    })
    */

    return (
        <div className='popup'>
            <div className='edit-chore-details'>
                <h1>Editing: {chore.chore}</h1>
                <form>
                    <label>
                        Chore name: {chore.chore} | <input type="text" newChore="chore" />
                        </label><br></br>
                    <label>
                        Owner: {chore.owner} |  <input type="text" newOwner="owner" />
                        </label><br></br>
                    <label>
                        Date Posted: {chore.date_posted} | <input type="date" newDatePosted="date-posted" />
                        </label><br></br>
                    <label for='slider'>
                        Importance: {chore.importance} |  <input type="text" newImportance="importance" />
                        </label> <br></br>
                    <label>
                        Due Date: {chore.due_date} | <input type="date" newDueDate="due-date" />
                        </label><br></br>
                    <label>
                        Status: {chore.status} |  <input type="text" newStatus="status" />
                        </label><br></br>
                    <label>
                        Description: {chore.description} |  <input type="text" newStatus="status" />
                        </label><br></br>
                    <label>
                        Allowance Amount: ${chore.allowance_amount} | <input type="text" newAllowanceAmount="allowance-amount" />
                        </label> <br></br>
                    <label>
                        Paid: {chore.paid} | <input type="text" newPaid="paid" />
                        </label> 
                </form>
                    <button type='submit'>Submit Changes</button>
                    <br></br>
                    <button onClick={ () => handlePopup("close")}>Cancel</button>
            </div>
        </div>
    )

    function handleUpdate () {
        // Take the new state of choreDetails and PUT to database
        // Only want changed values to be put
    }


}