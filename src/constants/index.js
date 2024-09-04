import { color } from "framer-motion";
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
    pythonapp,
    eventlite,
    cms,
    python,
    java,
    php,
    sql,
    free,
    gdg,
    msm,
    times,
    timesl,
    unics,
    property16,
    property17,
    property18,
    property19,
    property20,
    property21,
    property22,
    property23,
    event1,
    event2,
    event3,
    event4,
    event5,




  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "certifications",
      title: "Certifications",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const services = [
    {
        title: "Front-End Development",
        icon: web,
        points: [
            "I have developed dynamic and interactive web applications using React.js, Next.js, or Spring.",
            "I have incorporated website animations such as loading skeletons and scroll animations.",
            "I have used external libraries such as Vite, and frameworks such as TailwindCSS.",
            "I have ensured cross-browser compatibility and mobile responsiveness.",
        ],
    },
    {
        title: "Back-End Development",
        icon: backend,
        points: [
            "I built a Python messaging program, which used sockets to allow private and group messaging, with server auditing.",
            "I created a NodeJS Back-End Server which is responsible for providing JSON data to my website's Front-End.",
            "I impremented password protection on the server to ensure the data is kept secure.",
            "I have worked with APIs (such as my Wedding Reservation Management Program).",
            "I developed a company database using MySQL & PHPMyAdmin, implementing CRUD functionality and a complex query feature",
        ],
    },
    {
        title: "Data Analysis",
        icon: mobile,
        points: [
            "I have used a Naive Bayes classifier (with a train/test split) using Pandas and Matplotlib to detect and filter spam emails.",
            "I worked with Gradient Descent, MLP Regression, and Neural Networks (using Jupyter) for my Machine Learning Coursework in University.",
            "I have experimented with training and comparing machine learning models using SGD and ADAM to determine it's strengths and weaknesses."
        ],
    },
    {
        title: "UI/UX Design",
        icon: creator,
        points: [
            "I have designed user-friendly interfaces that prioritize usability and accessibility.",
            "I have experience with user research and A/B testing to steer design decisions.",
            "I have experimented wireframes and mockups to visualize designs.",
        ],
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
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Web Developer",
      company_name: "UniCS Manchester",
      icon: unics,
      iconBg: "#61bac9",
      date: "May 2024 - Present",
      points: [
        "Developing the hackathon's website using Javascript & NextJS.",
        "Planning and handling the logistics for GreatUniHack, A Hackathon attended by ~250 students.",
        "Managing a budget of £7,000 across merchandise, venue, food, and equipment.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "The Times, News UK",
      icon: times,
      iconBg: "#000000",
      date: "Jul 2024 - Sep 2024 (2 months)",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Simulations Team & Artificial Intelligence Engineer",
      company_name: "Manchester Stinger Motorsports",
      icon: msm,
      iconBg: "#A349A4",
      date: "Sep 2023 - Aug 2024 (1 year)",
      points: [
        "Researched path planning and optimization, using computer vision, C++ and machine learning to train the car to learn and navigate race tracks.",
        "Experimented with using onboard cameras to allow the race car to create and follow racing lines based on real-time input.",
      ],
    },
    {
      title: "Mentee",
      company_name: "GDG Academy",
      icon: gdg,
      iconBg: "#FFFFFF",
      date: "Feb 2024 - Jul 2024 (6 months)",
      points: [
        "Mentored by a Software Engineer & Engineering Manager to learn agile methodologies (Scrum and Kanban), conduct code reviews, manage pull requests, and understand pipeline processes for continuous integration.",
        "Developed industry-standard practices including safe coding techniques, time management, and collaboration within cross-functional teams involving departments like marketing and product development.",
      ],
    },
    {
      title: "Freelance Developer",
      company_name: "Freelance",
      icon: free,
      iconBg: "#F9C87D",
      date: "Jan 2024 - Jul 2024 (7 months)",
      points: [
        "Collaborated with small/medium companies to deliver tailored solutions, including front-end projects such as advertising websites and back-end projects such as company management databases.",
        "Worked with clients to ensure each product meets their specifications and needs, prioritising satisfaction and profitable outcomes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Meta Front-End Developer Specialisation",
      name: "Issued August 2024",
      designation: "7 months at 6 hours a week",
      company: "Coursera",
      image: "https://i.pinimg.com/736x/4b/0b/ac/4b0bacadee2847ccf95730127a1c8cb0.jpg",
    },
    {
      testimonial:
        "Computer Science Profesional Certification.",
      name: "Issued April 2024",
      designation: "2 months at 9 hours a week",
      company: "Codecademy",
      image: "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/CC-logo-short.png?w=1000",
    },
    {
      testimonial:
        "Python 3 Beginner & Python 3 Intermediate Course.",
      name: "Issued Feb 2024",
      designation: "1 Month at 10 hours a week",
      company: "Codecademy",
      image: "https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/CC-logo-short.png?w=1000",
    },
  ];
  
  const projects = [
    {
      name: "Interactive Property Listings Website",
      description:
        "A Property Listings Website for potential clients secured through a password-protected back-end server.",
      longDescription: [
        "The Website presents a modern interface including light mode and dark mode. It is also able to track simple analytics.",
        "Includes an image gallery, a real-time apartment availability checker, and a 3D interactive map.",
        "All website information is fetched from a back-end server, which is password protected to ensure the data is kept secure.",
        // "Website includes loading skeletons while the website fetches data from the back end, keeping the user informed.",
      ],
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: property16,
      images: [property16, property17, property17, property18, property19, property20, property21, property22, property23 ],
      source_code_link: "https://github.com/08mfp/rhodesville-villas",
      live_demo_link: "https://example.com",
    },
    {
      name: "Events & Venue Management Website",
      description:
        "An Events & Venue Management Website, using Java and Spring framework for the backend operations.",
      longDescription: [
        "Includes interactive maps, event scheduling, and a discussion board, inspired by EventBrite.",
        "Allows users to view upcoming and past events in their area and participate in discussions.",
        "Includes security restrictions, only providing administrators with CRUD functionality.",
        // "Integrated Mastdon APIs for event discussions and forumns.",
      ],
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: eventlite,
      images: [ event1,event2, event3, event4, event5,],
      source_code_link: "https://github.com/08mfp/eventlite",
      live_demo_link: "https://example.com",
    },
    {
      name: "Python Messaging Application",
      description:
        "A Python-based server and client application with GUIs using Tkinter and customtkinter libraries.",
      longDescription: [
        "Python server and client application with GUIs using Tkinter and customtkinter libraries.",
        "Server GUI audits all traffic, whilst client GUI facilitates user messaging.",
        "Implemented unique username registrations, private and group messaging.",
        // "Supporting multi-threading for handling multiple clients.",
      ],
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tkinter",
          color: "blue-text-gradient",
        },
        {
          name: "Threading",
          color: "green-text-gradient",
        },
        {
          name: "Concurrency",
          color: "pink-text-gradient",
        },
      ],
      image: pythonapp,
      images: [pythonapp, pythonapp, pythonapp],
      source_code_link: "https://github.com/08mfp/Python-Messaging-Program-V2",
      live_demo_link: "https://example.com",
    },  
    // {
    //   name: "Company Management Database",
    //   description:
    //     "A company database website using SQL, PHP, HTML, and CSS to track employee records, product inventories, orders, delivery logistics, customer data, departmental structures, and (minimal) ex-employee data",
    //   tags: [
    //     {
    //       name: "sql",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "php",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Database Normalisation",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "PHPmyAdmin",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "HTML",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: cms,
    //   source_code_link: "https://github.com/08mfp/eventlite",
    // },
    // {
    //   name: "Portfolio V1",
    //   description:
    //     "My first attempt at a personal portfolio website which was built from scratch to showcase my skills and projects. Created using Typescript and NextJS.",
    //   tags: [
    //     {
    //       name: "react.js",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Vite",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/08mfp/react-portfolio",
    // },
    // {
    //   name: "Schedule & Timings Website",
    //   description:
    //     "A website that includes status indicators (Now, Soon, Finished) to allow visitors to get a quick overview, and a countdown page to allow for journey planning, pulling data from a JSON file daily to update Prayer Times",
    //   tags: [
    //     {
    //       name: "react.js",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "typescript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "JSON",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/08mfp/Galaxy-Visualisation-Website",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };