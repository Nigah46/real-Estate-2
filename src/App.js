import React from 'react'
import {  RouterProvider } from 'react-router-dom'
// import Login from './components/pages/sharedComponents/Login';

import { createBrowserRouter } from "react-router-dom";
import Home from './components/pages/Home';
// import Register from './components/Register'
import ListPage from './components/pages/listPage';
import Layout from './components/pages/layout/layout';
import SinglePage from './components/pages/singlePage/SinglePage';
import ProfilePage from './components/pages/profilePage/profilePage';


const App = () => {
   const router = createBrowserRouter([
    {
      path: '/' , element: <Layout/>,
      children:[
        {
      path: '/' , element: 
        <Home/>
      
    },
        {
      path: '/list' , element: 
        <ListPage/>
      
    },
        {
      path: '/:id' , element: 
        <SinglePage/>
      
    },
        {
      path: '/profile' , element: 
        <ProfilePage/>
      
    }
      ] 
    },
    
  
   ])
  return (
<RouterProvider router={router}/>
)

}

export default App