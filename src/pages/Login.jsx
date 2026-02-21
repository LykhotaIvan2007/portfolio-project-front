import React from "react";
import Mybutton from "../UI/button/Mybutton";
import Myinput from "../UI/input/Myinput";
import { Link } from "react-router-dom";
import { AutorizeContext } from "../context/Autorization";
import { useContext } from "react";
import cl from './Form.module.css'

const Login = () => {
  const {isAutorized, setIsAutorized} = useContext(AutorizeContext);

  const login = event => {
        event.preventDefault();
        setIsAutorized(true);
        localStorage.setItem('autoriz', 'true');
    }
  return (
    <div className={cl.frmDiv}>
      <form className={cl.frm}>
        <Myinput type="text" placeholder="Enter your email" /> 
        <Myinput type="password" placeholder="Enter your password"/>
        <Link to="/register" className={cl.registerLink}>Register</Link>
        <Mybutton type="submit" onClick={login}>Log In</Mybutton>
      </form>
    </div>
  );
};

export default Login;