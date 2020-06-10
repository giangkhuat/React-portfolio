import React from "react";
import { Container , Row, Col} from "react-bootstrap";
import Banner from "../Banner/Banner";
import food1 from "./foo1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";
import food5 from "./food5.jpg";
import food6 from "./food6.jpg";
import food7 from "./food7.jpg";
import food8 from "./food8.jpg";
import food9 from "./food9.jpg";
import food10 from "./food10.jpg";
import "./Cooking.scss";




function Cooking() {

  /*
  <Row>
        <Col md={12} lg={4}>
        {foodData.map(function (item) {
          return (
            <div className="foodPic">
              <img className="imgCook" src={item.imgSrc} />
              <p>{item.name}</p>
            </div>
          );
        })}
        </Col>
        <Col md={12} lg={4}> 
        {foodData.map(function (item) {
          return (
            <div className="foodPic">
              <img className="imgCook" src={item.imgSrc} />
              <p>{item.name}</p>
            </div>
          );
        })}
        </Col>
        <Col md={12} lg={4}>
        {foodData.map(function (item) {
          return (
            <div className="foodPic">
              <img className="imgCook" src={item.imgSrc} />
              <p>{item.name}</p>
            </div>
          );
        })}
        </Col>
        </Row>
  */
  const foodData = [
    {
      name: "Pork Cabbage Roll",
      imgSrc: food1,
    },
    {
      name: "Pancake with Grape sauce",
      imgSrc: food2,
    },
    {
      name: "Agedashi Tofu, Kimchi, and Chawanmushi",
      imgSrc: food3,
    },
    {
      name: "Okonomiyaki",
      imgSrc: food4,
    },
    {
      name: "Soup dumpling",
      imgSrc: food5,
    },
    {
      name: "Egg Noodle",
      imgSrc: food6,
    },
    {
      name: "Korean Bulgogi Wrap",
      imgSrc: food7,
    },
    {
      name: "Vietnamese Rice Cake",
      imgSrc: food8,
    },
    {
      name: "Congee",
      imgSrc: food9,
    },
    {
      name: "Vietnamese Rice Rolls",
      imgSrc: food10,
    },
  ];

  return (
    <div>
      <Banner
        id="cooking-banner"
        title="Welcome to my Foodie world"
        quote="Nothing brings people together like food does:)"
      ></Banner>
      <Container id="Cooking">
        {foodData.map(function (item) {
          return (
            <div className="foodPic">
              <img className="imgCook" src={item.imgSrc} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Cooking;
