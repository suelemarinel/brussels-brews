function CafeDetail({ cafe, onClose }) {
  if (!cafe) return null;

  return (
    <aside className="cafe-detail">
      <button className="close-btn" onClick={onClose} aria-label="Fermer la fiche">
        ✕
      </button>
      <p className="detail-quartier">{cafe.quartier}</p>
      <h2>{cafe.name}</h2>
      <p className="detail-rating">
        {'★'.repeat(Math.round(cafe.rating))} {cafe.rating}/5 · {cafe.price}
      </p>
      <p className="detail-blurb">{cafe.blurb}</p>
      <p className="detail-signature">☕ {cafe.signature}</p>
      <ul className="detail-infos">
        <li>📍 {cafe.address}</li>
        <li>🕐 {cafe.hours}</li>
        <li>{cafe.wifi ? '📶 Wifi' : '🚫 Pas de wifi'} · {cafe.plugs ? '🔌 Prises' : '🚫 Pas de prises'}</li>
      </ul>
    </aside>
  );
}

export default CafeDetail;