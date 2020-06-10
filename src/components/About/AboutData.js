import React from "react";
import profilepic from "./Giang.JPG";
import foodpic from "./food.JPG";
import birdpic from "./bird.JPG";

export const cardData = [
  {
    title: "About me",
    text: `
      I am from Hanoi, Vietnam. I am currently a rising senior majoring in Computer Science at
      Grinnell College, Iowa. In my free time, I like exercising, practicing violin and trying new food recipes
          from different countries. 
          When  I was five, my family migrated to the city for better job prospects. 
          Due to residence permit restriction, my parents struggled to get me access to education
          in the city. This experience has made me realize how access to educational opportunities could change one's life.
          In future, I would like to combine my interest in education, technology and social work to improve people's lives.  
      `,
    imgSrc: profilepic,
    id: "6",
  },
  {
    title: "Reading",
    text: `
      "I want a dyke for president. I want a person with AIDS for president and I want a 
      fag for vice president and I want someone with no health insurance and I want someone
       who grew up in a place where the earth is so saturated with toxic waste that they didn't have 
       a choice about getting leukemia. I want a president that had an abortion at sixteen and I want 
       a candidate who isn't the lesser of two evils and I want a president who lost their last lover to AIDS,
        who still sees that in their eyes every time they lay down to rest, who held their lover in their arms and knew they were dying....." ― Zoe Leonard"
      `,
    imgSrc: birdpic,
    id: "8",
  },
  {
    title: "Cooking",
    text: `
          To me, cooking takes a great amount of courage and commitment because I
          need to have courage to give myself a second chance to try again
          when I fail. I also do not
          often record the amount I put in, which is probably why I fail more
          than usual, but thanks to that I have had many more discoveries :D 
          I wholeheartedly believe that just because I do not have every necessary ingredients for a recipe, 
          it does not mean I can not make a good dish. I will not have everything I want in my life, but I will
          make the most out of it :) 
          P/S: I like to share the food I make with my friends so if you like eating, we have something in common ! 
      `,
    imgSrc: foodpic,
    id: "7",
  },
];

