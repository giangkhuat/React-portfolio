import React from "react";
import Banner from "../Banner/Banner";
import { projectData } from "./ProjectData";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./projectInfo.scss"

function ProjectInfo(props) {
        
  const cardData = projectData.find(function(project) {
            return project.id == props.match.params.id;
  });
  
  return (
    <div id="project-info">
      <Banner
        title={cardData.title}
        quote={cardData.intro}
        img ={cardData.imgSrc}
      ></Banner>
      <Container>
        <Row className="justify-content ">
          <div className="col-md-12 col-lg-9  d-flex align-items-stretch">
            <Card>
              <Card.Img
                className="blurb card-img-top"
                id="img-top"
                variant="top"
                src={cardData.imgSrc}
              />
            
            </Card>
          </div>
          <div className="col-md-12 col-lg-3  d-flex align-items-stretch">
              <Card.Body id="card-body">
                <Card.Text>
  <h3>{cardData.features[0]}</h3>
                    </Card.Text>
              </Card.Body>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectInfo;
