import React from 'react';
import './CharacterCard.css';

const CharacterCard = props => (
    <div className='card' id={props.id}  >
        <div className='img-container'>
            <img alt={props.name} src={props.image} data-value={props.id} onClick={props.handleBtnClick}/>
        </div>
    </div>
);

export default CharacterCard;