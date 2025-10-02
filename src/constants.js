// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
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
// company logo
import katlonLogo from './assets/tech_logo/katalong.png'
import smartLogo from './assets/company_logo/smart.jpg'

// project logo
import project1 from './assets/work_logo/project_katalon.png'

// eduction logo
import scoeLogo from './assets/education_logo/scoe.png'
import dbatuLogo from'./assets/education_logo/dbatu.jpeg'
import schoolLogo from './assets/education_logo/10th.jpg'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      {name:'Katalon Studio',logo:katlonLogo}
      
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: smartLogo,
    role: "Automation Tester",
    company: "Smartinternz",
    date: "Dec 2023 - Feb 2024",
    desc: "Conducted GUI testing with Katalon Studio, automated test cases, and ensured cross-browser functionality.",
    skills: [
      "Katalon Studio",
      "GUI Testing",
      "Test Automation",
      
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Amazon Test Automation Using Katalon Studio",
    description: "Automated key workflows on the Amazon shopping platform using Katalon Studio.",
    image: project1,
    tags: ["Katalon Studio", "Automation Testing"],
    github: "https://github.com/priyamore18/Katalon_Automation_Priya",
    webapp: "",
  },
  {
    id: 2,
    title: "PS Cake - Online Web Application",
    description: "Designed an online cake ordering system with PHP and MySQL.",
    image: "/images/cake.png",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/priyamore18/Online-Cake-Order-System",
    webapp: "",
  },
  {
    id: 3,
    title: "TrendWear – Fashion That Follows Trend",
    description: "Built a MERN-based shopping website with Stripe payments and JWT authentication.",
    image: "/images/trendwear.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "MongoDB", "Express.js", "Stripe", "JWT"],
    github: "https://github.com/priyamore18/Online-Cake-Order-System",
    webapp: "",
  },
  {
    id: 4,
    title: "HerbalCure 3D – Web Platform for Herbal Education",
    description: "Built an educational website offering realistic 3D models of herbal plants.",
    image: "/images/herbal.png",
    tags: ["3D Modeling", "React", "Node js","Tailwind Css","Html","Express Js","Mongo DB"],
    github: "https://github.com/priyamore18/Online-Cake-Order-System",
    webapp: "",
  },
];

export const education = [
  {
    id: 0,
    img: scoeLogo, // add your Sinhgad College logo here
    school: "Sinhgad College of Engineering, Pune",
    date: "2022 - 2025",
    grade: "8.60 CGPA",
    desc: "I am pursuing my Bachelor's degree in Computer Engineering at Sinhgad College of Engineering, Pune. During my studies, I have gained knowledge in areas like Data Structures, Algorithms, Web Development, Database Systems, and Computer Networks. I actively participate in technical projects and workshops, which help me build practical skills for real-world applications.",
    degree: "Bachelor of Engineering - Computer Engineering",
  },
  {
    id: 1,
    img: dbatuLogo, // add DBATU's Institute logo here
    school: "Dr. Babasaheb Ambedkar Technological University, Institute of Petrochemical Engineering, Lonere",
    date: "2019 - 2022",
    grade: "9.28 GPA",
    desc: "I completed my Diploma in Computer Engineering from DBATU's Institute of Petrochemical Engineering, Lonere. The diploma gave me strong fundamentals in programming, software development, and database management. I also worked on several hands-on projects, which enhanced my technical knowledge and teamwork skills.",
    degree: "Diploma in Computer Engineering",
  },
  {
    id: 2,
    img: schoolLogo, // add Swami Vivekanand Vidyalay logo here
    school: "Swami Vivekanand Vidyalay, Pali",
    date: "2018 - 2019",
    grade: "83.60%",
    desc: "I completed my class 10 education at Swami Vivekanand Vidyalay, Pali, where I focused on core subjects like Mathematics, Science, and Computer Studies. This period helped me build a strong academic foundation for my future technical education.",
    degree: "SSC (10th), Maharashtra State Board",
  },
];

