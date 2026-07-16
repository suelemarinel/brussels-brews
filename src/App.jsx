import { useState } from 'react';
import CafeMap from './components/CafeMap';
import FilterBar from './components/FilterBar';
import CafeDetail from './components/CafeDetail';
import cafes from './data/cafes.json';
import { filterCafes, toggleTag } from './lib/filterCafes';
import './App.css';

function App() {
  const [activeTags, setActiveTags] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const visibleCafes = filterCafes(cafes, activeTags);
  const selectedCafe = cafes.find((c) => c.id === selectedId) ?? null;

  return (
    <main>
      <h1>Brussels Brews ☕</h1>
      <FilterBar
        activeTags={activeTags}
        onToggle={(tag) => setActiveTags(toggleTag(activeTags, tag))}
      />
      <div className="content">
        <CafeMap cafes={visibleCafes} onSelect={setSelectedId} />
        <CafeDetail cafe={selectedCafe} onClose={() => setSelectedId(null)} />
      </div>
    </main>
  );
}

export default App;
