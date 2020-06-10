import React from "react";
import "./Banner.scss";


function Banner(props) {
  return (
   
    <div id="header" style={props.style} className="jumbotron text-center">
      
      <div className="header-info"> 
      <h1 className="display-3">
        <a href={props.link} id="banner-link">
        {props.title}
        </a>
        </h1>
      <p className="lead">{props.quote}</p>
      <div className="text-center"></div>
      </div>
      <img id="header-img" src={props.img}></img>
    </div>
  );
}

export default Banner;
