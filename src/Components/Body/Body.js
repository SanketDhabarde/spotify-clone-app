import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import './Body.css';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header/>
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
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body;
