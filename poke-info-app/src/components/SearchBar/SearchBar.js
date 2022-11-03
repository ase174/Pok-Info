import React from 'react';
import './SearchBar.css';
import { useState } from 'react';
import VersionSelector from '../VersionSelector/VersionSelector';

const SearchBar = ({pokeQuery, setPokeQuery}) => {
    //const [query, setQuery] = useState("")
    //try typing without submit button, or delete onchange and use submit button to update query using value in text input
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Pokémon:
                    <input id="queryInput" type="text" value={pokeQuery} onChange={e => setPokeQuery(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default SearchBar;