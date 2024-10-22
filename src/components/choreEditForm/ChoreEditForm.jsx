import './choreEditForm.css'

export default function ChoreEditForm({ chore, handlePopup }) {
    console.log('loaded');

    const handleUpdate = async (event) => {
        console.log('submit button clicked');
        event.preventDefault();

        const updatedChoreInfo = {
            "chore": event.target.chore.value,
            "owner": event.target.owner.value,
            "date_posted": chore.date_posted,
            "importance": event.target.importance.value,
            "due_date": event.target.dueDate.value,
            "status": event.target.status.value,
            "completed": false,
            "category": "Outdoor",
            "description": event.target.description.value,
            "allowance_amount": event.target.allowance.value,
            "paid": parseInt(event.target.allowance.value) ? true : false,
        }

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
        <div className='edit-popup'>
          <button 
            className='close-btn' 
            onClick={() => handlePopup('close')}>Close
            </button>
          <h1 className='edit-details-header'>Editing: {chore.chore}</h1>
          <form className='form-container' onSubmit={handleUpdate}>
            <label htmlFor="chore">Chore Name</label>
            <input type="text" defaultValue={chore.chore} name="chore" />
            
            <label htmlFor="owner">Owner</label>
            <input type="text" defaultValue={chore.owner} name="owner" />
            
            <label htmlFor="description">Description</label>
            <input type="text" defaultValue={chore.description} name="description" />
            
           
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" defaultValue={chore.due_date} name="dueDate" />
            
            <label htmlFor="importance">Importance:</label>
            <select defaultValue={chore.importance} name="importance">
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
            </select>
            
            <label htmlFor="status">Status:</label>
            <select defaultValue={chore.status} name="status">
            <option value='Incomplete'>Incomplete</option>
            <option value='Completed'>Completed</option>
            </select>

            <label htmlFor="allowance">Allowance Amount:</label>
            <input type="number" defaultValue={chore.allowance_amount} name="allowance" />
            
            <button className='submit-btn' type='submit'>Submit Changes</button>
          </form>
        </div>
    )
};