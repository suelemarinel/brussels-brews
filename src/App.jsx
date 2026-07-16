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
import SpotsGrid from './components/SpotsGrid';

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
      <SpotsGrid
        cafes={visibleCafes}
        activeTags={activeTags}
        onToggle={(tag) => setActiveTags(toggleTag(activeTags, tag))}
        onSelect={(id) => {
          setSelectedId(id);
          document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <main id="guide" className="guide-section">
        <h2>Sur la carte</h2>
        <p className="guide-intro">
          Les mêmes filtres s'appliquent ici — clique sur une tasse pour ouvrir sa fiche.
        </p>
        <div className="content">
          <CafeMap
            cafes={visibleCafes}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId((current) => (current === id ? null : id))}
          />
          <CafeDetail cafe={selectedCafe} onClose={() => setSelectedId(null)} />
        </div>
      </main>
    </>
  );
}

export default App;
