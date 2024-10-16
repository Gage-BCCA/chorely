import './sideBar.css'
import SideBarButton from '../sideBarButton/SideBarButton'

export default function SideBar({ handlePopup }){

    function handleCreateButtonClick(){
        console.log("Hello World!");
    }

    function handleDeleteButtonClick(){
        console.log("DELETED");
    }

    return(
        <div className='side-bar'>
            <h1>Chorely</h1>
            <p>Manage Household Chores the Easy Way.</p>
            <SideBarButton 
            text="Create a Chore"
            handleClick={ handlePopup }
            popupType={ "creation" }
            />
            <SideBarButton 
            text="Delete a Chore"
            handleClick={ handlePopup }
            popupType={ "deletion" }
            />
            <SideBarButton 
            text="Trigger Popup"
            handleClick={handlePopup}
            />
        </div>
    )
}