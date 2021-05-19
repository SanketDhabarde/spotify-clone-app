import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from '../../Context/DataLayer';

function Footer() {
    const [{ item }] = useDataLayerValue();
    
    return (
        <div className="footer">
            {item ? (
                <div className="footer__left">
                    <img className="footer__albumLogo"
                    src={item.album.images[0].url} alt="" />
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>
                            {item.album.name}
                        </p>
                    </div>
                </div>
            ): (
                <div className="footer__left">
                    <img className="footer__albumLogo"
                    src="https://images.unsplash.com/photo-1598386860329-3d7214504a3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29uZyUyMGFsYnVtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="footer__songInfo">
                        <h4>No Song Selected</h4>
                        <p>....</p>
                    </div>
                </div>
            )}
            
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleFilledIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
