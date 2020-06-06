import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function GenericCard(props) {
  return (
    <div>
      <Card>
        <Card.Img
          className="blurb card-img-top"
          id="project-card"
          variant="top"
          src={props.imgSrc}
        />
        <Card.Body id="card-body">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Link to={`/projects/${props.id}`}>
            <Button variant="primary">Explore</Button>
          </Link>
        </Card.Body>
      </Card>
      <p></p>
    </div>
  );
}

export default GenericCard;
