import './choreEditForm.css'

export default function ChoreEditForm({ chore, handlePopup }) {
    console.log('loaded');

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
        .then(() => {
                handlePopup("close")})
        .catch(err => console.log('rejected: ', err.message))
    }
    
    return (
        <div className='popup'>
            <div className='edit-chore-details'>
                <h1 className='edit-details-header'>Editing: {chore.chore}</h1>
                <form onSubmit={handleUpdate}>
                    <label>
                        <span>Chore name:</span>
                        <input type="text" defaultValue={chore.chore} name="chore" />
                    </label>
                    <label>
                        <span>Owner:</span>
                        <input type="text" defaultValue={chore.owner} name="owner" />
                    </label>
                    <label>
                        <span>Importance:</span>
                        <select defaultValue={chore.status} name="importance">
                            <option value='Not Started'>Low</option>
                            <option value='In Progress'>Medium</option>
                            <option value='Completed'>High</option>
                        </select>
                    </label>
                    <label>
                        <span>Due Date:</span>
                        <input type="date" defaultValue={chore.due_date} name="dueDate"/>
                    </label>
                    <label>
                        <span>Status:</span>
                        <select defaultValue={chore.status} name="status">
                            <option value='Not Started'>Not Started</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Completed'>Completed</option>
                        </select>
                    </label>
                    <label>
                        <span>Description:</span>
                        <input type="text" defaultValue={chore.description} name="description" />
                    </label>
                    <label>
                        <span>Allowance Amount:</span>
                        <input type="text" defaultValue={chore.allowance_amount} name="allowance" />
                    </label>
                    <label>
                        <span>Paid:</span>
                        <select defaultValue={chore.paid ? 'Yes' : 'No'}>
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