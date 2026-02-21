import React from "react";
import cl from "../styles/Footer.module.css"
import instLogo from "../images/insta_logo.jpeg"
import gitLogo from "../images/git_logo.png"
import tiktokLogo from "../images/tiktok_logo.png"
import mailLogo from "../images/mail_logo.png"
import phoneLogo from "../images/phone_logo.png"

const Footer = () => {
  return (
    <footer className={cl.footer}>
  <div className={cl.wrapper}>
    
    <div className={cl.top}>
      <h3 className={cl.title}>Contact & Social</h3>

      <div className={cl.links}>
        <a 
          href="https://github.com/LykhotaIvan2007"
          target="_blank"
          rel="noopener noreferrer"
          className={cl.item}
        >
          <img src={gitLogo} alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a 
            href="mailto:ivan.lykhota@student.nhlstenden.com" 
            className={cl.item}
            >
            <img src={mailLogo} alt="Mail" />
            <span>ivan.lykhota@student.nhlstenden.com</span>
        </a>

        <div className={cl.item}>
          <img src={phoneLogo} alt="Phone" />
          <span>0627657105</span>
        </div>
        <a 
          href="https://instagram.com/the_emperrorr_"
          target="_blank"
          rel="noopener noreferrer"
          className={cl.item}
        >
          <img src={instLogo} alt="Instagram" />
          <span>Instagram</span>
        </a>

        <a 
          href="https://tiktok.com/@sisyalimit"
          target="_blank"
          rel="noopener noreferrer"
          className={cl.item}
        >
          <img src={tiktokLogo} alt="TikTok" />
          <span>TikTok</span>
        </a>

        
      </div>
    </div>

    <div className={cl.bottom}>
      © {new Date().getFullYear()} All rights reserved.
    </div>

  </div>
</footer>
  );
};

export default Footer;