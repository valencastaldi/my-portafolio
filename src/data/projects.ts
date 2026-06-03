import type { Locale } from '../i18n/dictionaries';
import dashboardProfesor from '../assets/img/dashboard_profesor.jpg';
import loginImg from '../assets/img/login.png';
import sidebarProfe from '../assets/img/sidebar_profe.jpg';
import tpsCover from '../assets/img/tps-cover.svg';
import mieescuelaCover from '../assets/img/mieescuela-cover.svg';

export interface Project {
  slug: string;
  title: string;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  cover: string;
  gallery?: string[];
  stack: string[];
  repo?: string;
  live?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'tps-app',
    title: 'PoolPay',
    tagline: {
      es: 'Gestión de pagos para servicios de piletas.',
      en: 'Payment management for pool service businesses.',
    },
    description: {
      es: 'Plataforma para administradores de mantenimiento de piletas: clientes, facturación recurrente, cobros y conciliación automática vía MercadoPago. Backend en FastAPI con SQLModel y frontend en React; incluye además una app móvil para los pileteros en campo.',
      en: 'Platform for pool maintenance businesses: clients, recurring billing, payments and automatic reconciliation via MercadoPago. FastAPI backend with SQLModel and a React frontend, plus a mobile app for field technicians.',
    },
    cover: tpsCover,
    stack: ['FastAPI', 'SQLModel', 'PostgreSQL', 'React', 'TypeScript', 'MercadoPago'],
    repo: 'https://github.com/valencastaldi/TPS-APP',
    highlight: true,
  },
  {
    slug: 'mi-escuela-app',
    title: 'MiEscuelaApp',
    tagline: {
      es: 'Sistema de gestión escolar full-stack.',
      en: 'Full-stack school management system.',
    },
    description: {
      es: 'Plataforma que automatiza tareas administrativas y académicas: usuarios por rol, asignación de materias, carga de notas y asistencias, comunicados y dashboards diferenciados.',
      en: 'A platform that automates administrative and academic tasks: role-based users, subject assignment, grades and attendance, announcements and per-role dashboards.',
    },
    cover: mieescuelaCover,
    gallery: [loginImg, dashboardProfesor, sidebarProfe],
    stack: ['Python', 'Flask', 'PostgreSQL', 'Jinja2', 'Bootstrap'],
    repo: 'https://github.com/valencastaldi/ProyectoEscuelas',
  },
];
