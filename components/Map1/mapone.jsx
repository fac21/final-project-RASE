import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function MyMap({ mapMarkers }) {
  const lat = 52.34026;
  const long = -1.585825;

  const latone = 51.53734;
  const longtwo = -0.058855;

  const access_token = process.env.MY_ACCESS_TOKEN;

  // console.log("map",mapMarkers)
  return (
    <MapContainer
      center={[lat, long]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFnaW5vbSIsImEiOiJja3BwY2JtcDUwNXhqMm9rOWt4dW9rZ3UwIn0.vXHyHkc829wAIuft63zUng`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {mapMarkers.map((marker) => {
        return (
          <Marker position={marker.coordinates} draggable={true} animate={true}>
            <Popup>{marker.location}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
export default MyMap;
