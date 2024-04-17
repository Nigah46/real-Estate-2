import React, { useState } from "react";
import "./pages/styles/Register.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  
  const message = useSelector((state)=>state.registerUser.message)
  const loading = useSelector((state)=>state.registerUser.loading)
  
const dispatch = useDispatch()
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [image, setImage] = useState(null);
const [password, setPassword] = useState("");

const handleImage = (e) => {
    const file = e.target.files[0]; // selected files in the array of files
    const Reader = new FileReader(); //  creating instance of fileReader   // inheritance
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const formData = new FormData(); // creating instance of formData // inheritance
  formData.append("email", email);
  formData.append("password", password);
  formData.append("username", username);
  formData.append("image", image);


  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    if(message === "user created" ){
        toast.success("Item Saved Sucessfully")
      } else{
        toast.error(message);
      }
      navigate ('/login');
  }
  return (
    <div className="register-light">
      <div className="container">
        <h1> Register</h1>

        <form className="form">

          <label>
            Email
            <input className="input"
              type="email"
              name="email" //key
              placeholder="Enter your email here "
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            />
          </label>
          <br />

          <label>Profile pic </label>
          <input className="input"
            type="file"
            placeholder="Upload Pic "
            name="image"
            accept="image/*"
            onChange={handleImage}
          />

          <label>
            PassWord
            <input className="input"
              type="password"
              name="password" //key
              placeholder="Enter your Pass here "
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);        
              }}

              
            />
          </label>

          <label>
            Username
            <input className="input"
             type="text" 
            name="username" 
            placeholder="Enter your username"
             value={username}
             onChange={(e)=>{
                setUsername(e.target.value);
             }}
             />
          </label>
         
          <button className="btn" onClick={handleRegister}disabled={loading}> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Register;