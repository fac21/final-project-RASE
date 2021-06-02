import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Image from "next/image";

export default function Map(props) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.places.length > 0
        ? props.places.map((place) => {
            return (
              <Marker key={place.location} position={[place.lat, place.long]}>
                <Popup>
                  {place.location}
                  {/* <Image
                    src="/me.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  /> */}
                </Popup>
              </Marker>
            );
          })
        : ""}
    </MapContainer>
  );
}
