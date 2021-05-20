import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Player.css';

function Player({ spotify }) {
    return (
        <BrowserRouter>
            <div className="player">
                <div className="player__body">
                    <Sidebar spotify={spotify}/>
                    {/* based on route render different body component */}
                    <Route path="/" exact>
                        <Body spotify={spotify} homeRoute/>
                    </Route>
                    <Route path="/search" exact>
                        <Body spotify={spotify} searchRoute/>
                    </Route>
                    <Route path="/library" exact>
                        <Body spotify={spotify} libraryRoute/>
                    </Route>
                    <Route path="/playlist/:id" exact>
                        <Body spotify={spotify} playlistRoute/>
                    </Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Player;
