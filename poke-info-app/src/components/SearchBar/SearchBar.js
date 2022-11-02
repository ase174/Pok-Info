import React from 'react';
import './SearchBar.css';
import { useState } from 'react';
import VersionSelector from '../VersionSelector/VersionSelector';

const SearchBar = () => {
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Pokémon:
                    <input id="queryInput" type="text" value={query} onChange={e => setQuery(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default SearchBar;