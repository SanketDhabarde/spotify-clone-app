import React from "react";
import { useDataLayerValue } from "../../Context/DataLayer";
import "./Modal.css";

function Modal({ track }) {
  const [{}, dispatch] = useDataLayerValue();

  const stopPlayingHandler = (event) => {
    if(event.target.classList.contains('backdrop')){
      dispatch({
        type: 'SET_PLAYING',
        playing: false
      });
    }
  }
  return (
    <div className="backdrop" onClick={stopPlayingHandler}>
      <iframe
        src={`https://open.spotify.com/embed/track/${track.id}`}
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Modal;
