import './detailsPopup.css'


export default function DetailsPopup ({ chore, handlePopup }) {
    {/* Handling of ChoreEditForm */}
    {/* Make importance a colored circle? */}

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
                    <h4>Categories:</h4>
                        <p>{chore.category}</p>
                <button onClick={ () => handlePopup("close")}>Edit Details</button><br></br>
                <button onClick={ () => handlePopup("close")}>Close</button>
            </div>
        </div>
    )
}