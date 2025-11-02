// =================================================================
// 🎯 PORTFOLIO CONFIGURATION FILE
// =================================================================
// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".
// This is the ONLY file you need to edit to customize your entire portfolio!

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaFigma, FaServer, FaLinkedin } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiExpress, 
  SiMongodb, 
  SiRedux, 
  SiVercel, 
  SiPostman, 
  SiPostgresql,
  SiVite,
  SiGooglemaps
} from 'react-icons/si';
import { FiHome, FiMail } from 'react-icons/fi';
import { TbUserSquare } from 'react-icons/tb';
import { LuSquareCode } from 'react-icons/lu';

// =================================================================
// 👤 PERSONAL INFORMATION
// =================================================================
export const personalInfo = {
  // Basic Information
  name: "Amit Naik", // Your full name
  title: "Full Stack Developer", // Your professional title
  tagline: "Crafting Beautiful & Functional Web Experiences", // Hero section tagline
  description:
    "Hey, I'm Amit Naik, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.", // Hero section descripti
  // Profile
  profileImage: "/img/profilepic.webp", // Your profile picture
  profileImageAlt: "Amit Naik Profile Picture", // Alt text for profile image
  summary:
    "I'm a passionate Full-Stack Developer who enjoys building and exploring new technologies. Always learning and creating innovative solutions.", // About section summary
  location: "Mangalore, India", // Your location

  // Professional Details
  availability: "Available for new projects", // Current availability status
  experience: "2+ years of experience", // Years of experience

  // Additional Info for SEO
  keywords: [
    "Amit Naik", // Your name
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "TypeScript",
    "JavaScript",
  ],
};

// =================================================================
// 🌐 WEBSITE & SEO CONFIGURATION
// =================================================================
export const siteConfig = {
  // Website URLs
  siteUrl: "https://Amitnaik.com", // Your deployed website URL
  siteName: "Amit Naik Portfolio", // Site name for social sharing

  // SEO Description
  seoDescription:
    "Building scalable and performant web applications with modern technologies.",

  // Social Preview Image (Take a screenshot of your homepage and save as "preview.png" in public/img/)
  previewImage: "/img/preview.png",
};

// =================================================================
// 📧 CONTACT INFORMATION
// =================================================================
export const contactInfo = {
  email: "naikamit673@gmail.com", // Your email address
  whatsappNumber: "6360327386", // Your WhatsApp number (without + sign)
  whatsappMessage: "Hi! I'm interested in working with you. Can we chat?", // Default WhatsApp message

  // Web3Forms Access Key (Get it free from https://web3forms.com/)
  // Step 1: Go to https://web3forms.com/
  // Step 2: Click "Create your Access Key" and generate your free access key
  // Step 3: Copy and paste it below
  web3formsAccessKey: "65ae9f52-3985-40d4-89c0-6294921ff2a1", // Replace with your actual Web3Forms access key
};

// =================================================================
// 🔗 SOCIAL LINKS
// =================================================================
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/amitnaik03/", // Your LinkedIn profile URL
  github: "https://github.com/Amitnaik003", // Your GitHub profile URL
  resumeLink: "https://drive.google.com/file/d/1RZ2-nTvW6_veE4JcORjSj_e6uS-26NSO/view?usp=sharing", // Google Drive link to your resume
};

// =================================================================
// 🛠️ TECHNICAL SKILLS
// =================================================================
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

// =================================================================
// 🧭 NAVIGATION CONFIGURATION
// =================================================================
type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};

export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  { name: "LinkedIn", type: "link", icon: FaLinkedin, size: "18px", url: socialLinks.linkedin },
  { name: "GitHub", type: "link", icon: FaGithub, size: "18px", url: socialLinks.github },
  { name: "Resume", type: "link", icon: FaServer, size: "18px", url: socialLinks.resumeLink }
];

// =================================================================
// 💼 PROJECT PORTFOLIO
// =================================================================
export const projects = [
  {
    name: "🏡 Stayfinder",
    description: "Developed a full-stack accommodation booking platform inspired by Airbnb.",
    points: [
      "🔐 JWT Authentication: Secure user login and signup.",
      "🏠 Property Management: Hosts can add, edit, or remove listings.",
      "🧭 Smart Search: Filter stays by city, price, or amenities.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    ],
    liveLink: "#",
    githubLink: "https://github.com/Amitnaik003/StayFinder",
    image: "/img/stayfinder.png", // Update with the actual project image
  },
  {
    name: "📍Real-Time Location Tracking",
    description: "A full-stack app for real-time location sharing and tracking using Google Maps API and Socket.io.",
    points: [
      "🌍 Live Tracking: Displays users’ movement on a live map.",
      "🧭 Dynamic View: Auto-updates markers in real time.",
      "💬 Instant Sync: Uses WebSockets for live updates.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Socket.IO", icon: FaServer, color: "#010101" }, // replaced undefined SiSocketdotio
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Google Maps API", icon: SiGooglemaps, color: "#4285F4" },
    ],
    liveLink: "#",
    githubLink: "https://github.com/Amitnaik003/Real-Time-Location-Tracking-System-",
    image: "/img/location.png", // Update with the actual project image
  },
  {
    name: "💡Electronic Device Website",
    description: "Responsive website for showcasing electronic devices and applications.",
    points: [
      "🏠 Multi-page Layout: Home, Products, Applications, Clients, Support & Contact",
      "📱 Responsive Design: Optimized for all devices",
      "⚡ High Performance: Built with Vite and Tailwind CSS",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
    liveLink: "#",
    githubLink: "https://github.com/Amitnaik003/Electronic-device-website",
    image: "/img/ecom_project.png", // Update with the actual project image
  },
  {
    name: "📰 Modern Blog",
    description: "A minimalist and fully responsive blog platform built with Next.js, TypeScript, and Tailwind CSS.",
    points: [
      "🧱Component-based architecture using Next.js App Router.",
      "📱Mobile-first responsive layout.",
      "⚡Optimized performance with static generation and image optimization",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },

    ],
    liveLink: "#",
    githubLink: "https://github.com/Amitnaik003/Modren_Blog",
    image: "/img/modren_blog.png", // Update with the actual project image
  },
];

// =================================================================
// 🎓 EDUCATION INFORMATION
// =================================================================
export const education = {
  institution: "Srinivas University",
  degree: "Bachelors of Computer Science",
  cgpa: "8.25",
  duration: "2022 - 2026",
  location: "karnataka, India",
};

// =================================================================
// 💼 WORK EXPERIENCE
// =================================================================
export const experience = [
  {
    companyName: "Freelance",
    position: "Full-Stack Developer",
    duration: "Feb 2025 – Present",
    location: "",
    achievements: [
      "Built 2+ full-stack web applications using MERN stack for diverse clients",
      "Delivered high-performance, responsive solutions with exceptional UX",
    ],
  },
  {
    companyName: "Ridvig Technologies",
    position: "Full Stack Developer Intern",
    duration: "May 2025 - Jul 2025",
    location: "Remote",
    achievements: [
      "Built and maintained full-stack web applications using Django.",
      "Gained hands-on experience in backend integration and deployment.",
    ],
  }
];

// =================================================================
// 📝 ADDITIONAL CONFIGURATION
// =================================================================

// Copyright year (automatically uses current year)
export const currentYear = new Date().getFullYear();
