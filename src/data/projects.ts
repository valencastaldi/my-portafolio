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
          { top: '17%', left: '15%', width: '17%', height: '20%' },
          { top: '17%', left: '35%', width: '17%', height: '20%' },
          { top: '17%', left: '55%', width: '17%', height: '20%' },
          { top: '17%', left: '75%', width: '17%', height: '20%' },
          { top: '40%', left: '15%', width: '37%', height: '30%' },
          { top: '40%', left: '54%', width: '37%', height: '30%' },
        ],
      },
      { src: ppRutas },
      {
        src: ppClientes,
        blur: [
          { top: '17%', left: '18%', width: '60%', height: '7%' },
          { top: '25%', left: '18%', width: '60%', height: '7%' },
          { top: '33%', left: '18%', width: '60%', height: '7%' },
          { top: '41%', left: '18%', width: '60%', height: '7%' },
          { top: '49%', left: '18%', width: '60%', height: '7%' },
          { top: '57%', left: '18%', width: '60%', height: '7%' },
          { top: '65%', left: '18%', width: '60%', height: '7%' },
          { top: '73%', left: '18%', width: '60%', height: '7%' },
          { top: '81%', left: '18%', width: '60%', height: '7%' },
          { top: '89%', left: '18%', width: '60%', height: '7%' },
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
