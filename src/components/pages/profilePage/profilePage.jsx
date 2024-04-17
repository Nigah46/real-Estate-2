import React from 'react'
import List from '../list/List'
import '../profilePage/profilePage.scss';
import Chat from '../chat/Chat';

const ProfilePage = () => {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </span>
            <span>Username: <b>John Doe</b></span>
            <span>E-mail: <b>John@gmail.com</b></span>
          </div>
          <div className="title">
            <h1>MyList</h1>
            <button>Create New Post</button>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage