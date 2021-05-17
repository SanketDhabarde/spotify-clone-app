import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

// creating the new instance of spotify web api
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const _token = getTokenFromUrl;
    // empty the url after getting token
    window.location.hash = ""; 

    if(_token){
      setToken(_token);
      // connect spotify with react using token
      spotify.setAccessToken(_token);
      // get the user from spotify
      spotify.getMe().then(user => {
        console.log(user);
      })
    }
  }, []);


  return (
    <div className="app">
      {
        token ? (
          <h1>im logged in</h1>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
