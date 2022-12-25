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
      <div className={isMenuOpen ? (classes.hamburgerMenu, classes.open) : classes.hamburgerMenu}>
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
        </div>
      </div>
    </>
  );
}

export default Hamburger;