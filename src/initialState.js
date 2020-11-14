import React from 'react'
import './App.css';
import './index.js';
import peter from './peter.png';

function InitialState()
{
    return(
        <div className="initialState">
            <h2 class>Peter Swag!</h2>
            <p>memeify your top tracks!</p>
            <button id="loginButton">Log in to Spotify</button>
            
            <img className="PeterImage" src={peter} alt="Peter"/>
        </div>

    );
}

export default InitialState