// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import supabase from './assets/tech_logo/supabase1.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import vite_logo1 from './assets/tech_logo/vite_logo1.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import handlebar from './assets/tech_logo/handlebar.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import jwt from './assets/tech_logo/jwt1.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import pearl from './assets/company_logo/pearl.png';



// Education Section Logo's
import galgotiasLogo from "./assets/education_logo/galgotias-university.png";
import rlsyLogo from "./assets/education_logo/logo.webp";
import ismaLogo from "./assets/education_logo/ismapublicschool.jpg";

// Project Section Logo's
import stacklensImg from "./assets/project/stacklens.jpg";
import housePriceImg from "./assets/project/house-price.jpg";
import soundPlayerImg from "./assets/project/soundplayer.jpg";
const idrImg = "/idr-preview.png";
import databaseImg from "./assets/project/database.jpg";
import sigilImg from "./assets/project/sigil.jpg";




export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Android Studio", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: pearl,
    role: "User Acceptance Testing (UAT) Intern",
    company: "Nothing",
    date: "2026 - Present",
    desc: "Working as a User Acceptance Testing (UAT) Intern at Nothing. Responsible for functional testing, UI/UX validation, bug reporting, regression testing, test case execution, and collaborating with QA teams to improve product quality before release.",
    skills: [
      "User Acceptance Testing",
      "Functional Testing",
      "Regression Testing",
      "Bug Reporting",
      "UI Testing",
      "Android Testing",
      "QA",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: galgotiasLogo,
    school: "Galgotias University, Greater Noida",
    date: "2024 - 2027",
    grade: "CGPA: 8.5",
    desc: "Currently pursuing Bachelor of Computer Applications (BCA) with a strong foundation in Full Stack Development, Data Structures, DBMS, Artificial Intelligence, and Software Development.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 1,
    img: rlsyLogo,
    school: "R.L.S.Y College",
    date: "2024",
    grade: "80%",
    desc: "Completed Higher Secondary Education (Commerce Stream).",
    degree: "Class XII (Commerce)",
  },
  {
    id: 2,
    img: ismaLogo,
    school: "Isma Public School",
    date: "2022",
    grade: "72%",
    desc: "Completed Secondary Education with a strong academic foundation.",
    degree: "Class X",
  },
];









export const projects = [
  {
    id: 0,
    title: "StackLens - Website Infrastructure Analyzer",
    description:
      "AI-powered website analyzer that detects frameworks, UI components, technology stack, and generates architecture insights.",
   image: "/stacklens-preview.png",
    tags: ["React", "Node.js", "AI", "JavaScript"],
   github: "https://github.com/sTut12/StackLens",
    
  },
  {
    id: 1,
    title: "House Price Prediction",
    description:
      "Machine Learning web application that predicts house prices based on user inputs using Python and an interactive frontend.",
    image: "/house-price-preview.png",
    tags: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
   github: "https://github.com/sTut12/house-price-prediction",
   live: "https://house-price-prediction-snowy.vercel.app/",
    
  },
  {
    id: 2,
    title: "SoundPlayerApp",
    description:
      "Native Android music player built using Android Studio with audio playback, playlist management, and smooth UI.",
   image: soundPlayerImg,
    tags: ["Java", "Android Studio", "Firebase"],
    github: "https://github.com/sTut12/SoundPlayerApp-Stuti",
    
  },
  {
    id: 3,
    title: "Institute of Digital Risk (IDR)",
    description:
      "Cybersecurity awareness website with responsive UI, smooth navigation, and modern landing page.",
    image: idrImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sTut12/institute-of-digital-risk",
    live: "https://stut12.github.io/institute-of-digital-risk/IDR_Homepage.html"
   
  },
  {
    id: 4,
    title: "File-Based Custom Database",
    description:
      "Custom database engine in C++ implementing CRUD operations using file handling and OOP principles.",
   image: databaseImg,
    tags: ["C++", "OOP", "File Handling"],
    github: "https://github.com/sTut12/Custom-Database-Cpp",
    
  },
  {
    id: 5,
    title: "Sigil - AI risk engine",
    description:
      "AI-powered package risk analysis system with risk scoring, monitoring, and secure package validation.",
   image: sigilImg,
    tags: ["AI", "Cybersecurity", "Python"],
    github: "https://github.com/sTut12/Sigil",
    
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Academy Graduate – Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "2025",
    img: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
    desc: "Completed AWS Academy Machine Learning Foundations covering machine learning concepts, AWS AI services, data preparation, model training, and deployment fundamentals.",
  },
  {
    id: 2,
    title: "Web Development Certification",
    issuer: "EduSkills",
    date: "2024",
    img: "https://www.eduskillsfoundation.org/images/logo.png",
    desc: "Successfully completed Web Development training covering HTML, CSS, JavaScript, responsive web design, and frontend development fundamentals.",
  },
];