
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/actions'; // Assuming loginUser is an action creator
import { toast } from 'react-toastify';
import Loader from './Loader';
// import '../../styles/Login.scss'

const Login = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loginUser.loading);
    const message = useSelector(state => state.loginUser.message);
    const token = useSelector(state => state.loginUser.token);
    const navigate = useNavigate();



    const [showPass, setShowPass] = useState(false);

   

    const [formData , setFormData] = useState({

        username : "",
        password : "",
    })
    
 

  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevInput) => ({ ...prevInput, [name]: value }));
      };

    
 
            
    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
       
   

   
    
        if (message === "Logged In") {
            toast.success("Login Success");
            localStorage.setItem("token" , token)
            navigate('/home');
        } else {
            toast.error(message);
        }

    };
    return (
        <div className="login">
            <div className="container">
                <div className="card__title">
                    <h1> Login </h1>
                </div>
                {loading ? (
                    <Loader/>
                ) : (
                    <form>
                        <div className="card__row">
                            <div className="card__label">
                                <label>Username</label>
                                <div className="card__input">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter your Username here"
                                        value={formData.username}
                                        onChange={handleChange}

                                        
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card__label">
                            <label>Password</label>
                            <div className="card__input">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your Password here"
                                    value={formData.password} 
                                    onChange= {handleChange}
                                />
                            </div>
                        </div>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                )}
                <button onClick={() => setShowPass(!showPass)}>Show/Hide Password</button>
            </div>
        </div>
    );
};

export default Login;


















































// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
// import loginUser from '../redux/store'
// import { toast } from 'react-toastify';
// import Loader from '../sharedComponents/Loader';
// // import '../../styles/Login.scss'
// const Login = () => {
//     const dispatch = useDispatch();
//     const loading = useSelector((state)=> state.loginUser.loading)
//     const message = useSelector((state)=> state.loginUser.message)


//     const navigate = useNavigate();
//     const [showPass, setShowPass]=useState(false);
    

//     const [formData, setFormData]=useState({
//         username:"", 
//         password:"",
//     })

//     const handleChange =(e)=>{
//         const {name, value} = e.target;
//         setFormData((prevInput=>({...prevInput,[name]:value})));

//     }
    
//     const handleLogin=async(e)=>{
//         e.preventDefault();
//       dispatch(loginUser(formData))
//       if (message=== "Logged In"){
//       toast.success("Login Success")}
//       else{
//         toast.error(message);
//       }
//       navigate('./home')
//     }

//   return (
//      <div className="login">
//       <div className="container">
//         <div className='card__title'>
//         <h1> Login </h1>
//         </div>
//         {loading ? <Loader/> :<form><div className='.card__row'>
//           <div className='card__label'><label>
//             Username
//            <div className='card__input'> <input
//               type="text"
//               name="username" //key
//               placeholder="Enter your Username here "
//               value={formData.username}
//               onChange={handleChange}
//             /></div>
//           </label>
//           </div>
// </div>
//           <br />

        
//           <div className='card__label'>
//           <label>
//             PassWord
//             <div className='card__input'> <input
//               type={showPass ? "text" : "password"}
//               name="password" //key
//               placeholder="Enter your Pass here "
//               value={formData.password}
//               onChange={handleChange}
//             /></div>
//           </label>
//           </div>
     
           
        
//           <button onClick={handleLogin}> Login </button>
//         </form>}
        

//         <button onClick={()=>{setShowPass(!showPass)}}>show</button>
//       </div>
//     </div>
//   );
// };

   



// export default Login