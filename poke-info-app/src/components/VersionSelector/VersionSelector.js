import React, { useEffect } from 'react';
import './VersionSelector.css';
import { useState } from 'react';

const VersionSelector = ({ setSelectedGame }) => {

    const [versions, setVersions] = useState([]);
    const [selVer, setSelVer] = useState('')

    const fetchVersions = async () => {
        let url = 'https://pokeapi.co/api/v2/version-group'
        await fetch(url)
            .then(response => response.json())
            .then((versionData) => {
                setVersions(versionData.results)
            })
    }
    useEffect(() => {
        fetchVersions();
    }, [selVer]);

    const handleSelect = (selectedGame) => {
        setSelVer(selectedGame)
        setSelectedGame(selectedGame)
    }
    return (
        <>
            <label>Game Version:
                <select required className={selVer} onChange={e => handleSelect(e.target.value)}>
                    {versions.map((version, index) =>
                        <option className={version.name} value={version.name} key={index}>
                            {version.name}
                        </option>
                    )}
                </select>
            </label>
        </>
    );
}

export default VersionSelector;