import React from "react";
import Banner from "../Banner/Banner";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import camp from "./camp.jpg";
import food from "./food.jpg";
import work from "./work.jpg";
import "./Projects.scss";

function Projects() {
  /*
              <GenericCard
              title={cardData[0].title}
              imgSrc={cardData[0].imgSrc}
              text={cardData[0].text}
              id={cardData[0].id}
            ></GenericCard>
  */

  const projectsData = [
    {
      title: "YelpCamp",
      text: `
A Express application allowing campers to share and review campgrounds
      `,
      imgSrc: camp,
      id: "6",
    },
    {
      title: "Cooking Easy",
      text: `
A Android Application delivering meal kit boxes
      `,
      imgSrc: food,
      id: "7",
    },
    {
      title: "Feedback Collector",
      text: `
A React application collecting feedback for companies
      `,
      imgSrc: work,
      id: "8",
    },
  ];
  return (
  
    <div id="Projects">
      <Banner title="Projects" quote="Nice to meet you !"></Banner>
      <Container>
        <Row className="justify-content ">
          {projectsData.map(function (card) {
            return (
              <div className="col-md-12 col-lg-4 mt-3 d-flex align-items-stretch">
                <Card className="project-card">
                  <Card.Img
                    className="blurb card-img-top"
                    id="card-img"
                    variant="top"
                    src={card.imgSrc}
                  />
                  <Card.Body id="card-body">
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Link to={`/projects/${card.id}`}>
                      <Button variant="primary">Explore</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
