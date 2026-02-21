import React from "react";
import cl from "../styles/ProjectInfo.module.css"

const ProjectInfo = ({yearP, periodP}) => {
  return (
    <div className={cl.dv}>
        <p> Info about year: {yearP} period: {periodP}</p>
    </div>
  );
};

export default ProjectInfo;