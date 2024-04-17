import { createReducer } from "@reduxjs/toolkit";





export const loginUserReducer = createReducer({},(builder)=>{
  builder
  .addCase("loginRequest", (state)=>{
    state.loading = true;
  })
  .addCase("loginSuccess", (state, action)=>{
    state.loading= false;
    state.message = action.message;
    state.token = action.token;

  })
  .addCase("loginFailure", (state, action)=>{
    state.loading= false;
    state.message = action.message;
  })

})
export const registerUserReducer = createReducer({},(builder)=>{
  builder
  .addCase("registerRequest", (state)=>{
   state.loading= true;
  })
  .addCase("registerSuccess", (state, action)=>{
    state.loading = false;
    state.message = action.payload;


  })
  .addCase("registerFailure", (state, action)=>{
    state.loading = false;
    state.message = action.payload;
  })
})


export const getUserReducer =createReducer({},(builder)=>{

})
export const getUserDataReducer =createReducer({},(builder)=>{

  
})

