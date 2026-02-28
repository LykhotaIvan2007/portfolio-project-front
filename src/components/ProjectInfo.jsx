import React, { useEffect } from "react";
import cl from "../styles/ProjectInfo.module.css"
import { useContext } from "react";
import { useState } from "react";
import { AutorizeContext } from "../context/Autorization";

const ProjectInfo = ({ yearP, periodP }) => {
  const { currentUserName } = useContext(AutorizeContext);
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://portfolio-project-back-production.up.railway.app?user_name=${currentUserName}`
        );
        const data = await response.json();
        setRes(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (currentUserName) {
      fetchData();
    }
  }, [currentUserName]);

  const filteredFiles = res.filter(
    file => file.year == yearP && file.period == periodP
  );

  const groupedByCategory = filteredFiles.reduce((acc, file) => {
    if (!acc[file.category]) {
      acc[file.category] = [];
    }
    acc[file.category].push(file);
    return acc;
  }, {});

  return (
  <div className={cl.dv}>
    {Object.keys(groupedByCategory).length === 0 ? (
      <p className={cl.pFirst}>For now this is empty</p>
    ) : (
      Object.entries(groupedByCategory).map(([category, files]) => (
        <div key={category} className={cl.categoryBlock}>
          <h3 className={cl.categoryTitle}>{category}</h3>

          {files.map(file => (
            <div key={file.id} className={cl.fileCard}>
              <div className={cl.fileInfo}>
                <span className={cl.fileName}>{file.name}</span>
                <span className={cl.fileDescription}>
                  {file.description}
                </span>
              </div>

              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cl.downloadBtn}
              >
                Download
              </a>
            </div>
          ))}
        </div>
      ))
    )}
  </div>
);
}
export default ProjectInfo;