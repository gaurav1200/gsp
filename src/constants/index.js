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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chatApp1,
  lyriks1,
  camp1,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    title: "Back End Developer",
    company_name: "Mavenir Systems",
    icon: "https://pbs.twimg.com/profile_images/1381436398771798018/9T0i0DTh_400x400.jpg",
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Primarily worked on Spring boot microservices and NoSqldatabase such as Couchbase on a Telcom project.",
      "Worked on primary microservices such as Account Management,Billgeneration Service, Quote Management, User Management and Case Management.",
      "Built special utility microservice using spring boot for data remediation in lower environment and production.",
      "Upgraded the spring boot major version for microservice and resolved issue related to upgrade dependencies.",
      "In Billgenration service did code optimization for memory outage issue.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate  Developer",
    company_name: "Mavenir Systems",
    icon: "https://pbs.twimg.com/profile_images/1381436398771798018/9T0i0DTh_400x400.jpg",
    iconBg: "#E6DEDD",
    date: "May 2022 - May 2023",
    points: [
      "Primarily worked on Spring Boot and Microservice architecture.",
      "Worked on maintaining code quality by resolving sonarqube issues and code smell's.",
      "Increased code coverage for various microservices for legacy code by using Junit and Mockito.",
      "Debugging and resolving the issue during testing phase.",
    ],
  },
  {
    title: "Student Developer",
    company_name: "IACSD Akurdi (C-DAC)",
    icon: "https://tse4.mm.bing.net/th?id=OIP.EllW6-1MNFeNeqpLRaTiZAAAAA&pid=Api&P=0&h=180",
    iconBg: "#383E56",
    date: "September 2021 - April 2022",
    points: [
      "I have completed My Post Graduate Diploma in Advanced Computing from IACSD Pune (C-DAC) in 2022.  ",
      " Where I learned about Software Development, Web Development, Database Management, and Networking.",
      "I learned Full Stack Development and worked on various projects.",
      "I have learned various technologies like Java, Advanced Java, HTML, CSS, JavaScript, MySQL, MongoDB, Node and React.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];
const projects = [
  {
    name: "Music Player",
    description:
      "Web application where users can listen to music, view lyrics, and can get information about the song and artist. Users can get top tracks and top artists. Users also can get top songs around them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "shazam API",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
    ],
    image: lyriks1,
    source_code_link: "https://github.com/gaurav1200/lyriks",
    visit_link: "https://gsp-lyriks.onrender.com/",
  },
  {
    name: "Best Campgrounds",
    description:
      "Web application where users can view campgrounds, add campgrounds, and add comments on campgrounds. Users can also edit and delete their campgrounds and comments. Users can also view the location of the campground on the map. Users can also search for campgrounds by city, state or country.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: camp1,
    source_code_link: "https://github.com/gaurav1200/YELP-CAMP",
    visit_link: "https://gsp-campgraounds.onrender.com/",
  },
  {
    name: "Chat App",
    description:
      "Real-time chat application where users can chat with each other. Users can create groups and chat with group members. Users can see typing status of other users.",
    tags: [
      {
        name: "RactJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp1,
    source_code_link: "https://github.com/gaurav1200/MERN-CHAT-APP",
    visit_link: "https://gsp-mern-chat-app.onrender.com/",
  },
];
export { services, technologies, experiences, testimonials, projects };
