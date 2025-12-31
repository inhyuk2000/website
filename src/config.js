// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/환각.jpg";
import Logo2 from "./images/스마트폰_알림.webp";
import Logo3 from "./images/블랙박스.jpg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "inhyuk2000";
// export const githubToken = "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"

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "신뢰 가능한 인간-AI 상호작용을 지향하는 대학생 개발자입니다.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 2,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 3,
    skill: <Icon icon="lineicons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 4,
    skill: <Icon icon="ri:java-line" className="display-4" />,
    name: "Java",
  },
  {
    id: 5,
    skill: <Icon icon="proicons:kotlin" className="display-4" />,
    name: "kotlin",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1v1lux9ocU_bGI6iSx2tqwEPHj6xwnzFS/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["A-Natural-Language-based-Notification-Delivery-Control-System-Using-LLM", "A-Multi-Agent-Debate-Framework-of-Multiple-Language-Models-for-Hallucination-Detection-Correction", "A-Hierarchical-Interpretation-Framework-Based-on-Multi-Neuron-Activation-Patterns"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "A-Natural-Language-based-Notification-Delivery-Control-System-Using-LLM",
    image: Logo2,
  },
  {
    name: "A-Multi-Agent-Debate-Framework-of-Multiple-Language-Models-for-Hallucination-Detection-Correction",
    image: Logo,
  },
  {
    name: "A-Hierarchical-Interpretation-Framework-Based-on-Multi-Neuron-Activation-Patterns",
    image: Logo3,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
