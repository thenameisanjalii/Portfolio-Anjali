import home_assets from "@/assets/home_assets";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I love working on things that feel right, solve problems, and make someone’s day a bit easier.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: home_assets.b1,
    spareImg: "",
  },
  {
    id: 2,
    title:
      "With a clear mind and a learner’s heart, I stay focused on solving problems that actually matter.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Sharpening what I know, exploring what I don’t.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Every project is a chance to learn something new—and I never miss that chance.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: home_assets.grid,
    spareImg: home_assets.b4,
  },
  {
    id: 5,
    title: "Actively working on hands-on projects to sharpen my portfolio",
    description: "Behind the Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: home_assets.b5,
    spareImg: home_assets.grid,
  },
  {
    id: 6,
    title: "Ready to create something extraordinary together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "Axen Studio Portfolio Website",
    des: "Built a responsive portfolio website for a freelance client in a team of 3 using React, TypeScript, Tailwind CSS, and Framer Motion. Showcased studio services and integrated contact form with Google Maps. Delivered a clean, fully deployed production site.",
    img: home_assets.axen_studio,
    iconLists: [
      home_assets.react,
      home_assets.node_logo,
      home_assets.express_logo,
      home_assets.mongodb_logo,
      home_assets.tailwind,
    ],
    link: "https://github.com/thenameisanjalii/Axen-Studio",
    languages: [
      {
        id: 1,
        name: "React",
        designation: "Frontend",
        image: home_assets.react,
      },
      {
        id: 2,
        name: "TypeScript",
        designation: "Frontend",
        image: home_assets.typescript, // replace with your actual TypeScript logo asset
      },
      {
        id: 3,
        name: "Tailwind CSS",
        designation: "Styling",
        image: home_assets.tailwind,
      },
      {
        id: 4,
        name: "Framer Motion",
        designation: "Animations",
        image: home_assets.framer_motion, // replace with your actual Framer logo asset
      },
    ],
  },
  {
    id: 1,
    title: "Realtime Chat App",
    des: "Developed a real-time chat app using the MERN stack, Tailwind CSS, Socket.io, and Zustand. Features include JWT authentication, live messaging, online status, and a fully responsive UI with smooth deployment.",
    img: home_assets.chat_app,
    iconLists: [
      home_assets.react,
      home_assets.node_logo,
      home_assets.express_logo,
      home_assets.mongodb_logo,
      home_assets.tailwind,
    ],
    link: "https://github.com/thenameisanjalii/fullstack-chat-app",
    languages: [
      {
        id: 1,
        name: "React",
        designation: "Frontend",
        image: home_assets.react,
      },
      {
        id: 2,
        name: "Node.js",
        designation: "Backend",
        image: home_assets.node_logo,
      },
      {
        id: 3,
        name: "Express.js",
        designation: "Backend",
        image: home_assets.express_logo,
      },
      {
        id: 4,
        name: "MongoDB",
        designation: "Database",
        image: home_assets.mongodb_logo,
      },
      {
        id: 5,
        name: "Tailwind CSS",
        designation: "Styling",
        image: home_assets.tailwind,
      },
    ],
  },
  {
    id: 2,
    title: "AI Powered Blog App",
    des: "Built a full-stack AI-powered blog app using the MERN stack, Google Gemini API, and ImageKit. It enables admins to manage blogs with AI-generated content, image uploads, and user comments, all within a secure, responsive dashboard.",
    img: home_assets.aiblogify,
    iconLists: [
      home_assets.react,
      home_assets.node_logo,
      home_assets.express_logo,
      home_assets.mongodb_logo,
      home_assets.socket,
    ],
    link: "https://github.com/thenameisanjalii/AIBlogify",
    languages: [
      {
        id: 1,
        name: "React",
        designation: "Frontend",
        image: home_assets.react,
      },
      {
        id: 2,
        name: "Node.js",
        designation: "Backend",
        image: home_assets.node_logo,
      },
      {
        id: 3,
        name: "Express.js",
        designation: "Backend",
        image: home_assets.express_logo,
      },
      {
        id: 4,
        name: "MongoDB",
        designation: "Database",
        image: home_assets.mongodb_logo,
      },
      {
        id: 4,
        name: "Socket.io",
        designation: "Real-time",
        image: home_assets.socket,
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: home_assets.cloud,
    nameImg: home_assets.cloudName,
  },
  {
    id: 2,
    name: "appwrite",
    img: home_assets.app,
    nameImg: home_assets.appName,
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: home_assets.host,
    nameImg: home_assets.hostName,
  },
  {
    id: 4,
    name: "stream",
    img: home_assets.stream,
    nameImg: home_assets.streamName,
  },
  {
    id: 5,
    name: "docker.",
    img: home_assets.dock,
    nameImg: home_assets.dockerName,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: home_assets.git,
    link: "https://github.com/thenameisanjalii",
  },
  {
    id: 2,
    img: home_assets.insta,
    link: "https://www.instagram.com/thenameisanjalii/",
  },
  {
    id: 3,
    img: home_assets.link,
    link: "https://www.linkedin.com/in/thenameisanjalii/",
  },
];
