import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import './Header.css';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    
    return (
        <div className="header">
            <div className="header__left">
                <Search/>
                <input type="text" placeholder="search artist, songs, albums"/>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
