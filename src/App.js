import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import ContentContainer from "./components/contentContainer/ContentContainer";
import CreationForm from "./components/creationForm/CreationForm";
import DetailsPopup from "./components/detailsPopup/DetailsPopup";
import ChoreEditForm from "./components/choreEditForm/ChoreEditForm";
import ConfirmPopup from './components/confirmPopup/ConfirmPopup';
//import TotalChores from '../components/totalChores/totalChores';
//import TotalChoresCompleted from '../components/totalChoresCompleted/totalChoresCompleted';
//import TotalChoresIncomplete from '../components/totalChoresIncomplete/totalChoresIncomplete
import { useState, useEffect } from "react";


function App() {
  const [popup, setPopup] = useState(0);
  const [chores, setChore] = useState([]);
  const [currentChore, setCurrentChore] = useState({});
  const [trigger, setTrigger] = useState(false)

  // `https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=2`
  useEffect(() => {
    fetch(`https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=2`)
      .then((response) => response.json())
      .then((data) => {
        let buffer = []
        for (let datum of data["response"]){
          buffer.push(datum);
        }
        setChore(buffer);
        setTrigger(false);
      })
      .catch((error) => console.error("Error fetching chores: ", error));
  }, [trigger]);


  function handlePopup(type, data) {
    // Dynamically set the popup type to be rendered
    // Each popup window will be a separate component
    switch (type){
      case "close":
        setPopup(false);
        setTrigger(true);
        break;
      case 'creation':
        setPopup(1);
        break;
      case 'details':
        setPopup(3);
        setCurrentChore(data)
        break;
      case 'update':
        setPopup(4);
        break;
      case 'confirm':
        setPopup(5);
        setCurrentChore(data);
        break;
    }
  }

  function renderPopup(type) {
    console.log("Determining popup type");
    console.log(type);
    switch (type){
      case 1:
        return <CreationForm handlePopup={handlePopup} createNewChore={createNewChore} />
      case 3:
        return <DetailsPopup chore={currentChore} handlePopup={handlePopup} />
      case 4:
        return <ChoreEditForm chore={currentChore} handlePopup={handlePopup} />
      case 5:
        return <ConfirmPopup chore={currentChore} handlePopup={handlePopup}/>
      default:
        return null;
    }
  }

  function createNewChore(chore){
    fetch("https://unit-4-project-app-24d5eea30b23.herokuapp.com/post/data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "team": 2,
        "body": chore
      })
    })
  }

  return !popup ? (
    <div className="App">
      <div className="side-bar-container">
        <SideBar handlePopup={handlePopup} />
      </div>
      <div className="content-container">
        <ContentContainer 
        chores={ chores } 
        handlePopup={handlePopup}
        />
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="side-bar-container opaque">
        <SideBar />
      </div>
      <div className="content-container opaque">
        <ContentContainer chores={ chores } />
      </div>
      { renderPopup(popup) }
    </div>
  );
}

export default App;
