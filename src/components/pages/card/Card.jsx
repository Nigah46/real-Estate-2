import React from 'react'
import { Link } from 'react-router-dom'
import '../card/card.scss'
import { PiMapPin, PiBathtubLight } from "react-icons/pi";
import { LuBookmark } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";

const Card = ({item}) => {
  return (
    <div className='card'>
    <Link to={`/${item.id}`}className='imageContainer'>
      <img src={item.img} alt="none" />
    </Link>
    <div className="textContainer">
      <h2 className='title'>
        <Link to={`/${item.id}`}>{item.title}</Link>
      </h2>
      < p className='address'>
     < PiMapPin/>
        <span>{item.address}</span>
      </p>
      <p className='price'>$ {item.price}</p>
      <div className="bottom">
        <div className="features">
          <div className="feature">
            <MdOutlineBedroomParent/>
            <span>{item.bedroom} bedroom</span>
          </div>
          <div className="feature">
            <PiBathtubLight  />
            <span>{item.bathroom} bathroom</span>
          </div>
        </div>
        <div className="icons">
          <div className="icon">
            <LuBookmark/>
          </div>
          <div className="icon">
            <IoChatboxEllipsesOutline/>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Card