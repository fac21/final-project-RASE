import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function MyMap() {
  const lat = 52.34026;
  const long = -1.585825;

  const latone = 51.53734;
  const longtwo = -0.058855;

  const access_token = process.env.MY_ACCESS_TOKEN;

  console.log(access_token)
  return (
    <MapContainer
      center={[lat, long]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFnaW5vbSIsImEiOiJja3BwY2JtcDUwNXhqMm9rOWt4dW9rZ3UwIn0.vXHyHkc829wAIuft63zUng`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker position={[lat, long]} draggable={true} animate={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
      <Marker position={[latone, longtwo]} draggable={true} animate={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
}
export default MyMap;