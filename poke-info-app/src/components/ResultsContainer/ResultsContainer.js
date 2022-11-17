import { useState } from 'react';
import React, { useEffect } from 'react';
import './ResultsContainer.css';
import PokeCard from '../PokeCard/PokeCard';

const ResultsContainer = ({ selectedGame }) => {

    const [pokeResults, setPokeResults] = useState([])

    const fetchPokeInfo = async () => {
        setPokeResults([])
        let url = `https://pokeapi.co/api/v2/version-group/${selectedGame}`
        let pokedexUrl = ''
        let pokeUrl = ''
        let pokeName = ''
        await fetch(url)
            .then(response => response.json())
            .then((pokeData) => {
                pokedexUrl = pokeData.pokedexes[0].url
                //console.log(pokedexUrl)
            })
        await fetch(pokedexUrl)
            .then(response => response.json())
            .then((pdata) => {
                setPokeResults(pdata.pokemon_entries)
            })
        /*
            .then((pokeData) => {
                //setPokeResults(pokeData)
                for (let e = 0; e < pokeData.pokemon_entries.length; e++) {
                    pokeName = pokeData.pokemon_entries[e].pokemon_species.name
                    pokeUrl = pokeData.pokemon_entries[e].pokemon_species.url
                    setPokeResults(pokeResults => [...pokeResults, {'name': pokeName, 'url': pokeUrl}])
                }
                console.log(pokeResults)
            })
        */
    }
    useEffect(() => {
        fetchPokeInfo();
    }, [selectedGame]);

    return (
        <div className="results">
            {pokeResults.map((poke, index) =>
                <PokeCard
                    key={index}
                    name={poke.pokemon_species.name}
                    url={poke.pokemon_species.url}
                />
            )}
        </div>
    );
}

export default ResultsContainer;