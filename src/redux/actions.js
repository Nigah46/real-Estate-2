import axios from "axios"



export const loginUser=
 (formData)=> async (action)=>{

   
  
try {

 
     action({
      type:"loginRequest"
     })

     const {data} = await axios.post("/user/login",formData

     )

     action({
      type:"loginSuccess",
      message : data.message,
      token :data.token
      

     })
} catch (error)
{
    action({
      type:"loginFailure",
      message : error.message,
      
      
    })
    console.log(error)
}
 }

 export const registerUser= 
 (formData)=> async (action)=>{
  try {
    action({
      type: "registerRequest"
    })
    const {data} = await axios.post("/user/register",
    {
      formData
    })
    action ({
      type: "registerSuccess",
      payload: data.message
    })

 }
 catch (error)
 {
  action({
    type:"registerFailure",
    
  })
  console.log(error)
 }
}

