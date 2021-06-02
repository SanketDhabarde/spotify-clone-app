import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Row from '../Row/Row';
import SongRow from '../SongRow/SongRow';
import './Body.css';

function Body({ spotify, searchRoute, playlistRoute, libraryRoute, homeRoute }) {
    const [{ selectedPlayList, playlists}] = useDataLayerValue();
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    
    // to search the songs
    useEffect(() => {
        const timer = setTimeout(() => {
            if(search){
                spotify.searchTracks(search).then(res => {
                    setSearchResult(res.tracks.items);
                    setSearch("");
                })
            }
          }, 1000);  
        
        return () => {
            clearTimeout(timer);
        };
    }, [search, spotify]);

    return (
        <div className="body">
           {homeRoute && (
               <>
               <Header search={search} setSearch={setSearch}/>
               <Row title="Top Artists" topArtist/>
               <Row title="Top Tracks" topTrack/>
               <Row title="Recently Played" recentlyPlay/>
               </>
           )}
           {playlistRoute && (
               <>
               <Header search={search} setSearch={setSearch}/>
               <div className="body__info">
                   <img src={selectedPlayList?.images[0].url} alt="" />
                   <div className="body__infoText">
                       <strong>PLAYLIST</strong>
                       <h2>{selectedPlayList?.name}</h2>
                       <p>{selectedPlayList?.description}</p>
                       <h5>{selectedPlayList?.owner.display_name}</h5>
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
                   {selectedPlayList?.tracks.items.map(item => (
                       <SongRow track={item.track} key={item.track.id}/>
                   ))}
               </div>
               </>
           )}
           {searchRoute && (
               <>
               <Header search={search} setSearch={setSearch} searchRoute/>
               <div className="body__songs">
                   {searchResult.map(track => (
                        <SongRow track={track} key={track.id}/>
                   ))}
               </div>
               </>
           )} 
           {libraryRoute && (
               <>
               <Header search={search} setSearch={setSearch}/>
                <div className="body__albums">
                    {playlists?.items.map(item => (
                        <Card key={item.id} playlist={item} style={{maxWidth: '250px'}}/>
                    ))}
                </div>
               </>
           )}
        </div>
    )
}

export default Body;
