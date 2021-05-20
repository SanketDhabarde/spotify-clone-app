import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../Context/DataLayer';
import { NavLink } from 'react-router-dom';

function Sidebar({spotify}) {
    const [{ playlists}] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <NavLink to="/search" activeClassName="sidebar__active">
                <SidebarOption title="Search" Icon={SearchIcon}/>
            </NavLink>
            
            <NavLink to="/library" activeClassName="sidebar__active">
                <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
            </NavLink>
            
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <NavLink to={`/playlist/${playlist.id}`} activeClassName="sidebar__active">
                    <SidebarOption key={playlist.id} title={playlist.name} id={playlist.id} spotify={spotify}/>
                </NavLink>    
            ))}
        </div>
    )
}

export default Sidebar;
