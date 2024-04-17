import { configureStore } from "@reduxjs/toolkit";

import {loginUserReducer,getUserReducer,getUserDataReducer, registerUserReducer} from "./reducers"


const store = configureStore({

  reducer:{
    loginUser : loginUserReducer,
    registerUser : registerUserReducer,
    getUser: getUserReducer,
    getUserData: getUserDataReducer,
   
    // store.js



  },

})

export default store