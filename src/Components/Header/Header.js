import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import './Header.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header({search, setSearch, searchRoute}) {
    const [{ user }] = useDataLayerValue();
    
    return (
        <div className="header">
            <div>   
            {searchRoute && (
                <div className="header__left">
                    <Search/>
                    <input type="text" placeholder="search songs" value={search} onChange={e => setSearch(e.target.value)}/>
                </div>
            )}
            </div>
            
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
                <ExitToAppIcon className="header__rightLogout"/>
            </div>
        </div>
    )
}

export default Header;
