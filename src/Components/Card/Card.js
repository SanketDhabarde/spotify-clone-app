import React from 'react';
import './Card.css';

function Card({ playlist }) {
    return (
        <div className="card">
            <img src={playlist?.images[0].url} alt="" />
            <div className="card__info">
                <h4>{playlist?.name}</h4>
                <p>{playlist?.description || playlist?.owner.display_name}</p>
            </div>
            
        </div>
    )
}

export default Card;
