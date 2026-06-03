import type { Locale } from '../i18n/dictionaries';

export interface TimelineItem {
  year: string;
  tag: string;
  title: Record<Locale, string>;
  detail: Record<Locale, string>;
}

export const timeline: TimelineItem[] = [
  {
    year: '2017',
    tag: 'school',
    title: {
      es: 'Inicio del secundario',
      en: 'High school begins',
    },
    detail: {
      es: 'Instituto General San Martín.',
      en: 'Instituto General San Martín.',
    },
  },
  {
    year: '2022',
    tag: 'school',
    title: {
      es: 'Fin del secundario',
      en: 'High school finished',
    },
    detail: {
      es: 'Promedio final 7.9. Decido orientarme al desarrollo de software.',
      en: 'Final GPA 7.9. Decided to focus on software development.',
    },
  },
  {
    year: '2023',
    tag: 'degree',
    title: {
      es: 'Empiezo Ing. en Software',
      en: 'Software Engineering degree',
    },
    detail: {
      es: 'Universidad Siglo 21. Primeros proyectos en Python y Java.',
      en: 'Universidad Siglo 21. First Python and Java projects.',
    },
  },
  {
    year: '2024',
    tag: 'course',
    title: {
      es: 'Curso avanzado de Java',
      en: 'Advanced Java course',
    },
    detail: {
      es: '120 horas en Udemy. POO, colecciones, archivos, JDBC.',
      en: '120 hours on Udemy. OOP, collections, files, JDBC.',
    },
  },
  {
    year: '2025',
    tag: 'course',
    title: {
      es: 'Python avanzado',
      en: 'Advanced Python',
    },
    detail: {
      es: '100 horas. Flask, manejo de datos y patrones backend.',
      en: '100 hours. Flask, data handling and backend patterns.',
    },
  },
  {
    year: '2025',
    tag: 'project',
    title: {
      es: 'Lanzo MiEscuelaApp',
      en: 'Launched MiEscuelaApp',
    },
    detail: {
      es: 'Proyecto grupal de gestión escolar con Flask + PostgreSQL.',
      en: 'Group project: school management with Flask + PostgreSQL.',
    },
  },
  {
    year: '2026',
    tag: 'project',
    title: {
      es: 'PoolPay en producción',
      en: 'PoolPay shipped to production',
    },
    detail: {
      es: 'Sistema de cobros automáticos con FastAPI + MercadoPago.',
      en: 'Automatic billing system with FastAPI + MercadoPago.',
    },
  },
];
