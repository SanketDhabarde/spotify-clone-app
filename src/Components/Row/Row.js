import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import Card from '../Card/Card';
import './Row.css';

function Row({title, topTrack, topArtist, recentlyPlay}) {
    const [{topArtists, topTracks, recentlyPlayed}] = useDataLayerValue();
    
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
        {recentlyPlay && (
            <div className="row">
                {recentlyPlayed?.map(track => (
                    <Card track={track.track} key={track.played_at}/>
                ))}
            </div>
        )}
        </>
    )
}

export default Row;
