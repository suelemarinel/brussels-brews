import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordonnées du centre de Bruxelles (Grand-Place, à peu près ☕)
const BRUSSELS_CENTER = [50.8466, 4.3528];

// Marker custom : pastille ronde style café, en HTML/CSS pur
const cafeIcon = L.divIcon({
  className: 'cafe-marker',
  html: '<span class="cafe-marker-inner">☕</span>',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -20],
});

function CafeMap({ cafes, onSelect }) {
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
      {cafes.map((cafe) => (
        <Marker
          key={cafe.id}
          position={[cafe.lat, cafe.lng]}
          icon={cafeIcon}
          eventHandlers={{ click: () => onSelect(cafe.id) }}
        />
      ))}
    </MapContainer>
  );
}

export default CafeMap;