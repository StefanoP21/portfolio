import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

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

export const experiencesData = [
  {
    title: 'Hackathon CGR-2023',
    location: 'Lima, Perú',
    description:
      'Aplicación web para el primer hackathon de la Contraloría General de la República del Perú. La aplicación web permite a los ciudadanos reportar las obras públicas en el contexto del Fenómeno del Niño Costero y ofrece cursos de capacitación online. La aplicación web fue construida con React y Chakra UI.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Organizador de Equipos',
    description:
      'Aplicación web para ayudar en la organización de equipos de trabajo. La aplicación permite crear plantillas de personal y asignarlos a un equipo de trabajo. Asigna favoritos y elimina miembros del equipo.',
    tags: ['React'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Smart Bank',
    description:
      'Aplicación web para la gestión de finanzas personales. La aplicación simula un estado de cuenta bancario y cuenta con funcionalidades para ocultar y mostrar el saldo, así como cambiar el tema de la aplicación.',
    tags: ['React'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'CoffeHunter',
    description:
      'Aplicación web para una marca de café peruana. La aplicación web cuenta con un catálogo de productos, una galería de fotos, un formulario de contacto y un CRUD para administrar los productos. ',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Next.js',
  'C#',
  '.NET',
  'Java',
  'Spring',
  'PHP',
  'MySQL',
  'Git',
  'Tailwind',
  'Bootstrap',
  'Material UI',
  'Chakra UI',
  'Jest',
  'Testing Library',
  'Figma',
] as const;
