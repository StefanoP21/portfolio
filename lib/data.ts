import React from "react";
import {
  FaReact,
  FaCode,
  FaTrello,
  FaSlack,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoFigma,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiVisualstudiocode,
  SiPostman,
  SiGnubash,
  SiWebstorm,
  SiFirebase,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiClickup,
  SiOpenai,
} from "react-icons/si";
import { FaGitAlt, FaHospitalUser } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";

import dashboard from "@/public/dashboard.png";
import pawsitive from "@/public/pawsitive.png";
import apuchay from "@/public/apuchay.png";
import calendar from "@/public/calendar.png";
import journal from "@/public/journal.png";
import tarotspa from "@/public/tarotspa.png";
import growth from "@/public/growth.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Recursos",
    hash: "#tools",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: React.createElement(BiLogoJavascript),
    color: "#facc15",
  },
  {
    name: "TypeScript",
    icon: React.createElement(BiLogoTypescript),
    color: "#3b82f6",
  },
  {
    name: "React",
    icon: React.createElement(FaReact),
    color: "#0ea5e9",
  },
  {
    name: "React Router",
    icon: React.createElement(SiReactrouter),
    color: "#ef4444",
  },
  {
    name: "Redux",
    icon: React.createElement(SiRedux),
    color: "#a78bfa",
  },
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs),
    color: "#030712",
  },
  {
    name: "Node.js",
    icon: React.createElement(FaNodeJs),
    color: "#059669",
  },
  {
    name: "Express",
    icon: React.createElement(SiExpress),
    color: "#93c5fd",
  },
  {
    name: "NestJS",
    icon: React.createElement(SiNestjs),
    color: "#e535ab",
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(BiLogoPostgresql),
    color: "#316192",
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
    color: "#059669",
  },
  {
    name: "Tailwind CSS",
    icon: React.createElement(SiTailwindcss),
    color: "#06b6d4",
  },
  {
    name: "Jest",
    icon: React.createElement(SiJest),
    color: "#db2777",
  },
  {
    name: "Testing Library",
    icon: React.createElement(SiTestinglibrary),
    color: "#dc2626",
  },
] as const;

export const toolsData = [
  {
    name: "VS Code",
    icon: React.createElement(SiVisualstudiocode),
    color: "#3b82f6",
  },
  {
    name: "Webstorm",
    icon: React.createElement(SiWebstorm),
    color: "#0ea5e9",
  },
  {
    name: "Postman",
    icon: React.createElement(SiPostman),
    color: "#fb923c",
  },
  {
    name: "Docker",
    icon: React.createElement(FaDocker),
    color: "#0696d7",
  },
  {
    name: "Firebase",
    icon: React.createElement(SiFirebase),
    color: "#fbbf24",
  },
  {
    name: "Amazon Web Services",
    icon: React.createElement(FaAws),
    color: "#ff9900",
  },
  {
    name: "Bash",
    icon: React.createElement(SiGnubash),
    color: "#f43f5e",
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt),
    color: "#ea580c",
  },
  {
    name: "OpenAI",
    icon: React.createElement(SiOpenai),
    color: "#ef4444",
  },
  {
    name: "Github Copilot",
    icon: React.createElement(GoCopilot),
    color: "#9333ea",
  },
  {
    name: "Slack",
    icon: React.createElement(FaSlack),
    color: "#16a34a",
  },
  {
    name: "ClickUp",
    icon: React.createElement(SiClickup),
    color: "#7b93ff",
  },
  {
    name: "Trello",
    icon: React.createElement(FaTrello),
    color: "#1d4ed8",
  },
  {
    name: "Figma",
    icon: React.createElement(BiLogoFigma),
    color: "#db2777",
  },
] as const;

