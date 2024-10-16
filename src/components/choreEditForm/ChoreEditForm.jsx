import './choreEditForm.css'
import React, { useState } from "react";

/* 

My thoughts (Double check with Gage):

Possibility of updating individual details without resubmitting all previous details?

1 - Render Form from the update button in DetailsPopup (copy creationForm? )
2 - Fill fields with existing chore data (populateForm) (I think it has to be a state?)
3 - Take user updates and previous chore data and merge changes
4 - form submission & post updates to database (handleUpdate - useEffect)

If all else fails, just delete previous chore and make a new one.

*/


export default function ChoreEditForm({ chore, handleUpdate }) {
    // 1 - Storing details from DetailsPopup (choreDetails)
    // 1.1 - Will need to take stored details and fill the new form (populateForm)
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
}