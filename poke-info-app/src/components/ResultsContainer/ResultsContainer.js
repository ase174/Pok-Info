import { useState } from 'react';
import React, { useEffect } from 'react';
import './ResultsContainer.css';
import PokeCard from '../PokeCard/PokeCard';

const ResultsContainer = ({ selectedGame }) => {

    const [pokeResults, setPokeResults] = useState([])
    const [region, setRegion] = useState('')

    const fetchPokeInfo = async () => {
        setPokeResults([])
        let url = `https://pokeapi.co/api/v2/version-group/${selectedGame}`
        let pokedexUrl = ''
        let regions = ''
        await fetch(url)
            .then(response => response.json())
            .then((pokeData) => {
                pokedexUrl = pokeData.pokedexes[0].url
                regions += '['
                for (let i = 0; i < pokeData.regions.length; i++) {
                    if (i % 2 != 0)
                        regions += ', '
                    regions += pokeData.regions[i].name
                }
                regions += ']'
                setRegion(regions)
            })
        await fetch(pokedexUrl)
            .then(response => response.json())
            .then((pdata) => {
                setPokeResults(pdata.pokemon_entries)
            })
    }
    useEffect(() => {
        fetchPokeInfo();
    }, [selectedGame]);
    return (
        <div className="results">
            <div>
                {`${pokeResults.length} pokemon in ${region}`}
            </div>
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