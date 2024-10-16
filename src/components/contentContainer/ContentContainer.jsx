/*

Holds the List of Chores and is the main content container. Sits side-by-side
to the SideBar component.

*/

import './contentContainer.css'
import ChoreListContainer from '../choreListContainer/ChoreListContainer'


export default function ContentContainer({ chores, handlePopup }) {
    return(
        <>
        <h1>Chores</h1>
        <ChoreListContainer chores={ chores } handlePopup={handlePopup} />
        </>
    )
}