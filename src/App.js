import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Popup from "./components/popup/Popup";
import ChoreListContainer from "./components/choreListContainer/ChoreListContainer";
import { useState, useEffect } from "react";

function App() {
  const [popup, setPopup] = useState(false);
  const [chores, setChore] = useState([]);

  // `https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=2`
  useEffect(() => {
    fetch(`/chores_test.json`)
      .then((response) => response.json())
      .then((data) => {
        setChore(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching chores: ", error));
  }, []);

  function handlePopup(text) {
    // This will populate the generic popup component and display it.
    setPopup(!popup);
  }

  return !popup ? (
    <div className="App">
      <div className="side-bar-container">
        <SideBar handlePopup={handlePopup} />
      </div>
      <div className="content-container">
        <h1>This is a test</h1>
        <ChoreListContainer chores={chores} />
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="side-bar-container opaque">
        <SideBar />
      </div>
      <div className="content-container opaque">
        <h1>This is a test</h1>
      </div>
      <Popup handlePopup={handlePopup} />
    </div>
  );
}

export default App;
