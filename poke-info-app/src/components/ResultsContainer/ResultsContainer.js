import { useState } from 'react';
import React, { useEffect } from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({selectedGame}) => {

    const [pokeResults, setPokeResults] = useState('')

    const fetchPokeInfo = async () => {
        let url = `https://pokeapi.co/api/v2/version-group/${selectedGame}`
        await fetch(url)
            .then(response => response.json())
            .then((pokeResults) => {
                setPokeResults(pokeResults.results)
                console.log(pokeResults)
                console.log(pokeResults.pokedexes[0].url)
            })
    }

    useEffect(() => {
        fetchPokeInfo();
    }, [selectedGame]);

    return (
        <>
            <p></p>
        </>
    );
}

export default ResultsContainer;