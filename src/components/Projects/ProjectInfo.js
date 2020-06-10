import React from "react";
import Banner from "../Banner/Banner";
import { projectData } from "./ProjectData";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./projectInfo.scss"
import camp from "./camp.jpg"
function ProjectInfo(props) {
        
  const cardData = projectData.find(function(project) {
            return project.id == props.match.params.id;
  });
  return (
    <div id="project-info">
      <Banner style={{height: '65vh', color: 'black', font: 'bold'}}
        title={cardData.title}
        quote={cardData.intro}
        img ={cardData.imgSrc}
      ></Banner>
      <Container>
        <Row className="justify-content-center ">
          <Col lg={6} md={12} sm={12}  xs={12} className="project-text">
              <h2> {cardData.features.first}</h2>
          </Col>
          <Col lg={6} md={12} sm={12}  xs={12} className="img-fluid">
              <img id="image-present" src={cardData.features.firstPic}></img>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col lg={6}  md={12} sm={12}  xs={12} className="img-fluid">
              <img id="image-present" src={cardData.features.secondPic}></img>
          </Col>
          <Col lg={6}  md={12} sm={12}  xs={12} className="project-text">
              <h2>{cardData.features.second} </h2>
          </Col>      
        </Row>
        <Row className="justify-content-center ">
          <Col lg={6}  md={12} sm={12}  xs={12} className="project-text">
              <h2> {cardData.features.third}</h2>
          </Col>
          <Col lg={6}  md={12}  sm={12}  xs={12} className="img-fluid">
              <img id="image-present" src={cardData.features.thirdPic}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectInfo;
