import React, {useState, useEffect} from 'react';
import InitialState from './initialState';
import './App.css';
import {getToken, getAlbumImages} from './backend';

function App(){
  const [albums, setAlbums] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    console.log('something idk');
    var to = getToken();
    console.log(to);
    setToken(to);
    if (to != null)
    {
      var data = getAlbumImages(to);
      console.log(data);
      setAlbums(data);
    }

  }, [])

  return(
    <div className="app">
      <InitialState />
      {albums != null ? albums : null}
    </div>
  );
  
}

export default App;