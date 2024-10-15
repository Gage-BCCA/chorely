import './detailsPopup.css'


export default function DetailsPopup ({ chore }) {
    return (
        <div className='chore-details'>
            <header>{chore.chore}</header>
            <h1>Owner / Posted: Date Posted</h1>
            <h2>Importance / Due: Due Date / Status: Status</h2>
                <p>Details: <br></br>
                    Chore Title:<br></br>
                    Chore Description<br></br>
                    Allowance Amount : Paid(Status)
                </p> 
            <div className='chore-comments'>
                <h3>Comments</h3>
                    <p>Author</p>
                    <p>Date Posted</p>
                    <p>Comment Text</p>
                </div>
            <footer>Categories</footer>
            {/* Need to make close window button */}
        </div>
    )
}