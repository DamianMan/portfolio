const cilentodamare = require("../../assets/cilentodamare.png");
const rubenboats = require("../../assets/rubenboats.png");
const freebuys = require("../../assets/freebuys.png");
const bluesoul = require("../../assets/bluesoul.png");

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
];

export default projectsData;
