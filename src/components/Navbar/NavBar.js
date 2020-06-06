import React, { Component } from "react";
import NavItem from "./NavItem";
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
      </nav>
    </div>
  );
}

export default NavBar;
