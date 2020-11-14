import React, {useState} from 'react';
import peter from './peter.png';
import './App.css';

function InitialState()
{
    return(
        <div className="initialState">
            <div className="initialStateText">
                <h2 className="mainHeader">Peter Swag!</h2>
                <p className="subtext">memeify your top tracks!</p>
            </div>
            <button id="loginButton">Log in to Spotify</button>
            
            <img className="PeterImage" src={peter} alt="Peter"/>
        </div>

    );
}


function Instructions(){
  const instructionText1 = "1. Click the button below to login to Spotify.";
  const instructionText2 = "2. Watch your Top Albums be Displayed Behind Peter.";
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
      <Instructions />
    </div>

  );
  
}

export default App;