export const experiencesData = [
  {
    title: "OpenMed",
    position: "Desarrollador Full-Stack Junior",
    location: "Lima, Perú",
    description:
      "Implementé y colaboré en el diseño de nuevas funcionalidades para dashboard administrativos y landing page de la marca utilizando Next.js. Además desarrollé API's para respaldar la funcionalidad del sistema utilizando NestJS y participé en los despliegues de la aplicación en AWS.",
    date: "2024 - Presente",
    icon: React.createElement(FaHospitalUser),
    color: "#0ea5e9",
  },
  {
    title: "Hackathon CGR-2023",
    position: "Desarrollador Full-Stack",
    location: "Lima, Perú",
    description:
      "Construí una aplicación web con React para ayudar al control gubernamental de las obras públicas en el contexto del Fenómeno del Niño Costero, como propuesta de solución al desafío planteado por la Contraloría General de la República del Perú.",
    icon: React.createElement(FaCode),
    date: "2023",
    color: "#ef4444",
  },
] as const;

export const projectsData = [
  {
    title: "Dashboard Joyería",
    description: "Aplicación web para gestión de inventario y ventas de una joyería. El dashboard cuenta con un backend para la autenticación de usuarios y API\'s para las operaciones CRUD.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "TanStack Query",
      "Shadcn/ui",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    imageUrl: dashboard,
    demoUrl: "https://front-jewelry-black.vercel.app/",
    githubUrl: "https://github.com/StefanoP21/front-jewelry",
  },
  {
    title: "PawSitive",
    description: "Aplicación web para el cuidado de mascotas pequeñas. La aplicación cuenta con un catálogo de lugares pet-friendly, hóteles y cuidadores privados.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Shadcn/ui",
      "Tailwind CSS",
    ],
    imageUrl: pawsitive,
    demoUrl: "https://pawsitive-app-alpha.vercel.app/",
    githubUrl: "https://github.com/StefanoP21/pawsitive-app",
  },
  {
    title: "Apuchay",
    description:
      "Aplicación web para mejorar el control de las obras públicas. La aplicación cuenta con un backend para la gestión de usuarios, protección de rutas y un catálogo de cursos.",
    tags: [
      "TypeScript",
      "React",
      "React Router",
      "TanStack Query",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageUrl: apuchay,
    demoUrl: "https://apuchay.vercel.app/",
    githubUrl: "https://github.com/StefanoP21/apuchay",
  },
  {
    title: "Calendar App",
    description:
      "Aplicación web para gestionar eventos. La aplicación cuenta con un backend para la autenticación de usuarios, protección de rutas y manejo de eventos.",
    tags: [
      "JavaScript",
      "React",
      "React Router",
      "Redux Toolkit",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    imageUrl: calendar,
    demoUrl: "https://calendar-app-v1.vercel.app/",
    githubUrl: "https://github.com/StefanoP21/calendar-app",
  },
  {
    title: "Journal App",
    description:
      "Aplicación web para escribir notas personales. La aplicación cuenta con un sistema de autenticación de usuarios, protección de rutas y operaciones CRUD para las notas.",
    tags: [
      "JavaScript",
      "React",
      "React Router",
      "Redux Toolkit",
      "Material UI",
      "Firebase",
    ],
    imageUrl: journal,
    demoUrl: "https://journal-v1.vercel.app/",
    githubUrl: "https://github.com/StefanoP21/journal-app",
  },
  {
    title: "Tarot Cards",
    description:
      "Aplicación web para leer cartas de tarot con temática CyberPunk 2077. La aplicación cuenta con un sistema de lectura y búsqueda de cartas. Además, cuenta con protección de rutas.",
    tags: ["JavaScript", "React", "React Router", "Tailwind CSS"],
    imageUrl: tarotspa,
    demoUrl: "https://tarot-spa.vercel.app/",
    githubUrl: "https://github.com/StefanoP21/tarot-spa",
  },
  {
    title: "Growth App",
    description:
      "Landing page para una startup de dashboards online. La aplicación cuenta con una interfaz moderna y un diseño responsivo. Además, cuenta con un múltiples efectos de interacción para el usuario.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: growth,
    demoUrl: "https://stefanop21.github.io/saas-website/",
    githubUrl: "https://github.com/StefanoP21/saas-website",
  },
] as const;
