import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import './SongRow.css';

function SongRow({ track }) {
    const [{}, dispatch] = useDataLayerValue();

    const currentTrackHandler = (track) => {
        dispatch({
            type:'SET_ITEM',
            item: track
        });
    }
    return (
        <div className="songRow" onClick={() => currentTrackHandler(track)}>
            <img src={track.album.images[0].url} className="songRow__album" alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;
