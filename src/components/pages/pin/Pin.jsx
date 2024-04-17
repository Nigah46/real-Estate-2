import { Marker, Popup } from 'react-leaflet'
import React from 'react'
import { Link } from 'react-router-dom'
import '../pin/pin.scss'

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude , item.longitude]}>
      <Popup>
        <div className="popupContainer">
            <img src={item.img} alt="none" />
            <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span>{item.bedroom} bedroom</span>
                <b>$ {item.price}</b>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin