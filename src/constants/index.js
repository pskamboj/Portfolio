import {
    iot,
    medoc,
    sciroit,
    kpmg,
    deepLearning,
    computervision,
    nlp,
    robot,
    Artificial,
    mobile,
    backend,
    python,
    creator,
    web,
    chatbot,
    self_driving,
    analytics,
    computer_vision,
    keras,
    javascript,
    typescript,
    html,
    tensorflow,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    pytorch,
    huggingFace,
    yolo,
    opencv,
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
      title: "Machine Learning Developer",
      icon: mobile,
    },
    {
      title: "Deep Learning Developer",
      icon: deepLearning,
    },
    {
      title: "IoT engineer",
      icon: iot,
    },
    {
      title: "Computer Vision Developer",
      icon: computervision,
    },
    {
      title: "Natural Language Processing",
      icon: nlp,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Robotics",
      icon: robot,
    },
    {
      title: "AI Developer",
      icon: Artificial,
    },

  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 3",
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
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "hugging face",
      icon: huggingFace,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "yolo",
      icon: yolo,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "opencv",
      icon: opencv,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Intern",
      company_name: "MEDOC",
      icon: medoc,
      iconBg: "#383E56",
      date: "January 2023 - June 2023",
      points: [
        "Contributed to the development and optimization of machine learning models for various applications.",
        "Utilized Python and popular libraries such as TensorFlow, Keras, and scikit-learn to implement machine learning algorithms.",
        "Designed and developed a recommendation system to enhance user experience and increase engagement.",
        "Analyzed large datasets to extract meaningful insights and improve the accuracy of predictive models.",
      ],
    },
    {
      title: "Developent Intern",
      company_name: "SCIROIT Technologies",
      icon: sciroit,
      iconBg: "#E6DEDD",
      date: "March 2024 - Present",
      points: [
        {
          main: "SAATVIC (Semi-Autonomous All Terrain Vehicle for Infantry Carriage)",
          subpoints: [

            "- Developed semi-autonomous navigation system for all-terrain vehicle.",
            "- Integrated advanced sensor fusion for obstacle detection and avoidance.",
            "- Collaborated with the robotics team to enhance vehicle reliability and performance."
          ]
        },
        {
          main: "Project HEPTR (Development of AI-Based Algorithm for Helicopter Maintenance)",
          subpoints: [
            "- Created an AI-powered algorithm to analyze helicopter performance data and predict maintenance needs preemptively.",
            "- Utilized machine learning techniques to detect anomalies and patterns in sensor data related to helicopter components.",
            "- Enhanced operational readiness and reduced downtime by optimizing maintenance schedules based on predictive analytics."
          ]
        },
        {
          main: "Long Range Communication Module",
          subpoints: [
            "- Engineered a communication module capable of transmitting data over extended distances in challenging environments.",
            "- Designed to operate reliably in remote or hostile conditions, providing secure and resilient communication capabilities.",
            "- Integrated advanced signal processing techniques and encryption protocols to ensure data integrity and confidentiality over long ranges."
          ]
        },
      ],
    },
    {
      title: "Data Analytics Intern",
      company_name: "KPMG",
      icon: kpmg,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        {
          main: "Data Science and Visualization Project",
          subpoints: [

            "- Conducted extensive data cleaning, preprocessing, and feature engineering to prepare raw datasets for analysis.",
            "- Utilized Python libraries such as Pandas, Matplotlib, and Seaborn to create insightful visualizations, effectively communicating trends and patterns in the data to stakeholders.",
          ]
        },
      ],
    },
  ]
  
  const testimonials = [
    {
      testimonial:
        "Secured second place twice at Vihaan 6.0 and Vihaan 007, North India's largest hackathon at DTU.",
      name: "Vihaan",
      designation: "DTU",
    },
    {
      testimonial:
        "Secured second postion at the ideathon organized by GGSIPU main campus",
      name: "WIEHACK",
      designation: "GGSIPU",
    },
    {
      testimonial:
        "Won the cybersecurity track at the Ideaathon organized by IEEE GTBIT SB",
      name: "MakeItHappen",
      designation: "IEEE GTBIT SB",
    },
  ];
  
  const projects = [
    {
      name: "Self Driving Car",
      description:
        "A self-driving car project using neural networks which involves developing an autonomous vehicle that uses convolutional neural networks (CNNs) to process sensor data and make driving decisions.",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Neural Networks",
          color: "green-text-gradient",
        },
        {
          name: "Internet of Things",
          color: "pink-text-gradient",
        },
      ],
      image: self_driving,
      source_code_link: "https://github.com/pskamboj/Self-Driving-Car",
    },
    {
      name: "Data Analysis",
      description:
        "A data analysis report on a provided dataset which involves extracting insights through data processing and visualization. Advanced techniques are used to ensure comprehensive and accurate results.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "sci-kit learn",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: analytics,
      source_code_link: "https://github.com/pskamboj/Data-Analysis",
    },
    {
      name: "Custom Object Detection",
      description:
        "A custom object detection project using YOLO which involves training a deep learning model to accurately identify and locate specific objects within images. This includes gathering and annotating a diverse dataset with fine-tuning of the YOLO model for real-time performance and accuracy.",
      tags: [
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "YOLO v3",
          color: "green-text-gradient",
        },
        {
          name: "CV2",
          color: "pink-text-gradient",
        },
      ],
      image: computer_vision,
      source_code_link: "https://github.com/pskamboj/Custom-Object-Detection",
    },
    {
      name: "NLP based Chatbot",
      description:
        "An NLP-based chatbot project which involves developing an intelligent system capable of answering any question by scraping information from the web using automation tools. This includes designing natural language processing algorithms and utilizing web scraping with a conversational interface for seamless user interaction",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "NLTK",
          color: "green-text-gradient",
        },
        {
          name: "Selenium",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/pskamboj/NLP-Chatbot",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };