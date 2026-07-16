import cafes from '../data/cafes.json';

function Marquee() {
  const items = cafes.map((cafe) => `${cafe.name} · ${cafe.quartier}`);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">☕</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;