import './detailsPopup.css'


export default function DetailsPopup ({ chore, handlePopup }) {
    return (
        <div className='popup'>
            <div className='chore-details'>
                <h1>{chore.chore}</h1>
                <h2>{chore.owner} / {chore.date_posted}</h2>
                <h3>{chore.importance} / Due: {chore.due_date} / Status: {chore.status}</h3>
                    <h4>Details: </h4>
                    <p>{chore.chore}:<br></br>
                        {chore.description}<br></br>
                        Allowance Amount: ${chore.allowance_amount}<br></br>
                        Paid: {chore.paid}</p> 
                <div className='chore-comments'>
                    <h4>Comments</h4>
                        <p>{chore.comments.author}</p>
                        <p>{chore.comments.date_posted}</p>
                        <p>{chore.comments.text}</p>
                    </div>
                <footer>Categories: <br></br>
                {chore.category}
                </footer>
                <button onClick={ () => handlePopup("close")}>Close</button>
            </div>
        </div>
    )
}