/*

Holds the List of Chores and is the main content container. Sits side-by-side
to the SideBar component.

*/

import './contentContainer.css'
import ChoreListContainer from '../choreListContainer/ChoreListContainer'

import TotalChores from '../totalChores/totalChores'
import TotalChoresCompleted from '../totalChoresCompleted/totalChoresCompleted'
import TotalChoresIncomplete from '../totalChoresIncomplete/totalChoresIncomplete'





export default function ContentContainer({ chores, handlePopup }) {
    return(
        <>
        <div className='app-header'>
            <h1>Chores</h1>
        </div>
        <ChoreListContainer chores={ chores } handlePopup={handlePopup} />
        </>
    )
}