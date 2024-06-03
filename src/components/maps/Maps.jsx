/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { osm_data } from '../../utils/osm_provider'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import "./maps.css"

function Maps() {
  const [center, setCenter] = useState({lat: -21.454711198778288,lng:47.089718423995954})
  const ZOOM_LEVEL = 14;
  const mapRef = useRef();
  
  return (
    <div >
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
        >
          <Marker position={[-21.454711198778288, 47.089718423995954]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
          <TileLayer url={osm_data.maptiler.url} attribution={osm_data.maptiler.attribution} />
        </MapContainer>
    </div>
  )
}

export default Maps