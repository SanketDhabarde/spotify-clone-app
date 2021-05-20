import React from 'react';
import { useDataLayerValue } from '../../Context/DataLayer';
import './SidebarOption.css';

function SidebarOption({ title, Icon, id, spotify}) {
    const [{}, dispatch] = useDataLayerValue();
    
    const selectedPlayListHandler = (id) => {
        if(id){
            spotify.getPlaylist(id).then(response => {
                dispatch({
                    type: 'SET_SELECTED_PLAYLIST',
                    selectedPlayList: response
                })
            })
        }
    }
    return (
        
        <div className="sidebarOption" onClick={() => selectedPlayListHandler(id)}>
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? <h4>{title}</h4> :  <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;
