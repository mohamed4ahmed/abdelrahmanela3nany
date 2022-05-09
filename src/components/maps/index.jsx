import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconEman } from "./IconMarker";
import logoImg from "../../assets/img/chan-dung-edit.png";
const Map = () => {
  const position = [30.973947, 31.181758];
  const zoom = 5;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconEman}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">Abdelrahman El3anany</div>
              <div className="info__address">
                Address: Elmahala-Elkoubra city, Gharbia, Egypt
              </div>
            </div>
          </Popup>
          <Tooltip>Abdelrahman El3anany</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
