import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup, Polygon, Circle} from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl:require('leaflet/dist/images/marker-shadow.png')
});

const location= [	22.719568, 75.857727];
const zoom= 12;

const gnrPolygon=[
  [
    [23.260612, 72.629068],
    [23.275335, 72.674505],
    [23.244282, 72.682421],
    [23.186127, 72.655477],
    [23.165617, 72.637748],
    [23.193023, 72.602967],
  ]
];

const bhpCircle=[23.25469, 77.40289];

function App() {
  return (
    <div className="App">
     <Map center={[0, 0]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"></TileLayer>
      <Marker position={location}>
      <Popup>
        Hey Stalker!
      </Popup>
      </Marker>
      <Polygon positions={gnrPolygon}>
      <Popup>
        Where I currently study!
      </Popup>
      </Polygon>
      <Circle color="yellow" opacity= {1} fillOpacity={0.7} fillColor="purple" dashArray = {30} center={bhpCircle} radius={10000}>
      <Popup>
        Second home!
      </Popup>
      </Circle>
     </Map>
    </div> 
  );
}

export default App;
