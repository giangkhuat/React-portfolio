import React from "react";
import Banner from "../Banner/Banner";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { cardData } from "./AboutData";
import GenericCard from "../GenCard/GenericCard";
import "./About.scss";

function About() {
  return (
    <div id="About">
      <Banner title="Giang Khuat Minh" quote="Nice to meet you !"></Banner>
      <Container>
        <Row className="justify-content ">
          <div className="col-md-12 col-lg-4 mt-3 d-flex align-items-stretch">
            <GenericCard
              title={cardData[0].title}
              imgSrc={cardData[0].imgSrc}
              text={cardData[0].text}
              id={cardData[0].id}
            ></GenericCard>
          </div>
          <div className="col-md-12 col-lg-4 mt-3 d-flex align-items-stretch">
            <GenericCard
              title={cardData[1].title}
              imgSrc={cardData[1].imgSrc}
              text={cardData[1].text}
              id={cardData[1].id}
            ></GenericCard>
          </div>
          <div className="col-md-12 col-lg-4 mt-3 d-flex align-items-stretch">
            <GenericCard
              title={cardData[2].title}
              imgSrc={cardData[2].imgSrc}
              text={cardData[2].text}
              id={cardData[2].id}
            ></GenericCard>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;
