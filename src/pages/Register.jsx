import React from "react";
import Mybutton from "../UI/button/Mybutton";
import Myinput from "../UI/input/Myinput";
import { useNavigate } from "react-router-dom";
import cl from './Form.module.css'

const Register = () => {
  const navigate = useNavigate();

  const nav = () => {
    navigate("/login");
  };

  return (
    <div className={cl.frmDiv}>
      <form className={cl.frm}>
        <Myinput type="password" placeholder="Enter your Username"/>    
        <Myinput type="text" placeholder="Enter your email" /> 
        <Myinput type="password" placeholder="Enter your password"/>
        <Mybutton type="button" onClick={nav}>
          Create Account
        </Mybutton>
      </form>
    </div>
  );
};

export default Register;