import React from 'react';
import {
  FaReact,
  FaAngular,
  FaJava,
  FaBootstrap,
  FaCode,
} from 'react-icons/fa';
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoFigma,
} from 'react-icons/bi';
import {
  SiNextdotjs,
  SiPhp,
  SiSpring,
  SiMicrosoftsqlserver,
  SiTailwindcss,
  SiChakraui,
  SiJest,
  SiTestinglibrary,
  SiVisualstudiocode,
  SiPostman,
  SiGnubash,
  SiWebstorm,
  SiIntellijidea,
} from 'react-icons/si';
import { GrMysql, GrOracle } from 'react-icons/gr';
import { DiScrum } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa6';

import coffehunter from '@/public/coffehunter.jpg';
import smartbank from '@/public/smartbank.jpg';
import teambuilder from '@/public/teambuilder.jpg';

export const links = [
  {
    name: 'Inicio',
    hash: '#home',
  },
  {
    name: 'Habilidades',
    hash: '#skills',
  },
  {
    name: 'Recursos',
    hash: '#tools',
  },
  {
    name: 'Experiencia',
    hash: '#experience',
  },
  {
    name: 'Projectos',
    hash: '#projects',
  },
  {
    name: 'Contacto',
    hash: '#contact',
  },
] as const;

export const skillsData = [
  {
    name: 'JavaScript',
    icon: React.createElement(BiLogoJavascript),
    color: '#facc15',
  },
  {
    name: 'TypeScript',
    icon: React.createElement(BiLogoTypescript),
    color: '#3b82f6',
  },
  {
    name: 'React',
    icon: React.createElement(FaReact),
    color: '#0ea5e9',
  },
  {
    name: 'Next.js',
    icon: React.createElement(SiNextdotjs),
    color: '#030712',
  },
  {
    name: 'Angular',
    icon: React.createElement(FaAngular),
    color: '#ef4444',
  },
  {
    name: 'Java',
    icon: React.createElement(FaJava),
    color: '#f43f5e',
  },
  {
    name: 'Spring',
    icon: React.createElement(SiSpring),
    color: '#10b981',
  },
  {
    name: 'PHP',
    icon: React.createElement(SiPhp),
    color: '#8b5cf6',
  },
  {
    name: 'MySQL',
    icon: React.createElement(GrMysql),
    color: '#2563eb',
  },
  {
    name: 'SQL Server',
    icon: React.createElement(SiMicrosoftsqlserver),
    color: '#ef4444',
  },
  {
    name: 'Git',
    icon: React.createElement(FaGitAlt),
    color: '#ea580c',
  },
  {
    name: 'Bootstrap',
    icon: React.createElement(FaBootstrap),
    color: '#9333ea',
  },
  {
    name: 'Tailwind CSS',
    icon: React.createElement(SiTailwindcss),
    color: '#06b6d4',
  },
  {
    name: 'Chakra UI',
    icon: React.createElement(SiChakraui),
    color: '#10b981',
  },
  {
    name: 'Jest',
    icon: React.createElement(SiJest),
    color: '#db2777',
  },
  {
    name: 'Testing Library',
    icon: React.createElement(SiTestinglibrary),
    color: '#dc2626',
  },
] as const;

export const toolsData = [
  {
    name: 'VS Code',
    icon: React.createElement(SiVisualstudiocode),
    color: '#2563eb',
  },
  {
    name: 'Webstorm',
    icon: React.createElement(SiWebstorm),
    color: '#0ea5e9',
  },
  {
    name: 'IntelliJ',
    icon: React.createElement(SiIntellijidea),
    color: '#dc2626',
  },
  {
    name: 'Postman',
    icon: React.createElement(SiPostman),
    color: '#fb923c',
  },
  {
    name: 'Bash',
    icon: React.createElement(SiGnubash),
    color: '#030712',
  },
  {
    name: 'Figma',
    icon: React.createElement(BiLogoFigma),
    color: '#9333ea',
  },
  {
    name: 'Scrum',
    icon: React.createElement(DiScrum),
    color: '#16a34a',
  },
] as const;

export const experiencesData = [
  {
    title: 'Oracle Next Education',
    location: 'Lima, Perú',
    description:
      'Me gradué después de 8 meses de aprendizaje intensivo en el programa Oracle Next Education (ONE). Aprendí sobre programación con JavaScript, desarrollo Frontend con React, bases de datos relacionales con MySQL y control de versiones con Git. Además, aprendí sobre metodologías ágiles y trabajo en equipo. ',
    icon: React.createElement(GrOracle),
    date: '2023',
    color: '#ef4444',
  },
  {
    title: 'Hackathon CGR-2023',
    location: 'Lima, Perú',
    description:
      'Construí una aplicación web en React para ayudar al control gubernamental de las obras públicas en el contexto del Fenómeno del Niño Costero, como propuesta de solución al desafío planteado por la Contraloría General de la República del Perú.',
    icon: React.createElement(FaCode),
    date: '2023',
    color: '#0ea5e9',
  },
] as const;

export const projectsData = [
  {
    title: 'Apuchay',
    description:
      'Aplicación web para mejorar el control de las obras públicas. La aplicación cuenta con una interfaz orientada al ciudadano común. Además, cuenta con un sistema de reportes de obras y cursos de capacitación online.',
    tags: ['React', 'Chakra UI', 'JavaScript'],
    imageUrl: teambuilder,
    demoUrl: 'https://registro-personal-org.vercel.app/',
    githubUrl: 'https://github.com/StefanoP21/registro-personal-org',
  },
  {
    title: 'Organizador de Equipos',
    description:
      'Aplicación web para ayudar en la organización de equipos de trabajo. La aplicación permite crear plantillas de personal y asignarlos a un equipo. Etiqueta miembros favoritos y eliminalos.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: teambuilder,
    demoUrl: 'https://registro-personal-org.vercel.app/',
    githubUrl: 'https://github.com/StefanoP21/registro-personal-org',
  },
  {
    title: 'Smart Bank',
    description:
      'Aplicación web para la gestión de finanzas personales. La aplicación simula un estado de cuenta bancario y cuenta con funcionalidades para ocultar y mostrar el saldo, así como cambiar el tema.',
    tags: ['React', 'JavaScript', 'HTML'],
    imageUrl: smartbank,
    demoUrl: 'https://smart-bank-liard.vercel.app/',
    githubUrl: 'https://github.com/StefanoP21/smart-bank',
  },
  {
    title: 'CoffeHunter',
    description:
      'Aplicación web para una marca de café peruana. La aplicación web cuenta con un catálogo de productos, una galería de fotos, un formulario de contacto y un CRUD para administrar los productos. ',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    imageUrl: coffehunter,
    demoUrl: 'https://stefanop21.github.io/coffehunter-responsive/',
    githubUrl: 'https://github.com/StefanoP21/coffehunter-responsive',
  },
] as const;
