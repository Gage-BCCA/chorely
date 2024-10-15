import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Popup from "./components/popup/Popup";
import ContentContainer from "./components/contentContainer/ContentContainer";
import CreationForm from "./components/creationForm/CreationForm";
import DetailsPopup from "./components/detailsPopup/DetailsPopup";
import { useState, useEffect } from "react";

function App() {
  const [popup, setPopup] = useState(0);
  const [chores, setChore] = useState([]);

  // `https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=2`
  useEffect(() => {
    fetch(`./chores_test.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Network request.")
        let choreArrayBuffer = chores.slice();
        choreArrayBuffer.push(data);
        setChore(choreArrayBuffer);
      })
      .catch((error) => console.error("Error fetching chores: ", error));
  }, []);


  function handlePopup(type, data) {
    // Dynamically set the popup type to be rendered
    // Each popup window will be a separate component
    console.log("Setting popup type")
    console.log(data);
    switch (type){
      case 'creation':
        setPopup(1);
        break;
      case 'deletion':
        setPopup(2);
        break;
      case 'details':
        setPopup(3, data);
        break;
    }
  }

  function renderPopup(type) {
    console.log("Determining popup type");
    console.log(type);
    switch (type){
      case 1:
        return <CreationForm />
      case 3:
        return <DetailsPopup chore={type.data} />
      default:
        return null;
    }
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
