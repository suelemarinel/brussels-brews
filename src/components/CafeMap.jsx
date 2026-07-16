import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordonnées du centre de Bruxelles (Grand-Place, à peu près ☕)
const BRUSSELS_CENTER = [50.8466, 4.3528];

// Marker custom : pastille ronde style café, en HTML/CSS pur.
// La version "selected" est plus grande et inversée pour ressortir.
function cafeIcon(isSelected) {
  const size = isSelected ? 46 : 36;
  return L.divIcon({
    className: 'cafe-marker',
    html: `<span class="cafe-marker-inner ${isSelected ? 'selected' : ''}">☕</span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

// Recentre la carte en douceur sur le café sélectionné
function FlyToSelected({ cafe }) {
  const map = useMap();

  useEffect(() => {
    if (cafe) {
      map.flyTo([cafe.lat, cafe.lng], 14, { duration: 0.8 });
    }
  }, [cafe, map]);

  return null;
}

function CafeMap({ cafes, selectedId, onSelect }) {
  const selectedCafe = cafes.find((c) => c.id === selectedId) ?? null;

  return (
    <MapContainer
      center={BRUSSELS_CENTER}
      zoom={13}
      className="cafe-map"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <FlyToSelected cafe={selectedCafe} />
      {cafes.map((cafe) => (
        <Marker
          key={cafe.id}
          position={[cafe.lat, cafe.lng]}
          icon={cafeIcon(cafe.id === selectedId)}
          zIndexOffset={cafe.id === selectedId ? 1000 : 0}
          eventHandlers={{ click: () => onSelect(cafe.id) }}
        />
      ))}
    </MapContainer>
  );
}

export default CafeMap;