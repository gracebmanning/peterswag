import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import peter from './peter.png';
import './App.css';
import image1 from './placeholder2.PNG'
import image2 from './placeholder2.PNG'
import image3 from './placeholder2.PNG'
import image4 from './placeholder2.PNG'
import peterswag from './peterswag.PNG'

function authenticate() {
  alert("AHHH");
  
  return([image4, image3, image1, image2]);

}


function InitialState(props)
{
  const [album, setAlbum] = useState([image1, image2, image3, image4]);
  return(
      <div className="initialState">
          <div className="initialStateText">
            <div className="initialStateTextHead">
                  <div className="headerAndLogo">
                  <img className="PeterSwagLogo" src={peterswag} alt="PeterSwag"/>
                  <h2 className="mainHeader">Peter Swag</h2>
                  </div>
                <p className="subtext">memeify your top tracks!</p>
            </div>
            <div className="initialStateTextInstructions">
              <Instructions />
            </div>
          </div>
          <button id="loginButton" onClick={() => setAlbum(authenticate())}>Spotify Login</button>
          <div className="imageBox">
            {/* <img className="PeterImage" src={peter} alt="Peter"/> */}
            <img className="album1" src={album[0]} alt="test1"/>
            <img className="album2" src={album[1]} alt="test2"/>
            <img className="album3" src={album[2]} alt="test3"/>
            <img className="album4" src={album[3]} alt="test4"/>
          </div>
          <div className="credits">
            <p>Created by <a href='https://github.com/tasti/react-linkify/' target='_blank'><font color="black">Kaitlyn Suzuki</font></a>,
                          <a href='https://github.com/tasti/react-linkify/' target='_blank'><font color="black">Linda Fan</font></a>,
                          <a href='https://www.linkedin.com/in/grace-manning/' target='_blank'><font color="black">Grace Manning</font></a>,
                          <a href='https://www.linkedin.com/in/mignon-april-lee/' target='_blank'><font color="black">Mignon April Lee</font></a>.
            </p>
          </div>
      </div>

    );
}


function Instructions(){
  const instructionText1 = "1. Click the button below to login to Spotify.";
  const instructionText2 = "2. Watch your top albums be displayed behind Peter.";
  return(
      <div className="instructions">
          <h2 className="instructionsHeader">Instructions</h2>
          <p className="instructionsDescription">{instructionText1}</p>
          <p className="instructionsDescription2">{instructionText2}</p>
      </div>
  );
}

function App(){
  
  
  return(
    <div className="app">
      <InitialState />
    </div>

  );
  
}

export default App;