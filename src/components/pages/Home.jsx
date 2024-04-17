
import React from 'react'
import '../pages/Home.scss';
import SearchBar from './SearchBar';
import image from '../../assets/n.jpg' 

  const Home = () => {

    
    return (
      <div className='homepage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Find Your Dream Home With Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe cupiditate fugiat autem repellendus corporis neque magnam dolore totam nobis
           adipisci quasi beatae, consequuntur omnis atque amet, dolor nisi quo earum.
        </p>
        <SearchBar/>
        <div className="boxes">
          <div className="box">
            <h1>10+</h1>
            <h2>Years Of Experience</h2>
          </div>
          <div className="box">
            <h1>150</h1>
            <h2>Awards Gained</h2>
          </div>
          <div className="box">
            <h1>1500+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
      </div>
      </div>
      <div className="imgContainer">
        <img src={image} alt="none" />
      </div>
      </div>                                                                                              
    )
  }
  
  export default Home
    

