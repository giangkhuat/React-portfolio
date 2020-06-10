import yelpcamp from "./campingBanner.jpeg"
import yelpcamp1 from "./yelpcamp/yelpcamp1.png"
import yelpcamp2 from "./yelpcamp/yelpcamp2.png"
import yelpcamp3 from "./yelpcamp/yelpcamp3.png"
import cookingBanner from "./cookingBanner.jpeg";
import cook2 from "./cookingEasy/collaged-choose.png";
import cook1 from "./cookingEasy/collaged-login (1).png";
import cook3 from "./cookingEasy/collaged-checkout.png";
import work from "./workBanner.jpeg";

export const projectData = [
    {
        title: "YelpCamp",
        intro: `
          Review and share your camprgounds for free !
          `,
        features: {
          first:"Create accounts",
          firstPic: yelpcamp1,
          second:"Share and review your campsites",
          secondPic: yelpcamp2,
          third:"Search your favorite ones",
          thirdPic: yelpcamp3
        },
        imgSrc: yelpcamp,
        id: "6",
        gitLink:"https://github.com/giangkhuat/Travel-Journal-Node.JS-Application"
    },
    {
        title: "CookingEasy",
        intro: `
          Relax and have your ingredients delivered to your home !
          `,
        features: {
            first:"Create accounts",
            firstPic: cook1,
            second:"Select your favorite recipes ",
            secondPic: cook2,
            third:"Place your order",
            thirdPic: cook3
          },
        imgSrc: cookingBanner,
        id: "7",
        gitLink:"https://github.com/giangkhuat/Meal-Kit-delivery-app"
    },
    {
        title: "Emaily",
        intro: `
          Understand your customers. Take your service to the next level
          `,
        features: {
            first:"Create accounts",
            second:"Send surveys to your customers",
            third:"Monitor feedback easily"
        },
        imgSrc: work,
        id: "8",
        gitLink: "https://github.com/giangkhuat/Emaily"
    },
  ];
  