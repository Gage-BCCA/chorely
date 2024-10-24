import './detailsPopup.css';
import '../choreEditForm/ChoreEditForm'


export default function DetailsPopup ({ chore, handlePopup }) {

    const handleDelete = async () => {
        fetch(`https://unit-4-project-app-24d5eea30b23.herokuapp.com/delete/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': chore.id,
                'team': 2,
            })
        })
        .then((response) => {
            console.log('Update Status: ', response.status)})
        .then(() => {
            handlePopup("close");
        })
        .catch(err => console.log('rejected: ', err.message))

        
    }

    return (
        <div className='details-popup'>
            <div className='chore-details'>
            <button className='close-btn' 
                onClick={ () => handlePopup("close")}>Close</button>
                <h1 className='details-header'>{chore.chore}</h1>
                <h2 className='details-header'>{chore.owner}</h2>
                <h3 className='details-header'>Posted: {chore.date_posted}</h3>
                <h3 className='details-header'>Importance: {chore.importance} | Due: {chore.due_date} | Status: {chore.status}</h3>
                    <h4>Details:</h4>
                    <p>{chore.chore}:<br></br>
                        {chore.description}<br></br>
                        Allowance Amount: ${chore.allowance_amount}<br></br>
                        Paid: {chore.paid ? 'Yes' : 'No'}</p> 
                <div className='chore-categories'>
                    <h4>Category:</h4>
                        <p>{chore.category}</p>
                </div>
                <div className='details-btns'>
                    <button onClick={ () => handlePopup("update", chore)}>Edit Details</button>
                    <br></br>
                    <button onClick={ () => handleDelete(chore.id)}>Delete Chore</button>
                    <br></br>
                </div>
            </div>
        </div>
    )
}