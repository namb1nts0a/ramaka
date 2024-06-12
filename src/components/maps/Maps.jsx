/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { osm_data } from '../../utils/osm_provider'
import { getFastFood } from '../../services/api'
import PopopFast from './PopupFast'
import L from 'leaflet'
import fastFoodIconImage from '../../assets/loca.png'
import meLocate from '../../assets/me.png'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import "./maps.css"
import LocateButton from './LocateButton'

const fastFoodIcon = new L.Icon({
  iconUrl : fastFoodIconImage,
  iconSize: [20, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

const meLoc = new L.Icon({
  iconUrl : meLocate,
  iconSize: [30, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

function Maps() {
  const [center, setCenter] = useState({lat: -21.454711198778288,lng:47.089718423995954})
  const [fastFoods, setFastFoods] = useState([])
  const [userPosition, setUserPosition] = useState(null)
  const ZOOM_LEVEL = 14;
  const mapRef = useRef();

  useEffect(() => {
    getFastFood()
      .then(response => {
        setFastFoods(response.data.elements);
      })
      .catch(error => {
        console.error("Error fetching fast food: ", error);
      });
  }, []);

  const handleMarkerClick = (lat, lon) => {
    if (mapRef.current){
      mapRef.current.flyTo([lat, lon], 18)
    }
  }
  
  return (
    <div >
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
        >
          <TileLayer url={osm_data.maptiler.url} attribution={osm_data.maptiler.attribution} />
          {fastFoods.map(fastFood => (
            fastFood.lat && fastFood.lon && (
              <Marker 
                key={fastFood.id} 
                position={[fastFood.lat, fastFood.lon]} 
                icon={fastFoodIcon}
                eventHandlers={{
                  click: () => handleMarkerClick(fastFood.lat, fastFood.lon)
                }}>
                <Popup>
                  {/* {fastFood.tags?.name || 'Unnamed Fast Food'} - {fastFood.tags?.amenity} */}
                  <PopopFast fastFood={fastFood} />
                </Popup>
              </Marker>
            )
          ))}
          {userPosition && (
            <Marker position={userPosition} icon={meLoc}>
              <Popup>You are here</Popup>
            </Marker>
          )}
          <LocateButton onLocate={setUserPosition} />
        </MapContainer>
        
    </div>
  )
}

export default Maps