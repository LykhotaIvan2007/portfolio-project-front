import React from "react";
import Mybutton from "../UI/button/Mybutton";
import { AutorizeContext } from "../context/Autorization";
import { useContext } from "react";
import cl from "../styles/Header.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({visibleLogout, visibleAdd, lg, ad}) => {
    const {isAutorized, setIsAutorized, currentUserName, setCurrentUsername} = useContext(AutorizeContext);
    
    const navigate = useNavigate();

    const setA = ()=>{
        if(!lg){
            visibleAdd(true)
        }
    }

    const setL = ()=>{
        if(!ad){
            visibleLogout(true)
        }
    }


    return (
    <div className={cl.headerDiv}>
        <Mybutton onClick={()=> {navigate('/projects')}}>Projects</Mybutton>
        <div className={cl.rightBlock}>
            {(currentUserName == "Ivan Lykhota") ? <Mybutton onClick={setA}>Add document</Mybutton> : null}
            <Mybutton onClick={()=>{navigate('/home')}}>Home</Mybutton>
            <Mybutton onClick={setL}>Log out</Mybutton>
        </div>
    </div>
  );
};

export default Header;