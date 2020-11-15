import React, {useState} from 'react';
import {getLoginURL, getAlbumImages} from './backend.js';
import ReactDOM from 'react-dom';
import peter from './peter.png';
import './App.css';
import image1 from './placeholder2.PNG'
import image2 from './placeholder2.PNG'
import image3 from './placeholder2.PNG'
import image4 from './placeholder2.PNG'
import toast from './toast.jpg'
import waco from './waco.jpg'
import apologetix from './apologetix.jpg'
import omega from './omega.jpeg'
import peterswag from './peterswag.PNG'

function authenticate() {
  window.location.replace(getLoginURL());
}

function fillAlbum() {
  /*var data = getAlbumImages('BQDBsVgsnmCmhGbH9BBklH0vWNZtq4kiCX9MpIq13ArushMN8v6pRp_E9uelkfe6NPPGLdQkYIDC15LnegKofVKRDQLg6zVUi0JOTdpvE4X-WBjhwGeWhYTitJCiPAuCv5Y67CZ6AIWAlOdiw7vlYk2af2yQ');*/
  var new_images = [toast, waco, apologetix, omega];
  /*var new_images = [<img src={data[0]}/>, <img src={data[1]}/>, <img src={data[2]}/>, <img src={data[3]}/>];*/
  return(new_images);
}


function InitialState()
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
          <div className="buttons">
            <button id="loginButton" onClick={() => {if((new URLSearchParams(window.location.search)).get('code') == null){authenticate();}}}>Spotify Login</button>
            <button id="showAlbumsButton" onClick={() => setAlbum(fillAlbum())}>Show Album Images</button>
          </div>
          <div className="imageBox">
            {/* <img className="PeterImage" src={peter} alt="Peter"/> */}
            <img className="album1" src={album[0]} alt="test1"/>
            <img className="album2" src={album[1]} alt="test2"/>
            <img className="album3" src={album[2]} alt="test3"/>
            <img className="album4" src={album[3]} alt="test4"/>
          </div>
          <div className="credits">
            <p>Created by <a href='https://www.linkedin.com/in/kaitlyn-suzuki-114a201b9/' target='_blank'><font color="black">Kaitlyn Suzuki</font></a>,
                          <a href='https://www.linkedin.com/in/linda-fan-648333195/' target='_blank'><font color="black">Linda Fan</font></a>,
                          <a href='https://www.linkedin.com/in/grace-manning/' target='_blank'><font color="black">Grace Manning</font></a>,
                          <a href='https://www.linkedin.com/in/mignon-april-lee/' target='_blank'><font color="black">Mignon April Lee</font></a>.
            </p>
          </div>
      </div>

    );
}


function Instructions(){
  const instructionText1 = "1. Click \"Spotify Login\" to login to Spotify.";
  const instructionText2 = "2. Click \"Show Album Images\" to display albums.";
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