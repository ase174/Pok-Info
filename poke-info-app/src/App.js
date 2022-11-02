import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VersionSelector from './components/VersionSelector/VersionSelector';
import { useState } from 'react';


function App() {

  const [selectedGame, setSelectedGame] = useState('')
  return (
    <div className="content">
      <div className="flex search-bar">
        <VersionSelector setSelectedGame={setSelectedGame} />
        <SearchBar />
      </div>
      <div className="image-container">
          <img className="image" src={require("./images/red-blue.png")} />
        </div>
      <div className="directions">
        <ul>
          <li>
            Choose your game version and search for a pokemon to view its information
          </li>
          <li>
            Optional: Add /moves /abilities /routes /evolution
          </li>
          </ul>
      </div>
      <div class="info clearfix">
        <p>Results</p>
      </div>
    </div>
  );
}

export default App;
