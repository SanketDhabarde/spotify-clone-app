import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './Context/DataLayer';
import Player from './Components/Player/Player';

// creating the new instance of spotify web api
const spotify = new SpotifyWebApi();

function App() {
  // const [{ user }, dispatch] = useDataLayerValue();
  const [{ user, token }, dispatch] = useDataLayerValue();
  

  useEffect(() => {
    const _token = getTokenFromUrl;
    // empty the url after getting token
    window.location.hash = ""; 

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      // connect spotify with react using token
      spotify.setAccessToken(_token);
      // get the user from spotify
      spotify.getMe().then(user => {
        // add the user into context or data layer
        dispatch({
            type: 'SET_USER',
            user: user
        });
      })
    }
  }, [dispatch]);


  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
