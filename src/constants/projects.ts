import kismet from "@images/projects/kismet-ai-mockup.png";
import kismetFeatured from "@images/projects/kismet-featured.png";
import sportsInference from "@images/projects/sports-inference-mockup.png";
import sportsInferenceFeatured from "@images/projects/sports-inference-featured.png";
import heatherDick from "@images/projects/heather-dick-mockup.png";
import reactfitCo from "@images/projects/reactfit-co-mockup.png";
import threadNeedle from "@images/projects/thread-needle-mockup.png";
import vecaf from "@images/projects/vecaf-mockup.png";
import adoptDog from "@images/projects/adopt-dog-mockup.png";
import frontendMentor from "@images/projects/frontend-mentor-mockup.png";

export const projects = [
  {
    title: "Kismet AI",
    description:
      "A Demand Side Platform SaaS project built using Hasura & React",
    liveLink: "https://kismet.ai",
    thumbnail: kismet,
    featured: true,
    tags: ["React", "Hasura", "GraphQL"],
  },
  {
    title: "Sports Inference",
    description:
      "NBA teams analysis and statistics built using Firebase & React",
    liveLink: "https://sportsinference.com",
    thumbnail: sportsInference,
    featured: true,
    tags: ["React", "Firebase", "ReactChartJS"],
  },
  {
    title: "Heather Dick",
    description: "Personal blog built using Gatsby & Strapi",
    liveLink: "https://heatherdick.ca",
    sourceLink: "https://github.com/yjcyun/heather_dick_portfolio",
    thumbnail: heatherDick,
    featured: false,
    tags: ["Gatsby", "Stripe"],
  },
  {
    title: "ReactFit & Co.",
    description:
      "Fullstack e-commerce that features authentication, checkout, and rating system",
    liveLink: "https://reactfitandco.herokuapp.com/shop",
    sourceLink: "https://github.com/yjcyun/react_fit",
    thumbnail: reactfitCo,
    featured: false,
    tags: ["React", "Express", "Stripe"],
  },
  {
    title: "Thread & Needle",
    description: "E-commerce featuring checkout",
    liveLink: "https://threadandneedle.netlify.app/",
    sourceLink: "https://github.com/yjcyun/react_fabric_store",
    thumbnail: threadNeedle,
    featured: false,
    tags: ["React", "ContextAPI"],
  },
  {
    title: "Vecaf",
    description: "Cafe landing page",
    liveLink: "https://vecaf.netlify.app/",
    sourceLink: "https://github.com/yjcyun/vecaf_cafe",
    thumbnail: vecaf,
    featured: false,
    tags: ["React"],
  },
  {
    title: "Adopt. Don't Shop",
    description: "Cafe landing page",
    liveLink: "https://react-adopt-dog.netlify.app/",
    sourceLink: "https://github.com/yjcyun/react_adopt_dog",
    thumbnail: adoptDog,
    featured: false,
    tags: ["React"],
  },
  {
    title: "Frontend Mentor Challenges",
    description: "Collection of frontend challenges",
    liveLink: "https://root-page.vercel.app/",
    sourceLink: "https://github.com/yjcyun/frontend_mentor_challenges",
    thumbnail: frontendMentor,
    featured: false,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
