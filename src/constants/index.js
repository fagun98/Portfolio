import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    iupui,
    reactjs,
    github,
    tailwind,
    nodejs,
    mongodb,
    git,
    c_plus,
    java,
    django,
    python,
    mysql,
    docker,
    threejs,
    sppu,
    purdue,
    promptopia,
    gamechanger,
    blockchain,
    javaException,
    aisumz,
    carrent,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
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
      title: "React Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "ML Engineer",
      icon: creator,
    },
  ];
  
  const backend_technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: c_plus,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "django",
      icon: django,
    },
  ]

  const database_technologies = [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },

  ]

  const devops_tecnhnologies = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "django",
      icon: django,
    }
  ]

  const frontend_technologies = [
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const educations = [
    {
      degree: "Masters",
      major: "Computer Science",
      school: "Purdue University",
      icon: purdue,
      iconBg: "#383E56",
      date: "August 2021 - May 2023",
      gpa: "3.57 out of 4.00",
      courses: [
          "Algorithms Design and Implementation",
          "Database Systems",
          "Object Oriented Programming",
          "Big Data Analytics",
          "Natural Language Processing",
          "Data Mining",
          "Deep Learning",
          "Intelligent Systems",
          "Image Processing Language",
      ],
    },
    {
      degree: "Bachelor",
      major: "Computer Engineering",
      school: "Savitribai Phule Pune University",
      icon: sppu,
      iconBg: "#E6DEDD",
      date: "August 2016 - November 2020",
      gpa: "8.15 out of 10",
      courses: [
        "Data Structure",
        "Data Structure and Algorithm",
        "Advance Data Structures",
        "Database Management System",
        "Web Technology",
        "Data Analytics",
        "System Programming and Operating Systems",
        "Machine Programming",
        "Cyber security",
        "Computer Networks",
        "Embedded Systems and Internet of Things",
      ],
    },
  ];

  const experiences = [
    {
      title: "Associate Software Developer",
      company_name: "IUPUI",
      icon: iupui,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Actively involved in GUI development using the Holoviews library in Python, crafting intuitive and visually appealing user interfaces that facilitate seamless data exploration and interaction.",
        "Proficiently engaged in the design and implementation of diverse data structures, tailoring them to specific project requirements.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "IUPUI",
      icon: iupui,
      iconBg: "#383E56",
      date: "November 2021 - May 2023",
      points: [
        "Attained a profound mastery of the Salesforce application, skillfully utilizing its functionalities to enhance data processing, analysis, and the development of dynamic dashboards.",
        "Created multiple data visualization dashboards. The visualizations created led to a staggering 50% improvement in data comprehension, offering an unprecedented level of clarity.",
        "Managed the smooth flow of data into our system, following a step-by-step process to bring in, organize, and merge different data sources into one place. ",
        "Took charge of cleaning up the data, using smart techniques to fix mistakes, errors, and repetitive info in the dataset.",
      ],
    },
    {
      title: "Biomedical NLP Researcher",
      company_name: "IUPUI",
      icon: iupui,
      iconBg: "#E6DEDD",
      date: "July 2022 - March 2023",
      points: [
        "Enhanced existing data extracting algorithm which increased accuracy by 10%.",
        "Developed a pattern analysing program to extract desired patient details.",
        "Engaged in extensive research, actively exploring a variety of machine learning algorithms to uncover essential patterns within the data.",
        "Collaborated with diverse BERT and NLP models during the research endeavor, delving into various techniques to extract meaning and context from text data.",
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
      name: "Car Showcase",
      description:
        "Car Rental Showcase, your go-to platform for discovering and renting the perfect car for your next adventure.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "rapidApi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/fagun98/CarShowcase",
    },
    {
      name: "Promptopia",
      description:
        "Explore a dynamic platform where minds converge to share, discover, and collaborate on AI prompts.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/fagun98/Promptopia",
    },
    {
      name: "AI Summerizer",
      description:
        "Your go-to tool for summarizing web articles and pages with lightning speed! ",
      tags: [
        {
          name: "vite + react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aisumz,
      source_code_link: "https://github.com/fagun98/AI-Summarizer-",
    },
    {
      name: "Game Changer",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "mysqlite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gamechanger,
      source_code_link: "https://github.com/fagun98/Gamechanger",
    },
    {
      name: "Ticket Cafe",
      description:
        "Ticket Cafe: Where tickets meet excitement! Dive into a world of movies, concerts, and sports with our Django-powered platform. Buy, sell, and chat for prices, your ticket journey starts here!",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "mysqlite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/564x/07/45/44/07454428c77d84209e6eb6fe0f4d9396.jpg",
      source_code_link: "https://github.com/fagun98/Ticket_cafe",
    }
  ];

  const certifications = [{
      name: "Blockchain Basics",
      image: blockchain, 
    },
    {
      name: "Java Excpetion",
      image: javaException, 
    },
  ]
  
  export { services, frontend_technologies, backend_technologies, devops_tecnhnologies, database_technologies, experiences, educations, testimonials, projects, certifications };