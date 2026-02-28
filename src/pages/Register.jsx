import React from "react";
import Mybutton from "../UI/button/Mybutton";
import Myinput from "../UI/input/Myinput";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import cl from './Form.module.css'
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const send = async () => {
    try {
      const response = await fetch("https://portfolio-project-back-production.up.railway.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: nameText,
          email: emailText,
          password: passwordText
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
        return;
      }

      setErrorMessage("");
      navigate("/login");

    } catch (err) {
      console.log(err);
      setErrorMessage("Server error");
    }
  };


  return (
    <div className={cl.frmDiv}>
      <div className={cl.frm}>
        <Myinput value={nameText} onChange={(e)=>{setNameText(e.target.value)}} type="text" placeholder="Enter your Username"/>    
        <Myinput value={emailText} onChange={(e)=>{setEmailText(e.target.value)}} type="email" placeholder="Enter your email" /> 
        <Myinput value={passwordText} onChange={(e)=>{setPasswordText(e.target.value)}} type="password" placeholder="Enter your password"/>
        <Link to="/login" className={cl.registerLink}>Back</Link>
          <p>{errorMessage}</p>
        <Mybutton type="button" onClick={()=>send(nameText, emailText, passwordText)}>Create Account</Mybutton>
      </div>
    </div>
  );
};

export default Register;