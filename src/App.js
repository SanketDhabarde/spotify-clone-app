import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Context/DataLayer";
import Player from "./Components/Player/Player";

// creating the new instance of spotify web api
const spotify = new SpotifyWebApi();

function App() {
  // const [{ user }, dispatch] = useDataLayerValue();
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = getTokenFromUrl;
    // empty the url after getting token
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // connect spotify with react using token
      spotify.setAccessToken(_token);
      // get the current user from spotify
      spotify.getMe().then((user) => {
        // add the user into context or data layer
        dispatch({
          type: "SET_USER",
          user: user,
        });

        // my fav tracks
        spotify
          .getMySavedTracks()
          .then((res) => {
            dispatch({
              type: "SET_FAV_TRACKS",
              favTracks: res.items,
            });
          })
          .catch((err) => console.log("error is:", err));

        spotify.getUserPlaylists().then((_playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: _playlists,
          });
        });

        // get top artists based on your playing history
        spotify.getMyTopArtists().then((res) => {
          dispatch({
            type: "SET_TOP_ARTISTS",
            topArtists: res.items,
          });
        });

        spotify.getMyTopTracks().then((res) => {
          dispatch({
            type: "SET_TOP_TRACKS",
            topTracks: res.items,
          });
        });

        spotify.getMyRecentlyPlayedTracks().then((res) => {
          dispatch({
            type: "SET_RECENTLY_PLAYED",
            recentlyPlayed: res.items,
          });
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
