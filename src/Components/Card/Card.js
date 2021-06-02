import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import './Card.css';

function Card({ playlist, artist, track }) {
    const [{}, dispatch] = useDataLayerValue();

    const currentTrackHandler = (track) => {
        dispatch({
            type:'SET_ITEM',
            item: track
        });
    }
    return (
        <div className={`card ${!playlist && "card__artist"}`}>
            {playlist && (
                <>
                <img src={playlist?.images[0].url} alt="" />
                <div className="card__info">
                    <h4>{playlist?.name}</h4>
                    <p>{playlist?.description || playlist?.owner.display_name}</p>
                </div>
                </>
            )}
            {artist && (
                <>
                    <img src={artist?.images[0].url} alt="" />
                    <div className="card__info">
                        <h4>{artist?.name}</h4>
                    </div>
                </>
            )}
            {track && (
                <>
                    <img src={track?.album.images[0].url} alt="" onClick={() => currentTrackHandler(track)}/>
                    <div className="card__info">
                        <h4>{track?.name.substring(0,20) + "..."}</h4>
                    </div>
                </>
            )}
        </div>
    )
}

export default Card;
