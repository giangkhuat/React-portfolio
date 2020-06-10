import React ,  {Component} from "react";
import "./Nav.scss";

function Social() {
    return (
    <div className="icons">
                <a id="email" href="mailto:khuatgia@grinnell.edu" target="_blank" alt="Email">
                    <i className="fa fa-envelope-square"></i>
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/giangkhuat/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a id="github" href="https://github.com/giangkhuat" target="_blank" alt="Giang's Github">
                    <i className="fa fa-github"></i>
                </a>
        </div>
    );
}

export default Social;