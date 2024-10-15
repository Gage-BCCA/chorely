import "./sideBarButton.css"

export default function SideBarButton({ text, handleClick, popupType }) {
    return(
        <>
        <button 
        className="side-bar-button"
        onClick={() => handleClick(popupType)}
        >
            { text }
        </button>
        </>
    )
}