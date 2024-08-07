import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  Textractive,
  HouSource,
  Tripo,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Frontend developer",
    icon: mobile,
  },
  {
    title: "React Js Developer",
    icon: backend,
  },
  {
    title: "UX Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr UIUX Designer",
    company_name: "CenturyLink",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Conducted user testing and analysis using wire-framing and prototyping tools like Invision.",
      "Utilized Google Analytics to develop SEO strategies for the official website.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Improved user experience of driver job and taxi booking apps for iOS and Android, following design guidelines.",
      "Planned and delivered UI/UX design solutions for taxi dispatching platforms, mobile apps, and websites.",
"Created wireframes, mock-ups, and prototypes, and assisted in information architecture creation.",

    
],
  },
  {
    title: "UI/UX Designer",
    company_name: "State of NY",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Feb 2023",
    points: [
      "Designed user interfaces and experiences using Figma, Photoshop and Sketch for both transactions and websites.",
      "Managed corporate branding and created interactive content according to branding guidelines.",
      "Collaborated with project coordinators to develop design concepts and maintain technical standards.",
      "Worked with top-level executives to create creative concepts for marketing campaigns and presentations.",
      "Converted complex data into easy-to-understand graphics, Designed web pages, marketing assets, and print materials.",
      "Brought branding ideas to life across various channels and projects.",
       
    ],
  },
  {
    title: "Jr. UX Designer",
    company_name: "Infinity Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2017 - Mar 2021",
    points: [
      "Took part in all stages of software development, from figuring out what's needed to maintaining the finished product.",
      "Made web designs using tools like Photoshop, Illustrator, and Sketch, Turned these designs into actual web pages using HTML, CSS, and JavaScript.",
      "Had good knowledge of React JS and used it to make interactive web interfaces,Created reusable design elements for consistency and easy maintenance.",
      "Managed app state using Redux and Context API, Reviewed code and followed Agile practices to ensure high-quality work and timely delivery.",

  
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Quadrant Tech",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Oct 2017",
    points: [
      "Involved in software development lifecycle including designing, coding, testing and deployment.",
      "Adopted Agile for Development Methodology to improve software development process and elevate product while meeting defined goals and key deadlines.",
      "Used Material UI, bootstrap and CSS3 Media Queries to develop single responsive application with good user experience in all platforms like desktop's tablets and mobile phones. ",
      "Developed custom bootstrap with brand appropriate styles, colours, animations, and font icons.",
      "Extensively used Social Media Platform like Facebook, Instagram, linked-in, Twitter to develop front end of the application. Used ReactJS JavaScript framework to bind data. ",

      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Harvest Hub",
    description:
      "Introducing Harvest Hub, your one-stop solution empowering farmers to thrive. Our innovative online marketplace directly connects local farmers with consumers while providing access to agricultural experts for crop disease advisory and detailed cultivation processes. ",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Sketch",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.behance.net/gallery/195925831/Harvest-Hub",
  },
  {
    name: "Y To Ride",
    description:
      "Introducing Y to Ride, your ultimate transportation solution. book your ride effortlessly and reach your destination hassle-free. Whether it's a quick trip across town or a ride to the airport, Y to Ride ensures reliable and convenient transportation whenever you need it..",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "AdobeXd",
        color: "green-text-gradient",
      },
      {
        name: "Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.behance.net/gallery/195866209/YToRide",
  },
  {
    name: "Trek Trak",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "UX design",
        color: "green-text-gradient",
      },
      {
        name: "AdobeXD",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.behance.net/gallery/195893843/Trek-Trak",
  },
  {
    name: "HouSource",
    description:
      "HouSource is a compelling international case study focusing on student housing solutions. It delves into the intricate dynamics of accommodating diverse student populations from around the globe, addressing their unique needs and preferences. ",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "AdobeXD",
        color: "pink-text-gradient",
      },
    ],
    image: HouSource,
    source_code_link: "https://www.behance.net/gallery/196389819/Housource",
  },
  {
    name: "Tripo",
    description:
      "Tripo is a captivating case study centered around a travel app designed to connect individuals with compatible travel companions. It explores the journey of creating a platform that facilitates meaningful connections among travelers seeking companionship for their adventures.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "AdobeXd",
        color: "green-text-gradient",
      },
      {
        name: "Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: Tripo,
    source_code_link: "https://www.behance.net/gallery/196389253/Tripo-Travel",
  },
  {
    name: "Textractive Self Serve",
    description:
      "The Textractive Self-Serve UX case study delves into the design and functionality of a groundbreaking self-service platform. This study highlights how Textractive streamlines the extraction process for users, enabling them to effortlessly obtain vital information. Through intuitive user experience (UX) design.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "UX design",
        color: "green-text-gradient",
      },
      {
        name: "AdobeXD",
        color: "pink-text-gradient",
      },
    ],
    image: Textractive,
    source_code_link: "https://www.behance.net/gallery/196388591/Textractive-Self-Serve",
  },
];

export { services, technologies, experiences, testimonials, projects };
