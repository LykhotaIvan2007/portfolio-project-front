import React, { useState } from "react";
import photo from "../images/self_photo.jpg";
import cl from "../styles/Home.module.css";
import ModalLog from "../components/ModalLog";

const Home = (props) => {
  

  return (
    <div className={cl.container}>
      <div className={cl.hero}>
        <img src={photo} className={cl.photo} alt="Ivan Lykhota" />

        <div className={cl.info}>
          <h1>Ivan Lykhota</h1>
          <p className={cl.subtitle}>
            18 y.o • Ukrainian • Software Developer
          </p>

          <p className={cl.profile}>
            Disciplined and responsible high-school graduate interested in a career in programming.
            I enjoy creative and unconventional thinking, constantly looking for unique solutions.
            Mathematics and programming help me develop structured thinking and build meaningful projects.
          </p>
        </div>
      </div>

      <div className={cl.section}>
        <h2>Skills</h2>
        <div className={cl.skills}>
          <span>Web Development</span>
          <span>Mobile Development</span>
          <span>Creativity</span>
          <span>Multitasking</span>
          <span>Effective Communication</span>
          <span>Flexibility & Adaptability</span>
          <span>Critical Thinking</span>
        </div>
      </div>

      <div className={cl.section}>
        <h2>Languages</h2>
        <div className={cl.badges}>
          <span>English</span>
          <span>Ukrainian</span>
          <span>Russian</span>
        </div>
      </div>

      <div className={cl.section}>
        <h2>Education</h2>
        
          <p>High School Diploma, Technical lyceum of the Dnipro district of the city of Kyiv. Graduated: June 2025 </p>
          
          <p>Bachelor’s Degree in Information Technology, NHL Stenden  2025 – Present</p>
      </div>

      <div className={cl.section}>
        <h2>Hobbies</h2>
        <div className={cl.badges}>
          <span>Chess</span>
          <span>Basketball</span>
        </div>
      </div>

    </div>
  );
};

export default Home;