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
        "The website includes a gallery that allows users to filter images based on category, a section describing all the amenities offered, a real-time apartment availability checker, and a 3D interactive map (built with the Mapbox API) featuring custom clickable icons.",
      longDescription:
        "This project was designed to provide a comprehensive solution for property management and listing. The platform allows users to filter images based on various categories, view detailed property amenities, and check real-time availability of apartments. It also integrates a 3D interactive map using the Mapbox API, featuring custom icons for each property. The backend is powered by Node.js with a REST API, and the frontend is built using React.js and TypeScript, ensuring a smooth and responsive user experience.",
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
          name: "RestAPI",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      images: [carrent, eventlite, pythonapp],
      source_code_link: "https://github.com/08mfp/rhodesville-villas",
    },
    {
      name: "Events & Venue Management Website",
      description:
        "An Events & Venue Management Website, using Java and Spring framework for the backend operations. Enabled users to view upcoming and past events in their area and participate in discussions to promote community engagement.",
      longDescription:
        "This project provides a robust platform for managing events and venues. Users can view details of upcoming and past events, and participate in discussions to foster community engagement. The backend is built with Java and the Spring Framework, ensuring scalability and performance. It supports event creation, venue management, and integrates with external APIs for features like event notifications and calendar integration. The frontend is styled with CSS and HTML, providing a clean and intuitive user interface.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Framework",
          color: "green-text-gradient",
        },
        {
          name: "Spring MVC",
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
      images: [carrent, eventlite, pythonapp],
      source_code_link: "https://github.com/08mfp/eventlite",
    },
    {
      name: "Python Messaging Application",
      description:
        "A Python-based server and client application with GUIs using Tkinter and customtkinter libraries. The server GUI audits all messages and commands, while the client GUI facilitates user messaging.",
      longDescription:
        "This project involves creating a messaging system using Python. The server application is capable of auditing all messages and commands sent between clients. The client application features a user-friendly GUI built with Tkinter and customtkinter libraries, enabling easy communication between users. The system supports multi-threading to handle multiple clients simultaneously, ensuring smooth and responsive messaging. It also includes features like real-time message updates, user authentication, and message logging.",
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
          name: "Networking",
          color: "green-text-gradient",
        },
        {
          name: "Client-Server Architecture",
          color: "green-text-gradient",
        },
        {
          name: "Threading",
          color: "pink-text-gradient",
        },
        {
          name: "Concurrency",
          color: "pink-text-gradient",
        },
      ],
      image: pythonapp,
      images: [carrent, eventlite, pythonapp],
      source_code_link: "https://github.com/08mfp/Python-Messaging-Program-V2",
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