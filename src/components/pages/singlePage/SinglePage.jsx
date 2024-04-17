import React from 'react';
import '../singlePage/singlePage.scss';
import Slider from '../slider/Slider';
import {singlePostData, userData} from '../lib/dummydata';
import { HiOutlineLocationMarker } from "react-icons/hi";
 import Map from '../map/Map';
 import { RiMessage2Line } from "react-icons/ri";
 import { CiBookmark } from "react-icons/ci";
 import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
 import { PiPawPrintLight,PiBathtubLight } from "react-icons/pi";
 import { GiTakeMyMoney,GiBusStop  } from "react-icons/gi";
 import { TbArrowsRandom } from "react-icons/tb";
 import { IoBedOutline,IoRestaurantOutline  } from "react-icons/io5";
 import { FaSchoolFlag } from "react-icons/fa6";


const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images= {singlePostData.img} />
          <div className="info">
          <div className="top">
            <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
              <HiOutlineLocationMarker />
                <span>{singlePostData.address}</span>
              </div>
              <div className="price">$ {singlePostData.price}</div>
            </div>
            <div className="user">
              <img src={userData.img} alt="none" />
              <span>{userData.name}</span>
            </div>
          </div>
          <div className="bottom">
            {singlePostData.description}
          </div>
        </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
            <div className="feature">
              <HiOutlineWrenchScrewdriver width={30} height={30}/>
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <PiPawPrintLight/>
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <GiTakeMyMoney />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className='title'>Sizes</p>
          <div className="sizes">
            <div className="size">
              <TbArrowsRandom />
              <span>80sqft</span>
            </div>
            <div className="size">
              <IoBedOutline/>
              <span>2 beds</span>
            </div>
            <div className="size">
              <PiBathtubLight />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <FaSchoolFlag />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <GiBusStop />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <IoRestaurantOutline />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>            

          </div>
          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
            <RiMessage2Line/>
            Send a Message
            </button>
            <button>
              <CiBookmark/>
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage