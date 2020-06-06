import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="/">
        <Link to={props.toLink}>{props.item}</Link>
      </a>
    </li>
  );
}

export default NavItem;
