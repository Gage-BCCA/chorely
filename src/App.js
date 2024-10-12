import './App.css';
import SideBar from './components/sideBar/SideBar';
import Popup from './components/popup/Popup';
import { useState } from 'react'

function App() {
  const [popup, setPopup] = useState(false);

  function handlePopup(text){
    // This will populate the generic popup component and display it.
    setPopup(!popup);
  }


  return !popup ? (
    <div className="App">
      <div className='side-bar-container'>
        <SideBar 
        handlePopup={handlePopup}
        />
      </div>
      <div className='content-container'>
          <h1>This is a test</h1>
      </div>
      
    </div>
  ): (
    <div className="App">
    <div className='side-bar-container opaque'>
      <SideBar />
    </div>
    <div className='content-container opaque'>
        <h1>This is a test</h1>
    </div>
    <Popup 
    handlePopup={handlePopup}
    />
  </div>
  );
}

export default App;
