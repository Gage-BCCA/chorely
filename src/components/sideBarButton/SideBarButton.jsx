import "./sideBarButton.css"

export default function SideBarButton({ text, handleClick }) {
    return(
        <>
        <button 
        className="side-bar-button"
        onClick={() => handleClick("generic")}
        >
            { text }
        </button>
        </>
    )
}