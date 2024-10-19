import './choreEditForm.css';
import { useRef } from 'react';


// Styling
// Input Validation!!


export default function ChoreEditForm({ chore, handlePopup }) {
    console.log('loaded');
    // useRef to temporarily store previous data
    const choreRef = useRef();
    const ownerRef = useRef();
    const datePostedRef = useRef();
    const importanceRef = useRef();
    const dueDateRef = useRef();
    const statusRef = useRef();
    const descriptionRef = useRef();
    const allowanceAmountRef = useRef();
    const paidRef = useRef();

    console.log(choreRef);

    const handleUpdate = async (event) => {
        console.log('submit button clicked');
        event.preventDefault();

        const updatedChoreInfo = {
            "chore": event.target.chore.value,
            "owner": event.target.owner.value,
            "date_posted": event.target.date.value,
            "importance": event.target.importance.value,
            "due_date": event.target.dueDate.value,
            "status": event.target.status.value,
            "completed": false,
            "category": "Outdoor",
            "description": event.target.description.value,
            "allowance_amount": event.target.allowance.value,
            "paid": parseInt(event.target.allowance.value) ? true : false,
            "comments": []
        }

        console.log(updatedChoreInfo)

        fetch(`https://unit-4-project-app-24d5eea30b23.herokuapp.com/update/data?teamId=2&recordId=${chore.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedChoreInfo)})
        .then((response) => {
            console.log('Update Status: ', response.status)})
        .catch(err => console.log('rejected: ', err.message))
    }
    
    
    return (
        <div className='popup'>
            <div className='edit-chore-details'>
                <h1 className='edit-details-header'>Editing: {chore.chore}</h1>
                <form onSubmit={handleUpdate}>
                    <label>
                        <span>Chore name:</span>
                        <input type="text" ref={choreRef} defaultValue={chore.chore} name="chore" />
                    </label>
                    <label>
                        <span>Owner:</span>
                        <input type="text" ref={ownerRef} defaultValue={chore.owner} name="owner" />
                    </label>
                    <label>
                        <span>Date Posted:</span>
                        <input type="date" ref={datePostedRef} defaultValue={chore.date_posted} name="date" />
                    </label>
                    <label>
                        <span>Importance:</span>
                        <select ref={statusRef} defaultValue={chore.status} name="status">
                            <option value='Not Started'>Low</option>
                            <option value='In Progress'>Medium</option>
                            <option value='Completed'>High</option>
                        </select>
                    </label>
                    <label>
                        <span>Due Date:</span>
                        <input type="date" ref={dueDateRef} defaultValue={chore.due_date} name="dueDate"/>
                    </label>
                    <label>
                        <span>Status:</span>
                        <select ref={statusRef} defaultValue={chore.status} name="status">
                            <option value='Not Started'>Not Started</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Completed'>Completed</option>
                        </select>
                    </label>
                    <label>
                        <span>Description:</span>
                        <input type="text" ref={descriptionRef} defaultValue={chore.description} name="description" />
                    </label>
                    <label>
                        <span>Allowance Amount:</span>
                        <input type="text" ref={allowanceAmountRef} defaultValue={chore.allowance_amount} name="allowance" />
                    </label>
                    <label>
                        <span>Paid:</span>
                        <select ref={paidRef} defaultValue={chore.paid ? 'Yes' : 'No'}>
                            <option value='No'>No</option>
                            <option value='Yes'>Yes</option>
                        </select>
                    </label>
                    <div className='update-btns'>
                    <button type='submit'>Submit Changes</button>
                    <button onClick={ () => handlePopup('close')}>Cancel</button>
                </div>
                </form>
                
            </div>
        </div>
    )
};