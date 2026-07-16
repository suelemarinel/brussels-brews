import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CafeMap from './components/CafeMap';
import FilterBar from './components/FilterBar';
import CafeDetail from './components/CafeDetail';
import cafes from './data/cafes.json';
import { filterCafes, toggleTag } from './lib/filterCafes';
import './App.css';
import Marquee from './components/Marquee';

function App() {
  const [activeTags, setActiveTags] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const visibleCafes = filterCafes(cafes, activeTags);
  const selectedCafe = cafes.find((c) => c.id === selectedId) ?? null;

  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <main id="guide" className="guide-section">
        <h2>Trouve ton café</h2>
        <p className="guide-intro">Filtre par ambiance, clique sur une tasse, découvre ton prochain QG.</p>
        <FilterBar
          activeTags={activeTags}
          onToggle={(tag) => setActiveTags(toggleTag(activeTags, tag))}
        />
        <div className="content">
        <CafeMap
          cafes={visibleCafes}
          onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
        />
          <CafeDetail cafe={selectedCafe} onClose={() => setSelectedId(null)} />
        </div>
      </main>
    </>
  );
}

export default App;
