import React from "react";
import "./Banner.scss";


function Banner(props) {
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
    <div id="header" className="jumbotron text-center">
      <h1 className="display-3">{props.title}</h1>
      <p className="lead">{props.quote}</p>
      <div className="text-center"></div>
      <img id="header-img" src={props.imgSrc}></img>
    </div>
  );
}

export default Banner;
