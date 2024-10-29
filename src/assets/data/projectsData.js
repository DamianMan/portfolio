import cilentodamare from "../../assets/cilentodamare.png";
import rubenboats from "../../assets/rubenboats.png";
import freebuys from "../../assets/freebuys.png";
import bluesoul from "../../assets/bluesoul.png";
import djangoBlog from "../../assets/django-blog.png";

const projectsData = [
  {
    name: "Cilento damare",
    website: "https://cilentodamare.eu/",
    github: "https://github.com/DamianMan/cilento-damare",
    image: cilentodamare,
    description:
      "I developed a comprehensive Flask-based application tailored for a Boat Tour Company, featuring an advanced reservation system, secure Stripe payment gateway, and multilingual support across three languages. The project includes secure admin access through authentication for efficient management. Utilizing PostgreSQL for robust data handling and RESTful APIs to ensure seamless frontend-backend communication, the platform achieved significant traffic growth, attracting 10.5K visitors in a single month (August 2023). Recognized by a leading Italian Tour Operator for its engaging design and intuitive user experience, the site received positive feedback for its ease of navigation and visual appeal, boosting user engagement. The application is securely deployed on an IONOS VPN private server.",
    tech: [
      "Python",
      "Javascript",
      "Flask",
      "Flask-Login",
      "Authentication",
      "PostgreSQL",
      "Stripe",
      "Ionos VPN",
      "Bootstrap 5.3",
      "Jinja",
      "RESTful APIs",
    ],
  },
  {
    name: "Blue Soul",
    website: "https://github.com/DamianMan/blue-soul",
    github: "https://github.com/DamianMan/blue-soul",
    image: bluesoul,
    description:
      "I developed a mobile application using React Native, designed to provide an intuitive and seamless user experience. The app is powered by a robust backend built with Node.js, Express, and MongoDB, utilizing RESTful APIs for efficient data handling and communication between the frontend and backend. Firebase Authentication ensures secure user access, while Expo and Expo Notifications provide real-time updates and alerts. Currently in the testing phase, the app is almost ready for deployment, with a focus on delivering a high-quality, secure, and engaging user experience.",
    tech: [
      "Javascript",
      "React Native",
      "Node",
      "Express",
      "MongoDB",
      "RESTful APIs",
      "Firebase Authentication",
      "Expo",
      "Expo Notification",
    ],
  },
  {
    name: "Cilento Ruben Boats",
    website: "https://cilentorubenboats.it/",
    github: "https://github.com/DamianMan/ruben-boats",
    image: rubenboats,
    description:
      "I developed a user-friendly boat rental website using React and Node.js, featuring a flexible booking system that offers skipper-led rentals, self-handled rentals, and guided coastal tours. The platform is powered by RESTful APIs and includes a robust admin panel, allowing for streamlined backend management. MongoDB is used for dynamic data handling, enabling real-time control over bookings, rentals, and user management. Stripe integration ensures secure, seamless online payments, while the admin panel provides comprehensive transaction management and service configuration. Deployed on an IONOS VPS server, the project significantly enhanced accessibility and customer satisfaction.",
    tech: [
      "Javascript",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Material UI",
      "Framer Motion",
      "Stripe",
      "RESTful APIs",
      "Ionos VPN",
    ],
  },

  {
    name: "Free Buys",
    website: "https://github.com/DamianMan/free-buys",
    github: "https://github.com/DamianMan/free-buys",
    image: freebuys,
    description:
      "I developed a visually appealing e-commerce platform using the MERN stack (MongoDB, Express, React, Node.js), focusing on intuitive design and seamless navigation to enhance the shopping experience. The platform features RESTful APIs for product management, basket creation, and order processing, optimized for performance, security, and scalability. Integrated Stripe for secure payment processing, with Stripe webhooks providing real-time transaction updates, ensuring smooth, reliable payment workflows. Additionally, the platform connects to the DHL API for dynamic shipping cost calculations and accurate delivery estimates. JWT-based authentication was implemented to ensure secure user access and data protection across the platform.",
    tech: [
      "Javascript",
      "React",
      "Node",
      "Express",
      "JWT-based Authentication",
      "MongoDB",
      "Material UI",
      "Framer Motion",
      "Stripe",
      "RESTful APIs",
      "DHL APIs Integration",
    ],
  },
  {
    name: "Django Blog",
    website: "https://django-blog-aqes.onrender.com/",
    github: "https://github.com/DamianMan/django-blog",
    image: djangoBlog,
    description:
      "I developed a dynamic blog application using Django, leveraging class-based views (DetailView, TemplateView, and ListView) to efficiently render content from an integrated PostgreSQL database. The application was crafted with Django Template Language (DTL) for seamless templating, ensuring a clean and responsive user experience. I implemented one-to-many and many-to-many relationships within my models to enhance the data structure and facilitate complex interactions.      Deployed on Render, the app incorporates Cloudinary for efficient media file management, enhancing performance and scalability. For secure access, I implemented user authentication using Django’s built-in User Auth model, enabling authorized login and content interaction. Each post features a dedicated comments section, allowing users to engage with the content. Additionally, I designed a real-time group chat feature accessible only to logged-in users, fostering a sense of community within the platform.",
    tech: [
      "Django",
      "Python",
      "PostgreSQL",
      "Django Template Language (DTL)",
      "Class-Based Views",
      "DetailView",
      "TemplateView",
      "ListView",
      "Cloudinary",
      "User Authentication",
      "One-to-Many Relationships",
      "Many-to-Many Relationships",
      "Real-Time WebSocket Chat",
    ],
  },
];

export default projectsData;
