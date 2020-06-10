import React from "react";
import Banner from "../Banner/Banner";
import { projectData } from "./ProjectData";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./projectInfo.scss"


function ProjectInfo(props) {
        
  const project = projectData.find(function(project) {
            return project.id == props.match.params.id;
  });
  return (
    <div id="project-info">
      <Banner style={{height: '65vh', color: 'black', font: 'bold'}}
        title={project.title}
        quote={project.intro}
        img ={project.imgSrc}
        link={project.gitLink}
      ></Banner>
      <Container>
        <Row className="justify-content-center ">
          <Col lg={6} md={12} sm={12}  xs={12} className="project-text">
              <h2> {project.features.first}</h2>
          </Col>
          <Col lg={6} md={12} sm={12}  xs={12} className="img-fluid">
              <img id="image-present" src={project.features.firstPic}></img>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col lg={6}  md={12} sm={12}  xs={12} className="img-fluid">
              <img id="image-present" src={project.features.secondPic}></img>
          </Col>
          <Col lg={6}  md={12} sm={12}  xs={12} className="project-text">
              <h2>{project.features.second} </h2>
          </Col>      
        </Row>
        <Row className="justify-content-center ">
          <Col lg={6}  md={12} sm={12}  xs={12} className="project-text">
              <h2> {project.features.third}</h2>
          </Col>
          <Col lg={6}  md={12}  sm={12}  xs={12} className="img-fluid">
              <img id="image-present" src={project.features.thirdPic}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectInfo;
