import './choreEditForm.css';

// Styling
// Input Validation!!
// Where are comments being input?

export default function ChoreEditForm({ chore, handlePopup, handleUpdate }) {
    return (
        <div className='popup'>
            <div className='edit-chore-details'>
                <h1 className='edit-details-header'>Editing: {chore.chore}</h1>
                <form>
                    <label>
                        <span>Chore name:</span>
                        <input type="text" newChore="chore" defaultValue={chore.chore} />
                    </label>
                    <label>
                        <span>Owner:</span>
                        <input type="text" newOwner="owner" defaultValue={chore.owner} />
                    </label>
                    <label>
                        <span>Date Posted:</span>
                        <input type="date" newDatePosted="date-posted" defaultValue={chore.date_posted} />
                    </label>
                    <label>
                        <span>Importance:</span>
                        <select newImportance="importance" defaultValue={chore.importance}>
                            <option value='Low'>Low</option>
                            <option value='Medium'>Medium</option>
                            <option value='High'>High</option>
                        </select>
                    </label>
                    <label>
                        <span>Due Date:</span>
                        <input type="date" newDueDate="due-date" defaultValue={chore.due_date} />
                    </label>
                    <label>
                        <span>Status:</span>
                        <select newStatus="status" defaultValue={chore.status}>
                            <option value='Not Started'>Not Started</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Completed'>Completed</option>
                        </select>
                    </label>
                    <label>
                        <span>Description:</span>
                        <input type="text" newDescription="description" defaultValue={chore.description} />
                    </label>
                    <label>
                        <span>Allowance Amount:</span>
                        <input type="text" newAllowanceAmount="allowance-amount" defaultValue={chore.allowance_amount} />
                    </label>
                    <label>
                        <span>Paid:</span>
                        <select newPaid="paid" defaultValue={chore.paid ? 'Yes' : 'No'}>
                            <option value='No'>No</option>
                            <option value='Yes'>Yes</option>
                        </select>
                    </label>
                </form>
                <div className='update-btns'>
                    <button type='submit'>Submit Changes</button>
                    <button onClick={() => handlePopup("close")}>Cancel</button>
                </div>
            </div>
        </div>
    )

    function handleUpdate () {
        // PUT updated values into database - merge with previous
    }


}