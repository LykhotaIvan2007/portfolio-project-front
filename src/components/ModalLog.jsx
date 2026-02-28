import React from "react";
import cl from "../styles/ModalLog.module.css"
import Mybutton from "../UI/button/Mybutton";
import { AutorizeContext } from "../context/Autorization";
import { useContext } from "react";

const ModalLog = ({visibleLog, setVisibleLog}) => {
    const {setIsAutorized, setCurrentUsername} = useContext(AutorizeContext);
    const rootClasses = [cl.MyModal]
    if(visibleLog) {
        rootClasses.push(cl.active)
    }
    const logout = event => {
        setVisibleLog(false);
        event.preventDefault();
        setIsAutorized(false);
        localStorage.removeItem('autoriz');
        localStorage.removeItem('currentUserName');
        setCurrentUsername('')
    }
  return (
    <div className={rootClasses.join(' ')}>
        <div className={cl.myModalContent}>
            <h2>Are you sure that you want to log out ?</h2>
            <div className={cl.btnDiv}>
                <Mybutton onClick={()=>setVisibleLog(false)}>Cancel</Mybutton>
                <div className={cl.btnRight}><Mybutton  onClick={logout}>log out</Mybutton></div>
            </div>
        </div>
    </div>
  );
};

export default ModalLog;