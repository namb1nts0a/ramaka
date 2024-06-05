import React from 'react'


const PopopFast = ({fastFood}) => {

  const { amenity, address, cuisine} = fastFood.tags || {}

  return (
    <div className="popup-content">
      <h3>{fastFood.tags?.name || 'Unnamed Fast Food'}</h3>
      {amenity && <p><strong>Amenity: </strong>{amenity}</p>}
      {address && <p><strong>Address: </strong>{address}</p>}
      {cuisine && <p><strong>Contact: </strong>{cuisine}</p>}

      {/* <p><strong>Amenity : </strong> {fastFood.tags?.amenity} </p>
      <p><strong>Cuisine : </strong> {fastFood.tags?.cuisine} </p> */}
    </div>
  )
}

export default PopopFast