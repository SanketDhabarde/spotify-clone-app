import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import './Body.css';

function Body({ spotify }) {
    const [{ discover_weekly }] = useDataLayerValue();
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if(search){
                spotify.searchTracks(search).then(res => {
                    setSearchResult(res.tracks.items);
                })
            }
          }, 1000);  
        
        return () => {
            clearTimeout(timer);
        };
    }, [search, spotify])
    return (
        <div className="body">
           <Header search={search} setSearch={setSearch}/>
           {search ? (
               <div className="body__songs">
                   {searchResult.map(track => (
                        <SongRow track={track} key={track.url}/>
                   ))}
               </div>
           ): (
            <>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled
                        className="body__shuffle"
                    />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} key={item.track.id}/>
                ))}
            </div>
            </>
           )} 
        </div>
    )
}

export default Body;
