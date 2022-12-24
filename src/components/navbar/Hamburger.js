import React, { useState } from "react";
import classes from './Hamburger.module.css';

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className={isMenuOpen  ? classes.hamburgerMenu + classes.open : classes.hamburgerMenu}>
        <div className={classes.mask} onClick={toggleMenu}></div>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div className={classes.bar}></div>
        </div>
        <div className={classes.menu}>
          <ul className={classes.hamburgerLinks}>
            <li>
              <a href="#home" className={classes.hamburgerLink} onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#portfolio" className={classes.hamburgerLink} onClick={toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#about" className={classes.hamburgerLink} onClick={toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact" className={classes.hamburgerLink} onClick={toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hamburger;