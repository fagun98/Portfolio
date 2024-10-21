import {
    mobile,
    backend,
    creator,
    web,
    numInformatics,
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
    university_mn,
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
      title: "AI / ML Engineer",
      icon: creator,
    },
    {
      title: "Data Scientist",
      icon: backend,
    },
    {
      title: "Machine Learning Consultant",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
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
      title: "Machine Learning Consultant",
      company_name: "University of Minnesota",
      icon: university_mn,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Improved chatbot architecture by integrating a Pinecone vector database, boosting accuracy and reliability.",
        "Developed and deployed Streamlit UI platforms for testing, enabling precise validation of chatbot interactions with evidence-based responses.",
        "Configured, set up, and deployed a testing server using AWS Fargate, accelerating feature testing before production deployment.",
        "Enhanced and tested multiple serverless APIs on AWS, optimizing performance and scalability.",
        "Integrated project with Langfuse to track API and LLM calls, prompt management, providing detailed analysis of latency and costs."
      ],
    },
    {
      title: "AI / ML Developer",
      company_name: "NumInformatics",
      icon: numInformatics,
      iconBg: "#383E56",
      date: "February 2024 - Present",
      points: [
        "Enhanced the graph RAG system with Neo4J, adding real-time chat features for better user interaction on the Streamlit platform.",
        "Improved the chatbot by introducing a semantic classifier that sorts queries and directs them appropriately, providing tailored solutions with relevant information.",
        "Built a custom Vector database using PostgreSQL and pgvector, ensuring data privacy by avoiding shared cloud storage.",
        "Constructed a multi-model architecture that uses various machine learning models (like Neural Networks, Decision Trees, and Random Forests) to predict flags.",
        "Designed a waterfall architecture that predicts one flag using initial features, then uses that flag along with initial features to predict subsequent flags.",
        "Developed a dynamic RAG (Retrieval Augmented Generation) system that efficiently answers specific health insurance policy inquiries from a vast database, providing evidence and support for each response."
      ],
    },
    {
      title: "Reseach Software Engineer",
      company_name: "IUPUI",
      icon: iupui,
      iconBg: "#E6DEDD",
      date: "July 2023 - February 2024",
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
      name: "AuditInsight-Bot",
      description:
        "AuditInsight Bot is a NumInformatics 10-K Analyzer Chatbot designed to assist users in generating accurate and relevant answers based on audit reports of companies. By leveraging similarity search through documents, the chatbot aims to provide reliable information and insights, ensuring users have access to the data they need.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "GraphRAG",
          color: "green-text-gradient",
        },
        {
          name: "Neo4J",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/564x/b0/a7/47/b0a74785c0d674cee29b491f520643f5.jpg",
      source_code_link: "/",
    },
    {
      name: "DocSearch-Chat",
      description:
        "DocSearch-Chat is a Retrieval Augmented Generation (RAG) model designed to search and analyze official documents. It provides pinpoint accuracy in locating user queries within the documents and offers a chat facility for answering specific queries based on the content of those documents.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RAG",
          color: "green-text-gradient",
        },
        {
          name: "Chatbot",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/564x/ce/a5/e4/cea5e48c88cba27483e015b3740f188c.jpg",
      source_code_link: "/",
    },
    {
      name: "Mental-Health-Classification",
      description:
        "Developed a cutting-edge Mental Health Classification Model. Leveraging Python and BERT models (DistillBERT & SentimentBERT)",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "BERT",
          color: "green-text-gradient",
        },
        {
          name: "Neural-Network",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/564x/14/d3/62/14d36228173aa8c32c8f9c35db5f3128.jpg",
      source_code_link: "https://github.com/fagun98/Mental-Health-Classification",
    },
    {
      name: "Document Aggregator",
      description:
        "This repository contains a Python project for aggregating data on official website and combining them into a unified dataset.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "DataAnalysis",
          color: "green-text-gradient",
        },
        {
          name: "WebScrape",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/564x/71/80/07/718007c834e22e0696d76ed624e050a3.jpg",
      source_code_link: "https://github.com/fagun98/Registered-Investment-Advisers-Aggregator",
    },
    {
      name: "Job Application Tracker",
      description:
        "A Streamlit application to track job applications, including job details, statuses, and visualization of application trends.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        
      ],
      image: "https://i.pinimg.com/564x/48/f6/69/48f6695588d1785b1d46ca815318b0f3.jpg",
      source_code_link: "https://github.com/fagun98/Job-Application-Tracker",
    },
    {
      name: "SnapQuest",
      description:
        "SnapQuest is a daily photography challenge app built with Streamlit. Capture a new object every day, upload your photos, and explore the community gallery!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "MatPlotLib",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/control/564x/c6/0f/d9/c60fd9aff016d5dacc5e707ffbb29dc6.jpg",
      source_code_link: "https://github.com/fagun98/SnapQuest-Daily-Photography-Challenge",
    },
    {
      name: "Fake-Review-Bouncer",
      description:
        "Identifying Real or Fake reviews on various marketplaces. Using various machine learning algorithms combined with unsupervised and supervised models we were able to distinguish the reviews.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine-Learning",
          color: "green-text-gradient",
        },
        {
          name: "Data-Visualization",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/564x/14/d3/62/14d36228173aa8c32c8f9c35db5f3128.jpg",
      source_code_link: "https://i.pinimg.com/736x/9a/23/34/9a2334ca2602968bf7f1f6e73f050591.jpg",
    },
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
      name: "Library Management",
      description:
        "The primary objective of this particular project is to develop a library management system that utilizes the principles of inheritance and object-oriented programming, while adhering to the SOLID design principles. By leveraging these fundamental concepts, we can ensure that our code is modular, extensible, and maintainable.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
      ],
      image: "https://i.pinimg.com/736x/3c/42/01/3c4201415657c8af56fcaeb812661383.jpg",
      source_code_link: "https://github.com/fagun98/Library-Management",
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