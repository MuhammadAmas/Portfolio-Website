import React, { useState } from "react";
import classes from './Hamburger.module.css';
import { Link } from "react-router-dom";


function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className={isMenuOpen ? (classes.hamburgerMenu + " " + classes.open) : classes.hamburgerMenu}>
        <div className={classes.mask} onClick={toggleMenu}></div>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div className={classes.bar}></div>
        </div>
        <div className={classes.menu}>
          <ul className={classes.hamburgerLinks}>
            <li>
              <Link to="/Projects" className={classes.hamburgerLink} onClick={toggleMenu}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/Research" className={classes.hamburgerLink} onClick={toggleMenu}>
                RESEARCH
              </Link>
            </li>
            <li>
              <Link to="/About" className={classes.hamburgerLink} onClick={toggleMenu}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/Contact" className={classes.hamburgerLink} onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
          {/* <div className={(classes.socials)}>
            <a href={"https://www.linkedin.com/in/talal-ahmed-a5479917b"}>
              <i class="fa-brands fa-linkedin-in fa-lg"></i>
            </a>
            <a href={"https://github.com/TalalAhmed311"}>
              <i class="fa-brands fa-github fa-lg"></i>
            </a>
            <a href={"https://medium.com/@talalahq311"}>
              <i class="fa-brands fa-medium fa-lg"></i>
            </a>
            <a href={"https://www.facebook.com/talal.qurashi.5"}>
              <i class="fa-brands fa-facebook-f fa-lg"></i>
            </a>
          </div> */}


        </div>

      </div>
    </>
  );
}

export default Hamburger;