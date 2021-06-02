import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import Card from '../Card/Card';
import './Row.css';

function Row({title, topTrack, topArtist}) {
    const [{topArtists, topTracks}] = useDataLayerValue();

    return (
        <>
        <h2>{title}</h2>
        {topArtist && (
            <div className="row">
                {topArtists?.map(artist => (
                    <Card artist={artist} key={artist.id}/>
                ))}
            </div>
        )}
        {topTrack && (
            <div className="row">
                {topTracks?.map(track => (
                    <Card track={track} key={track.id}/>
                ))}
            </div>
        )}
        
        </>
    )
}

export default Row;
