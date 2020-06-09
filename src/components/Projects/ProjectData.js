import yelpcamp from "./yelpcamp.png";
import cooking from "./cookingeasy1.png";
import work from "./work.jpg";

export const projectData = [
    {
        title: "YelpCamp",
        intro: `
          Review and share your camprgounds for free !
          `,
        features: [
            "Users can: ", 
            "Create, edit and delete posts and comments",
            "Upload campground photos",
            "Search existing campgrounds"
        ],
        imgSrc: yelpcamp,
        id: "6",
    },
    /*
    `Users can:

       - Create accounts, login
        - Select recipes and view details
       -  Place orders
       -  Check, modify and track orders `
    */
    {
        title: "CookingEasy",
        intro: `
          Relax and have your ingredients delivered to your home !
          `,
        features: [
            "Users can", "Create accounts, login",
           "Select recipes and view details", 
            "Place orders", "Check and modify orders"
        ],
        imgSrc: cooking,
        id: "7",
    },
    {
        title: "Feedback Collector",
        intro: `
          Functionality:
          `,
        features: [
            "Users can", "Create accounts, login",
           "Select recipes and view details", 
            "Place orders", "Check and modify orders"],
        imgSrc: work,
        id: "8",
    },
  ];
  