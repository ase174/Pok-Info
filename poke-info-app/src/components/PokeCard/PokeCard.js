import { useState } from 'react';
import React, { useEffect } from 'react';
import './PokeCard.css';

const PokeCard = ({name, url}) => {
    //console.log(url + name)
    return (
        <>
        <div className="card-container">
        <h5 className="name">{name}</h5>
        </div>
        </>
    );
}

export default PokeCard;