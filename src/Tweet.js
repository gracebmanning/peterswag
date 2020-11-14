import React from 'react';
import "./App.css"
function Tweet(props){

    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>This is a random Tweet</p>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;