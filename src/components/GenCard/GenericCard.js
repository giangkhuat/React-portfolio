import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GenericCard.scss";

function GenericCard(props) {
  return (
    <div>
      <Card>
        <Card.Img
          className=" card-img-top"
          variant="top"
          src={props.imgSrc}
        />
        <Card.Body id="card-body">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          
        </Card.Body>
      </Card>
      <p></p>
    </div>
  );
}

export default GenericCard;
