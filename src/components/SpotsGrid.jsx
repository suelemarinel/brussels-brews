import FilterBar from './FilterBar';

function SpotsGrid({ cafes, activeTags, onToggle, onSelect }) {
  return (
    <section id="spots" className="spots-section">
      <h2>Les spots</h2>
      <p className="spots-intro">
        Filtre par ambiance, explore en images — clique sur un café pour le voir sur la carte.
      </p>
      <FilterBar activeTags={activeTags} onToggle={onToggle} />
      {cafes.length === 0 ? (
        <p className="spots-empty">
          Aucun café ne coche toutes ces cases (pour l'instant ☕). Essaie de retirer un filtre.
        </p>
      ) : (
        <div className="spots-grid">
          {cafes.map((cafe) => (
            <article key={cafe.id} className="spot-card">
              <button className="spot-card-btn" onClick={() => onSelect(cafe.id)}>
                <div className="spot-photo-wrap">
                  <img
                    src={cafe.image}
                    alt={`Le café ${cafe.name}`}
                    loading="lazy"
                  />
                  <span className="spot-price">{cafe.price}</span>
                </div>
                <div className="spot-body">
                  <p className="spot-quartier">{cafe.quartier}</p>
                  <h3>{cafe.name}</h3>
                  <p className="spot-signature">{cafe.signature}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SpotsGrid;