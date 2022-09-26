//Assets
import FireImage from "../assets/images/firemans_card_img.png";
import RecipesImg from "../assets/images/recipes_card_img.png";
import TravelersImg from "../assets/images/travelers_card2.png";
import PortfolioImg from "../assets/images/portfolio_card_img.png";

export const techStack = [
  "Javascript",
  "React",
  "Express",
  "Node",
  "MongoDB",
  "C#",
  "HTML",
  "CSS",
  "ASP.Net",
  "T-SQL",
  "SQL Server",
  "REST APIs",
  "GraphQl",
];
export const aboutDescription =
  "Software developer passionate about front-end technologies. Since 2020 I've decided to upgrade my skills and I've started learning about software development and how to code. Since then, I've completed several courses with 1000+ hours of classes combined and I've been immersed in learning the most recent tech stack. I'm currently working as a Front-end developer using React to build modern and scalable UI's.";
export const googleDriveCvLink =
  "https://drive.google.com/file/d/1Ruqe9OsvYST7nA4OIODfc2yNzPgNv4Xg/view?usp=sharing";

export const projectCards = [
  {
    libraryClass: "item",
    dataValue: "1",
    imgPath: TravelersImg,
    title: "Travelers Corner",
    description:
      "Full-stack project. Fully responsive social media web app where authenticated users can post their travel highlights, like, comment and follow other users.",
    techStack: "MERN Stack",
    link: "https://travelers-corner.netlify.app/",
    linkDescription: "travelers-corner.netlify.app/",
    gitLink: "https://github.com/tiagopascoa/travelers-corner-FE",
    gitLinkDescription: "github.com/tiagopascoa/travelers-corner-client",
  },
  {
    libraryClass: "item",
    dataValue: "2",
    imgPath: RecipesImg,
    title: "Our Recipes",
    description:
      "Full-stack project. CRUD operations. Fully responsive web app where authenticated users can create recipes, update, delete and add to favorites.",
    techStack: "Node | Express | MongoDB | Handlebars",
    link: "https://our-recipes-project.herokuapp.com/",
    linkDescription: "our-recipes-project.herokuapp.com",
    gitLink: "https://github.com/tiagopascoa/recipes-project",
    gitLinkDescription: "github.com/tiagopascoa/recipes-project",
  },
  {
    libraryClass: "item",
    dataValue: "3",
    imgPath: FireImage,
    title: "Fireman's Game",
    description:
      "Game project where the goal was to apply Vanilla Javascript core concepts, using classes and objects. Pair programming. Not optimized for mobile!",
    techStack: "Vanilla Javascript | HTML | CSS",
    link: "https://firemansgame.netlify.app/",
    linkDescription: "firemansgame.netlify.app",
    gitLink: "https://github.com/joaopbbezerra/game-proj",
    gitLinkDescription: "github.com/joaopbbezerra/game-proj",
  },
  {
    libraryClass: "item",
    dataValue: "4",
    imgPath: PortfolioImg,
    title: "My Portfolio",
    description:
      "Front-end project. Portfolio website built with React and styled-components. Fully responsive.",
    techStack: "React | Styled Components",
    link: "https://tiagopascoa-dev.netlify.app",
    linkDescription: "tiagopascoa-dev.netlify.app",
    gitLink: "https://github.com/tiagopascoa/my-portfolio",
    gitLinkDescription: "github.com/tiagopascoa/my-portfolio",
  },
];
