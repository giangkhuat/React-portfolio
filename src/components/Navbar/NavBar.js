import React, { Component } from "react";
import NavItem from "./NavItem";
import Social from "./Social"
import "./Nav.scss";

function NavBar() {
  /*

             
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Musings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Cooking
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Photography
                </a>
              </div>
            </li>

              /*
    <div className="icons">
                <a id="email" href="mailto:khuatgia@grinnell.edu" target="_blank" alt="Email">
                    <img src="pictures/email.png" alt="Email me" style="width: 50px; height: 50px;">
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/giangkhuat/" target="_blank">
                    <img src="pictures/linkedin-logo.png" alt="Giang's LinkedIn" style="width: 50px; height: 50px;">
                </a>
                <a id="github" href="https://github.com/giangkhuat" target="_blank" alt="Giang's Github">
                    <img src="pictures/github.png" style="width: 50px; height: 50px;">
                </a>
            </div>
  
    */
  return (
    <div>
      <nav
        id="mainNav"
        className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-lg "
      >
        <a className="navbar-brand" href="#">
          Shiny River
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem item="About" toLink="/"></NavItem>
            <NavItem item="Projects" toLink="/projects"></NavItem>
            <NavItem item="Cooking" toLink="/cooking"></NavItem>
            <NavItem item="Writing" toLink="/writing"></NavItem>
          </ul>
        </div>
        <Social/>
      </nav>
    </div>
  );
}

export default NavBar;
