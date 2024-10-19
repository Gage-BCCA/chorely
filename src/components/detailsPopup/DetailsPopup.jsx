import './detailsPopup.css';
import '../choreEditForm/ChoreEditForm'


export default function DetailsPopup ({ chore, handlePopup }) {
    {/* Make importance a colored circle? */}

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
        .catch(err => console.log('rejected: ', err.message))
    }

    return (
        <div className='popup'>
            <div className='chore-details'>
                <h1 className='details-header'>{chore.chore}</h1>
                <h2 className='details-header'>{chore.owner} | Created: {chore.date_posted}</h2>
                <h3 className='details-header'>{chore.importance} | Due: {chore.due_date} | Status: {chore.status}</h3>
                    <h4>Details:</h4>
                    <p>{chore.chore}:<br></br>
                        {chore.description}<br></br>
                        Allowance Amount: ${chore.allowance_amount}<br></br>
                        Paid: {chore.paid ? 'Yes' : 'No'}</p> 
                <div className='chore-comments'>
                    <h4>Comments:</h4>
                        {chore.comments && chore.comments.length > 0 ? (
                            chore.comments.map((comment, id) => (
                                <div key={id}>
                                    <p>{comment.author} | {comment.date_posted}<br></br>
                                        {comment.text}
                                    </p>
                                </div>
                                ))) : ( <p>No comments available</p> )}
                </div>
                <div className='chore-categories'>
                    <h4>Categories:</h4>
                        <p>{chore.category}</p>
                </div>
                <div className='details-btns'>
                    <button onClick={ () => handlePopup("update", chore)}>Edit Details</button>
                    <br></br>
                    <button onClick={ () => handleDelete(chore.id)}>Delete Chore</button>
                    <br></br> {/* Delete functionality */}
                    <button onClick={ () => handlePopup("close")}>Close</button>
                </div>
            </div>
        </div>
    )
}