import type { Locale } from '../i18n/dictionaries';
import dashboardProfesor from '../assets/img/dashboard_profesor.jpg';
import loginImg from '../assets/img/login.png';
import sidebarProfe from '../assets/img/sidebar_profe.jpg';
import tpsCover from '../assets/img/tps-cover.svg';
import mieescuelaCover from '../assets/img/mieescuela-cover.svg';
import ppLogin from '../assets/img/poolpay/login.png';
import ppDashboard from '../assets/img/poolpay/dashboard.png';
import ppRutas from '../assets/img/poolpay/rutas.png';
import ppClientes from '../assets/img/poolpay/clientes.png';

export interface BlurRegion {
  top: string;
  left: string;
  width: string;
  height: string;
}

export interface GalleryShot {
  src: string;
  blur?: BlurRegion[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  cover: string;
  gallery?: (string | GalleryShot)[];
  stack: string[];
  repo?: string;
  live?: string;
  learnMore?: { email: string; subject: Record<Locale, string>; body: Record<Locale, string> };
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
    gallery: [
      { src: ppLogin },
      {
        src: ppDashboard,
        blur: [
          // Numeros grandes de los 4 cards
          { top: '24%', left: '16%', width: '7%', height: '7%' },
          { top: '24%', left: '37%', width: '8%', height: '7%' },
          { top: '24%', left: '57%', width: '13%', height: '7%' },
          { top: '24%', left: '79%', width: '10%', height: '7%' },
          // Subtitulos chicos debajo
          { top: '32%', left: '16%', width: '14%', height: '2.5%' },
          { top: '32%', left: '79%', width: '12%', height: '2.5%' },
          // Panel CLIENTES (numero a la derecha)
          { top: '45%', left: '52%', width: '5%', height: '3%' },
          { top: '50%', left: '52%', width: '5%', height: '3%' },
          { top: '55%', left: '53%', width: '4%', height: '3%' },
          // Panel FINANCIERO (numeros a la derecha)
          { top: '45%', left: '90%', width: '7%', height: '3%' },
          { top: '50%', left: '92%', width: '5%', height: '3%' },
          { top: '55%', left: '92%', width: '5%', height: '3%' },
          { top: '60%', left: '94%', width: '3%', height: '3%' },
        ],
      },
      { src: ppRutas },
      {
        src: ppClientes,
        blur: [
          // Solo nombre del barrio + badge de cantidad
          { top: '20.5%', left: '21%', width: '20%', height: '4%' },
          { top: '28.5%', left: '21%', width: '20%', height: '4%' },
          { top: '36.5%', left: '21%', width: '18%', height: '4%' },
          { top: '44.5%', left: '21%', width: '17%', height: '4%' },
          { top: '52.5%', left: '21%', width: '14%', height: '4%' },
          { top: '60.5%', left: '21%', width: '15%', height: '4%' },
          { top: '68.5%', left: '21%', width: '12%', height: '4%' },
          { top: '76.5%', left: '21%', width: '20%', height: '4%' },
          { top: '84.5%', left: '21%', width: '20%', height: '4%' },
          { top: '92.5%', left: '21%', width: '18%', height: '4%' },
        ],
      },
    ],
    stack: ['FastAPI', 'SQLModel', 'PostgreSQL', 'React', 'TypeScript', 'MercadoPago'],
    repo: 'https://github.com/valencastaldi/TPS-APP',
    learnMore: {
      email: 'tinocastaldi04@gmail.com',
      subject: {
        es: 'Consulta sobre PoolPay',
        en: 'PoolPay inquiry',
      },
      body: {
        es: 'Hola Valentino,\n\nMe gustaría saber más sobre PoolPay.\n\nGracias.',
        en: 'Hi Valentino,\n\nI would like to know more about PoolPay.\n\nThanks.',
      },
    },
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
