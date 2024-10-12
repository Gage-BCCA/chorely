import './popup.css'

export default function Popup({handlePopup}) {
    return(
        <div className='popup'>
            <h1>Hello World!</h1>
            <button
            onClick={handlePopup}
            >
                Close
            </button>
        </div>
    )
}