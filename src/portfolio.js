/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Kamal",
  logo_name: "kamal.s()",
  nickname: "kamal / sherawat",
  full_name: "Kamal Sherawat",
  subTitle: "Software Developer, Data Scientist 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1PHgxmMnof_OYH7qc8FaRbY4IUIgSgLlE/view?usp=sharing",
  mail: "mailto:kamal3@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sherawatkamal",
  linkedin: "https://www.linkedin.com/in/kamalsherawat/",
  gmail: "kamalsherawat3@gmail.com",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  // twitter: "https://twitter.com/Harikrushn9",
  instagram: "https://www.instagram.com/k4mal_sherawat/",
};

const skills = {
  data: [
    {
      title: "Data Scientist",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Strong foundation in machine learning, deep learning, and data analysis using Python, TensorFlow, PyTorch, and Scikit-learn",
        "⚡ Experienced in developing end-to-end data-driven applications, from preprocessing and modeling to deployment",
        "⚡ Proficient in data visualization using Matplotlib, Seaborn, and Tableau to extract insights and support decision-making",
        "⚡ Expertise in Computer Vision with CNN architectures (VGG16, ResNet) and deep learning models",
        "⚡ Skilled in Natural Language Processing using RNN, LSTM architectures with GloVe embeddings",
        "⚡ Experience in multi-modal AI tasks including image classification, segmentation, and time-series analysis",
        "⚡ Proficient in Generative AI including Large Language Models (LLMs), GANs, and Diffusion Models",
        "⚡ Skilled in Transfer Learning and Reinforcement Learning for advanced AI applications",
        "⚡ Experience with Hugging Face Transformers and modern AI frameworks for model development",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Computer Vision",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Neural Networks",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "CNN/RNN",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FF9F00",
          },
        },
        {
          skillName: "Generative AI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Transfer Learning",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive front-end user interfaces for web and mobile applications",
        "⚡ Build responsive website front ends using ReactJS, Next.js, and modern JavaScript frameworks",
        "⚡ Create immersive 3D web experiences using Three.js and WebXR technologies",
        "⚡ Develop robust application backends using Node.js, Express.js, and C# with ASP.NET",
        "⚡ Design and implement RESTful APIs with seamless integration and authentication",
        "⚡ Proficient in UI/UX design using Figma and responsive design with Bootstrap and Tailwind CSS",
        "⚡ Experience with web hosting platforms including Netlify, Vercel, and GitHub Pages",
        "⚡ Skilled in API development, integration, and third-party service integration",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ElectronJS",
          fontAwesomeClassname: "simple-icons:electron",
          style: {
            color: "#47848F",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java-wordmark",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#000000",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon-plain:csharp",
          style: {
            color: "#68217A",
          },
        },
        {
          skillName: "ASP.NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "skill-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Firebase Realtime DB",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Unreal Engine",
          fontAwesomeClassname: "simple-icons:unrealengine",
          style: {
            color: "#0E0E0E",
          },
        },
        {
          skillName: "Cloud Functions",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "WebXR",
          fontAwesomeClassname: "simple-icons:webxr",
          style: {
            color: "#FF6B35",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Three.js",
          fontAwesomeClassname: "simple-icons:threejs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "API Integration",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Web Hosting",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virginia Tech",
      subtitle: "MS in Computer Engineering",
      logo_path: "VirginiaTech_logo_rotated.png",
      alt_name: "SSEC",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Master's program focusing on Advanced Machine Learning, Computer Vision, Deep Learning, and Neural Networks.",
        "⚡ Implemented several projects based on coursework, including AI/ML applications and research projects.",
        "⚡ Served as Graduate Teaching and Research Assistant, teaching and mentoring students in Machine Learning.",
        "⚡ Conducted research in Neural Archaeology and Dynamic CNNs for multi-modal tasks and image captioning.",
      ],
      website_link: "https://www.vt.edu/",
    },
    {
      title: "Sushant University, Delhi",
      subtitle: "B.tech in computer science and engineering",
      logo_path: "sushant_logo.png",
      alt_name: "SSGC",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Bachelor's program covering core subjects including Data Structures, DBMS, Networking, Security, and Software Engineering.",
        "⚡ Completed various online courses and certifications for Backend, Web, and Mobile App Development.",
        "⚡ Implemented several projects based on coursework, including web applications and software development projects.",
      ],
      website_link: "https://sushantuniversity.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "Hack The Mountains",
    //   logo_path: "hackathon1.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "Coursera",
      logo_path: "Coursera_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/48FXDW9E5AZB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Coursera",
      color_code: "#2AAFED",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap",
      subtitle: "Coursera",
      logo_path: "Coursera_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WBKD6AF7WACF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Coursera",
      color_code: "#2AAFED",
    },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "AltCtrl University Hackathon - 1st Place",
      subtitle: "University Hackathon",
      logo_path: "hackathon1.svg",
      certificate_link: "#",
      alt_name: "Hackathon Winner",
      color_code: "#FFD700",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "With over three years of experience in full-stack development, machine learning, and computer vision, I've led and contributed to real-world projects, often independently. My expertise spans from web development with React/Next.js to AI/ML applications, including CNN architectures, image captioning, and multi-modal tasks. I also enjoy sharing knowledge through technical workshops, peer learning sessions, and academic research.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Graduate Teaching and Research Assistant",
          company: "Virginia Tech",
          company_url: "https://www.vt.edu/",
          logo_path: "VirginiaTech_logo.png",
          duration: "Aug 2025 - Present",
          location: "Blacksburg, Virginia",
          description: `Taught and mentored students in Machine Learning by clarifying concepts, addressing doubts, and evaluating assignments/projects with constructive feedback. Conduct research in Neural Archaeology, analyzing neural network representations to improve interpretability and uncover insights into model behavior and architecture.`,
          color: "#831e3f",
        },
        {
          title: "Software Engineer",
          company: "fAIshion Inc",
          company_url: "#",
          logo_path: "uts_logo.svg",
          duration: "June 2025 - Aug 2025",
          location: "Virginia, USA",
          description: `Built web-based tools and a dashboard using modern JavaScript frameworks to visualize and explore bibliometric and publication data for research impact analysis. Collaborated with academic researchers and data teams to integrate APIs and automate the retrieval, processing, and presentation of scholarly metrics and research output trends.`,
          color: "#FF6B6B",
        },
        {
          title: "Web Developer",
          company: "Universal Technical Systems",
          company_url: "#",
          logo_path: "uts_logo.svg",
          duration: "Nov 2021 - June 2024",
          location: "Delhi, India",
          description: `Migrated a desktop app to a scalable ReactJS + C# web platform and built an ML-based predictive maintenance system, cutting load times by 35% and improving detection accuracy by 85%. Created RESTful APIs and optimized MySQL databases, boosting scalability and speeding up data retrieval.`,
          color: "#0071C5",
        },

        // {
        //   title: "Node.js Backend Developer",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Dec 2022",
        //   location: "Surat, Gujarat",
        //   description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
        //   Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        {
          title: "ReactJS Developer",
          company: "Polyvalent Digital Services",
          company_url: "https://polyvalent.co.in/",
          logo_path: "polyvalent_logo.png",
          duration: "July 2021 - Oct 2021",
          location: "Gurugram, Delhi",
          description: `My contributions to the company's software development efforts helped establish Polyvalent as a trusted and reliable software provider delivering real value to clients. I developed the frontend of a website using ReactJS and Redux, ensured responsiveness and compatibility across various devices and platforms, debugged issues to maintain website stability, and collaborated closely with the design team to align functionality with the client's vision.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0391dc",
        },
        {
          title: "Web Developer (Freelancer)",
          company: "Legions Inc",
          company_url: "https://legionsinc.net/",
          logo_path: "legions_logo.png",
          duration: "April 2019 - Aug 2019",
          location: "New Delhi, Delhi",
          description: `As a freelancer, I helped my client, Legions Inc., establish a strong online presence by designing and developing a custom WordPress portfolio website. I assisted in selecting a suitable hosting provider, set up the website on the server, and implemented necessary security measures. The project included designing layouts, graphics, and a user-friendly interface tailored to their brand. By working closely with the client to understand their requirements, I delivered a solution that met their expectations and helped them reach a wider audience, ultimately supporting their business growth.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#5ebcc1",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Wordpress Developer",
          company: "UPAY NGO",
          company_url: "https://www.upay.org.in/",
          logo_path: "upay_logo.png",
          duration: "June 2020 - Sept 2020",
          location: "Work from Home",
          description:
            "I worked closely with the UPAY team to design and develop an easy-to-use, secure, and scalable e-commerce website (sabkasaman.com) to empower underprivileged individuals by providing them a platform to sell their products online. Using WordPress and WooCommerce, I created the website layout, graphics, and user interface, conducted regular testing, and resolved issues to ensure stability. This initiative directly supported UPAY's mission of promoting socio-economic development and community empowerment.",
          color: "#ff7f27",
        }
        // {
        //   title: "Google Local Guide",
        //   company: "Google Map",
        //   company_url: "https://maps.google.com/localguides/",
        //   logo_path: "localguide.png",
        //   duration: "Sep 2018 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "E. F. I. Student Volunteer",
        //   company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "efi.png",
        //   duration: "Apr 2017 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //   color: "#5a900f",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. My best experience is in creating Python Scripts and React Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kamal_s.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently, but when I do something awesome, I try to document it so it can be helpful to others. I write on Twitter.",
    // link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Advance Spring Design Web",
      description:
        "Transformed an outdated desktop app into a modern web-based platform by developing a responsive ReactJS frontend with Redux and implementing a C# backend, featuring Matplotlib for interactive visualizations and Three.js for immersive, real-time 3D rendering to significantly enhance user experience.",
      languages: [
        { name: "ReactJS", iconifyClass: "logos-react" },
        { name: "Redux", iconifyClass: "skill-icons:redux" },
        { name: "C#", iconifyClass: "devicon:csharp" },
        { name: "Three.js", iconifyClass: "simple-icons:threejs" },
        { name: "Matplotlib", iconifyClass: "simple-icons:matplotlib" }
      ],
      links: []
    },
    {
      id: "1",
      name: "Anime Character Generator",
      description:
        "Developed a DCGAN with TensorFlow to generate anime faces. Used OpenCV for preprocessing and Matplotlib for training visualization.",
      languages: [
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "OpenCV", iconifyClass: "simple-icons:opencv" },
        { name: "NumPy", iconifyClass: "logos:numpy" },
        { name: "CUDA", iconifyClass: "logos:nvidia" }
      ],
      links: []
    },
    {
      id: "2",
      name: "UTS Website",
      description:
        "Built and maintained the official UTS website using Vue.js. Ensured performance, accessibility, and service content updates.",
      languages: [
        { name: "HTML5", iconifyClass: "logos-html-5" },
        { name: "CSS3", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Vue.js", iconifyClass: "logos-vue" }
      ],
      links: []
    },
    {
      id: "3",
      name: "CalcEdge Website",
      description:
        "Developed the CalcEdge website with Vue.js for responsive UI and seamless user experience. Maintained performance and reliability.",
      languages: [
        { name: "HTML5", iconifyClass: "logos-html-5" },
        { name: "CSS3", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Vue.js", iconifyClass: "logos-vue" }
      ],
      links: []
    },
    {
      id: "4",
      name: "fAIshion.AI Virtual Try-On",
      description:
        "Developed a browser extension using React, JavaScript, and WebAssembly that leverages AI-driven machine learning and computer vision models with third-party APIs to enable virtual try-on, size recommendations, and discount matching across e-commerce platforms.",
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "WebAssembly", iconifyClass: "simple-icons:webassembly" },
        { name: "AI/ML", iconifyClass: "simple-icons:tensorflow" }
      ],
      links: []
    },
    {
      id: "5",
      name: "Image Captioning with CNN-RNN",
      description:
        "Created an image captioning model that uses VGG16 and LSTM with GloVe embeddings to generate accurate, natural captions for the Flickr8k dataset, achieving strong BLEU, METEOR, and ROUGE-L scores.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "VGG16", iconifyClass: "simple-icons:keras" },
        { name: "LSTM", iconifyClass: "simple-icons:tensorflow" },
        { name: "GloVe", iconifyClass: "simple-icons:spacy" }
      ],
      links: []
    },   
    {
      id: "6",
      name: "YOG4LIFE SOCIAL APP",
      // url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
      ],
    },
    // {
    //   id: "2",
    //   name: "Adoptisity",
    //   url: "https://github.com/kevalvavaliya/Adoptisity",
    //   description:
    //     "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Wix",
    //       iconifyClass: "bxl:wix",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Adoptisity",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/adoptisity",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://rajmahadevwala1.wixsite.com/adoptisity",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "FinSplit",
    //   url: "https://github.com/rajmahadev8/Fin-Split",
    //   description:
    //     "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/rajmahadev8/Fin-Split",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/finsplit",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Emosic",
    //   url: "https://github.com/kevalvavaliya/Emosic",
    //   description:
    //     "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/kevalvavaliya/Emosic",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/emosic",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Fileblok",
    //   url: "https://github.com/harikanani/Fileblok",
    //   description:
    //     "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Storyblok",
    //       iconifyClass: "logos-storyblok-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Fileblok",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/fileblok",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "BAUDDIK-GEEKS PORTFOLIO",
    //   url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    //   description:
    //     "Awesome Community Portfolio website for Bauddhik-Geeks community",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://bauddhikgeeks.co/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Votechain",
    //   url: "https://github.com/abhigoyani/votechain",
    //   description:
    //     "Awesome Community Portfolio website for Bauddhik-Geeks community",
    //   languages: [
    //     {
    //       name: "Flask",
    //       iconifyClass: "logos-flask",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/abhigoyani/votechain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    {
      id: "7",
      name: "AltCtrl University Hackathon - 1st Place",
      description:
        "1st place winner - Social media platform for university students to share notes, lecture videos, and doubts using React.js, Redux, and MongoDB.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
          iconifyClass: "skill-icons:redux",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        }
      ],
      links: [
      ],
    },
    {
      id: "8",
      name: "Dynamic CNNs for Multi-Modal Tasks",
      description:
        "Conducted a comparative study on ResNet-18-based CNN models using hard attention, soft attention, and omni-directional convolution, testing their performance on image classification, segmentation, and time-series tasks, where OD-CNN delivered the best accuracy and mIoU results.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ResNet-18",
          iconifyClass: "simple-icons:tensorflow",
        },
        {
          name: "Attention",
          iconifyClass: "simple-icons:keras",
        },
        {
          name: "Computer Vision",
          iconifyClass: "simple-icons:opencv",
        }
      ],
      links: [
      ],
    },
    {
      id: "9",
      name: "Swag Store",
      // url: "https://github.com/harikanani/e-commerce-frontend",
      description:
        "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MedusaJS",
          iconifyClass: "logos-medusa-icon",
        },
      ],
      links: [

      ],
    },
    // {
    //   id: "9",
    //   name: "node-blockchain",
    //   url: "https://github.com/harikanani/node-blockchain",
    //   description:
    //     "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "TypeScript",
    //       iconifyClass: "skill-icons:typescript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/node-blockchain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Know Me Well",
    //   url: "https://github.com/harikanani/personal-portfolio",
    //   description:
    //     "A simple command line interface based quiz app to know more about me :).",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Repl.it",
    //       iconifyClass: "logos-replit-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/personal-portfolio",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Bloggify",
    //   url: "https://github.com/harikanani/Bloggify",
    //   description: "A Simple REST API for Blog Application.",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Bloggify",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "Stargazzers",
    //   url: "https://github.com/harikanani/stargazers",
    //   description: "An Unofficial API for GitHub Repo Stars Count",
    //   languages: [
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/stargazers",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "13",
    //   name: "GitHub Theme Portfolio",
    //   url: "https://github.com/harikanani/harikanani.github.io",
    //   description:
    //     "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "SCSS",
    //       iconifyClass: "vscode-icons:file-type-scss2",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/harikanani.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://harikanani.github.io/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "COVID-19 Tracker",
    //   url: "https://github.com/harikanani/Covid19TrackerReact",
    //   description:
    //     "Simple Covid-19 Tracker made using React and deployed to Vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Covid19TrackerReact",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};



export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
