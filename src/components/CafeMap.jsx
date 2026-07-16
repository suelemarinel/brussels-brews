import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Coordonnées du centre de Bruxelles (Grand-Place, à peu près ☕)
const BRUSSELS_CENTER = [50.8466, 4.3528];

function CafeMap() {
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
    </MapContainer>
  );
}

export default CafeMap;