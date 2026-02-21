import React, { useState } from "react";
import Mybutton from "../UI/button/Mybutton";
import cl from "../styles/ButtonsProject.module.css";

const ButtonsProject = ({callSetYearP, callSetPeriodP}) => {
  const [activeYear, setActiveYear] = useState(1);
  const [activePeriod, setActivePeriod] = useState(1);

  const setYear = (val)=>{
    setActiveYear(val);
    callSetYearP(val);
  }

  const setPeriod = (val)=>{
    setActivePeriod(val);
    callSetPeriodP(val);
  }


  return (
    <div className={cl.wrapper}>
      
      <div className={cl.group}>
        {[1,2,3,4].map((year) => (
          <Mybutton
            key={year}
            onClick={() => setYear(year)}
            className={`${cl.btn} ${activeYear === year ? cl.active : ""}`}
          >
            Year {year}
          </Mybutton>
        ))}
      </div>

      <div className={cl.group}>
        {[1,2,3,4].map((period) => (
          <Mybutton
            key={period}
            onClick={() => setPeriod(period)}
            className={`${cl.btn} ${activePeriod === period ? cl.active : ""}`}
          >
            Period {period}
          </Mybutton>
        ))}
      </div>

    </div>
  );
};

export default ButtonsProject;