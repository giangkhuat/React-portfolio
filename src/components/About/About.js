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
          {cardData.map(function (item) {
            return (
              <div className="col-md-12 col-lg-4 mt-3 d-flex align-items-stretch">
                <GenericCard
                  title={item.title}
                  imgSrc={item.imgSrc}
                  text={item.text}
                  id={item.id}
                ></GenericCard>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default About;
