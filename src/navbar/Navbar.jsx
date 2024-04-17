import React from 'react'
import '../navbar/Navbar.scss'
import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  // const [open , setOpen]= useState(false)

  const user = true;
  return (
    <nav>
    <div className='left'>
      <a href='/' className='logo'>
    <span>
      RealEstate
    </span>
    </a>
    <a href='/list'>Home</a>
    <a href='/'>About</a>
    <a href='/'>Contact</a>
    <a href='/'>Agents</a>
   </div> 
    <div className='right'>
      {user ? (<div className='user'>
        <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John doe</span>
        <Link to='/profile' className='profile'>
          <div className="notification">3</div>
          <span>Profile</span>
        </Link>

      </div>):
       (<><a href='/'>Sign In</a>
    <a href='/' 
    className='register'>Sign Up</a></>)}
   
    <div className='menuIcon'>
      {/* <GiHamburgerMenu onClick={()=>setOpen((prev)=> !prev)}/>  */}
    </div>
    {/* <div className={open ? "menu active" : "menu"}>
    <a href='/'>Home</a>
    <a href='/'>About</a>
    <a href='/'>Contact</a>
    <a href='/'>Agents</a>
    <a href='/'>Sign In</a>
    <a href='/'>Sign Up</a>

    </div> */}
    </div>
    </nav>
  )
}

export default Navbar