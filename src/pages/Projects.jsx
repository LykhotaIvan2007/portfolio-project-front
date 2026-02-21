import React, { useState } from "react";
import ButtonsProject from "../components/ButtonsProject";
import ProjectInfo from "../components/ProjectInfo";

const Projects = (props) => {
  const [yearP, setYearP] = useState(1);
  const [periodP, setPeriodP] = useState(1);

  const callSetYearP = (val)=>{
    setYearP(val);
  }

  const callSetPeriodP = (val)=>{
    setPeriodP(val)
  }

  return (
    <div>
      <ButtonsProject callSetYearP={callSetYearP} callSetPeriodP={callSetPeriodP}></ButtonsProject>
      <ProjectInfo yearP={yearP} periodP={periodP}></ProjectInfo>
    </div>

    
  );
};

export default Projects;