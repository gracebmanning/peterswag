import React from 'react'
import './App.css';
import {getLoginURL} from './backend'

function InitialState()
{
    return(
        <div className="initialState">
            <h2 class>Peter Swag!</h2>
            <p>memeify your top tracks!</p>
            <a href={getLoginURL()}>Log in to Spotify</a>
        </div>

    );
}

export default InitialState