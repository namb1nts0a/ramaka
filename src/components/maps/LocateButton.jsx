import React from 'react'
import { useMap } from 'react-leaflet'
import { FaCrosshairs } from 'react-icons/fa'
import "./locateButton.css"


const LocateButton = ({onLocate}) => {
  const map = useMap();

  const handleLocate = () => {
    map.locate({
        setView: true,
        maxZoom: 16,
    }).on('locationfound', (e) => {
      onLocate(e.latlng);
        map.flyTo(e.latlng, 16);
    }).on('locationerror', (e) => {
        console.error('Error finding location : ', e);
    });
  }

  return (
    <button className='locate-button' onClick={handleLocate}>
        <FaCrosshairs size={20} />
    </button>
  )
}

export default LocateButton