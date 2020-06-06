import React from "react";
import GenericCard from "../GenericCard";
import profilepic from "./Giang.JPG";
import foodpic from "./food.JPG";
import birdpic from "./bird.JPG";

export const cardData = [
  {
    title: "About me",
    text: `
      I am from Hanoi, Vietnam. I like to spend time with my dog, my family, my
          my friends and family. In my free time, I like practicing violin and trying new food recipes.
          from different countries. When I was small people usually ask me what I want to do when I grow up
         . I think those people are annoying. Duh I was a teenager.
      `,
    imgSrc: { profilepic },
    id: "6",
  },
  {
    title: "Cooking",
    text: `
      I did not actually start cooking until I came to the US when I was
          17. To me, cooking takes great amount of courage and commitment bcause I
          need to have courage to give myself a second chance to try again
          when I fail. I also do not
          often record the amount I put in, which is probably I fail more
          than usual, but thanks to that I have had many more discoveries :D
      `,
    imgSrc: { foodpic },
    id: "7",
  },
  {
    title: "Reading",
    text: `
      "I want a dyke for president. I want a person with AIDS for president and I want a fag for vice president and I want someone with no health insurance and I want someone who grew up in a place where the earth is so saturated with toxic waste that they didn't have a choice about getting leukemia. I want a president that had an abortion at sixteen and I want a candidate who isn't the lesser of two evils and I want a president who lost their last lover to AIDS, who still sees that in their eyes every time they lay down to rest, who held their lover in their arms and knew they were dying. I want a president with no air-conditioning, a president who has stood in line at the clinic, at the DMV, at the welfare office, and has been unemployed and laid off and sexually harassed and gaybashed and deported...." ― Zoe Leonard"
      `,
    imgSrc: { birdpic },
    id: "8",
  },
];

/*
imgSrc, title, text, id
*/
