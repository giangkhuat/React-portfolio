import React from "react";

function Writing() {
  return (
    <div>
      <Banner
        id="writing"
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

export default Writing;
