import './confirmPopup.css';

export default function ConfirmPopup({ chore, handlePopup }) {

    //handle marking chore complete

    //handle marking incomplete


    return(
        <div className='popup'>
            <h1>Conformation</h1>
            <p> fill w info</p>

            <button onClick={ () => handlePopup('close')}>Mark Complete</button>

            <button onClick={ () => handlePopup('close')}>Mark Incomplete</button>
        </div>
    )
}