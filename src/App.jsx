import { useState } from 'react';
import CafeMap from './components/CafeMap';
import FilterBar from './components/FilterBar';
import cafes from './data/cafes.json';
import { filterCafes, toggleTag } from './lib/filterCafes';
import './App.css';

function App() {
  const [activeTags, setActiveTags] = useState([]);

  const visibleCafes = filterCafes(cafes, activeTags);

  return (
    <main>
      <h1>Brussels Brews ☕</h1>
      <FilterBar
        activeTags={activeTags}
        onToggle={(tag) => setActiveTags(toggleTag(activeTags, tag))}
      />
      <CafeMap cafes={visibleCafes} />
    </main>
  );
}

export default App;
