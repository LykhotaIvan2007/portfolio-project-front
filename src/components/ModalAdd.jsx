import React from "react";
import cl from "../styles/ModalAdd.module.css"
import Mybutton from "../UI/button/Mybutton";
import { AutorizeContext } from "../context/Autorization";
import { useContext } from "react";
import Myinput from "../UI/input/Myinput";

const ModalAdd = ({visibleAdd, setVisibleAdd}) => {
    const rootClasses = [cl.MyModal]
    if(visibleAdd) {
        rootClasses.push(cl.active)
    }
  return (
    <div className={rootClasses.join(' ')}>
        <div className={cl.myModalContent}>
            <form>
                <Myinput type="file" placeholder="choose a file" /> 
                <Myinput type="text" placeholder="add name"/>
                <Myinput type="text" placeholder="add description"/>
                <Myinput type="text" placeholder="add year"/>
                <Myinput type="text" placeholder="add period"/>
                <Myinput type="text" placeholder="set who is not alloud to see"/>
                <Mybutton type="submit" onClick={()=>setVisibleAdd(false)}>Cancel</Mybutton>
                <Mybutton type="submit" onClick={()=>setVisibleAdd(false)}>Add</Mybutton>
            </form>
        </div>
    </div>
    
  );
};

export default ModalAdd;