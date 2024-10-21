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

    const markIncomplete = async (event) => {
        event.preventDefault();
        console.log('marked incomplete');
        
        const updatedChoreInfo = {
            chore: chore.chore,
            owner: chore.owner,
            date_posted: chore.date_posted,
            importance: chore.importance,
            due_date: chore.due_date,
            status: "incomplete", // INCOMPLETE
            completed: false, // INCOMPLETE
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
        <div className='popup'>
             <h1>Confirm Status Update</h1>
             <h2>{chore.chore} : {chore.completed ? 'complete' : 'incomplete'}</h2>
                <div className='confirmation-btns'>
                    <button onClick={markComplete}>Mark Complete</button>
                    <br></br>
                    <button onClick={markIncomplete}>Mark Incomplete</button>
                </div>
            <button onClick={ () => handlePopup('close')}>Cancel</button>
        </div>
    )
}