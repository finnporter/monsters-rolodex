import React from 'react';
// import {01.png} from '../../assets';
import './card.styles.css';
export const Card = (props) => (
    <div className="card-container">        
        <img alt="monster information" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> { props.monster.name }</h2>
        <p> { props.monster.email } </p>
    </div>
)

