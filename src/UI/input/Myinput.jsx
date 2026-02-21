import React from "react";
import cl from "./Myinput.module.css"

const Myinput = React.forwardRef((props, ref)=>{
    return(
        <input ref={ref} className={cl.inpt} {...props}/>
    );
});

export default Myinput;