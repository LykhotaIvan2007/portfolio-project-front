import React from "react";
import Mybutton from "../UI/button/Mybutton";
import Myinput from "../UI/input/Myinput";
import { Link } from "react-router-dom";
import { AutorizeContext } from "../context/Autorization";
import { useContext, useState, useEffect } from "react";
import cl from './Form.module.css';


const Login = () => {
  const {isAutorized, setIsAutorized, setCurrentUsername} = useContext(AutorizeContext);
  const [texteEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [textError, setTextError] = useState("");

  const login = async() =>{
    try {
      const response = await fetch("https://portfolio-project-back-production.up.railway.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify( {
          email: texteEmail,
          password: textPassword
        })
      });

      const data = await response.json();
      if (!response.ok){
        setTextError(data.message);
        return;
      }
      
      if (data.success){
        setIsAutorized(true);
        setCurrentUsername(data.userName);
        localStorage.setItem('autoriz', 'true');
        localStorage.setItem('currentUserName', data.userName);
        
      }

    } catch (er) {
      console.log(er)
      setTextError("Server Error");
    }
  }
  
  return (
    <div className={cl.frmDiv}>
      <div className={cl.frm}>
        <Myinput value={texteEmail} onChange={(e)=>setTextEmail(e.target.value)} type="email" placeholder="Enter your email" /> 
        <Myinput value={textPassword} onChange={(e)=>setTextPassword(e.target.value)} type="password" placeholder="Enter your password"/>
        <Link to="/register" className={cl.registerLink}>Register</Link>
        <p>{textError}</p>
        <Mybutton type="button" onClick={login}>Log In</Mybutton>
      </div>
     
    </div>
  );
};

export default Login;