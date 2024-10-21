import './confirmPopup.css';

export default function ConfirmPopup({ chore, handlePopup }) {
    console.log('its me the confirm popup');
    console.log(chore.chore, chore.completed);

    const markComplete = async (event) => {
        event.preventDefault();
        console.log('marked complete');
        
        const updatedChoreInfo = {
            chore: chore.chore,
            owner: chore.owner,
            date_posted: chore.date_posted,
            importance: chore.importance,
            due_date: chore.due_date,
            status: "complete", // COMPLETE
            completed: true, // COMPLETE
            category: chore.category,
            description: chore.description,
            allowance_amount: chore.allowance_amount,
            paid: parseInt(chore.allowance_amount) ? true : false,
        };

        await fetch(`https://unit-4-project-app-24d5eea30b23.herokuapp.com/update/data?teamId=2&recordId=${chore.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedChoreInfo)})
        .then((response) => {
            console.log('Update Status: ', response.status)})
        .catch(err => console.log('rejected: ', err.message))
    }

    return(
        <div className='confirm-popup'>
            <button className='close-btn'
                onClick={ () => handlePopup('close')}>Close</button>
             <h1>Confirm Status Update</h1>
             <h2>{chore.chore}</h2>
             <h2>Current Status: {chore.completed ? 'complete' : 'incomplete'}</h2>
            <button className='complete-btn' 
                onClick={markComplete}>Mark Complete</button>
        </div>
    )
}