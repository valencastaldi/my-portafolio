type Loc = 'es' | 'en';

interface DictShape {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    services: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    roles: string[];
  };
  about: {
    title: string;
    kicker: string;
    p1: string;
    p2: string;
    facts: { k: string; v: string }[];
  };
  experience: { title: string; kicker: string; subtitle: string };
  projects: {
    title: string;
    kicker: string;
    viewCode: string;
    viewLive: string;
    stack: string;
    featured: string;
  };
  skills: { title: string; kicker: string; hard: string; soft: string };
  services: {
    title: string;
    kicker: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    kicker: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    sendEmail: string;
  };
  footer: { built: string; rights: string };
}

export const dictionaries: Record<Loc, DictShape> = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Skills',
      services: 'Servicios',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      eyebrow: 'Disponible para nuevos proyectos',
      title1: 'Construyo',
      title2: 'software',
      title3: 'que aporta valor.',
      subtitle:
        'Estudiante avanzado de Ingeniería en Software. Trabajo en backend y frontend, con foco en código limpio, performance y atención al detalle.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactarme',
      roles: ['Backend Developer', 'Frontend Developer', 'Software Engineer', 'Problem Solver'],
    },
    about: {
      title: 'Sobre mí',
      kicker: 'Quién soy',
      p1:
        'Soy estudiante avanzado de Ingeniería en Software con un marcado interés en el desarrollo backend y la gestión eficiente de bases de datos. Me caracterizo por un enfoque lógico y ordenado al resolver problemas, y por aprender de forma autodidacta.',
      p2:
        'A lo largo de mi formación participé en distintos proyectos académicos donde apliqué buenas prácticas, metodologías ágiles y construí una base sólida en Python, Java, Flask y PostgreSQL. Siempre busco nuevos desafíos para seguir creciendo como profesional.',
      facts: [
        { k: 'Ubicación', v: 'Argentina · Remoto' },
        { k: 'Educación', v: 'Ing. en Software · Siglo 21' },
        { k: 'Idiomas', v: 'Español (nativo) · Inglés' },
        { k: 'Foco', v: 'Backend · Bases de datos' },
      ],
    },
    experience: {
      title: 'Trayectoria',
      kicker: 'Línea de tiempo',
      subtitle: 'Hitos académicos y de aprendizaje que marcaron mi camino.',
    },
    projects: {
      title: 'Proyectos seleccionados',
      kicker: 'En qué estuve trabajando',
      viewCode: 'Ver código',
      viewLive: 'Ver demo',
      stack: 'Stack',
      featured: 'destacado',
    },
    skills: {
      title: 'Skills & herramientas',
      kicker: 'Lo que uso a diario',
      hard: 'Hard skills',
      soft: 'Soft skills',
    },
    services: {
      title: 'En qué puedo ayudarte',
      kicker: 'Servicios',
      subtitle: 'Áreas en las que puedo aportar valor a tu equipo o proyecto.',
      items: [
        {
          title: 'Desarrollo backend',
          desc: 'APIs en Python/Flask y Java, modelado de datos en PostgreSQL y arquitectura limpia y escalable.',
        },
        {
          title: 'Aplicaciones web',
          desc: 'Apps responsivas con React + TypeScript, con foco en performance, accesibilidad y buena UX.',
        },
        {
          title: 'Base de datos',
          desc: 'Diseño de esquemas relacionales, consultas optimizadas y migraciones seguras.',
        },
        {
          title: 'Automatización',
          desc: 'Scripts en Python para automatizar tareas repetitivas y reducir trabajo manual.',
        },
      ],
    },
    contact: {
      title: 'Trabajemos juntos',
      kicker: 'Contacto',
      subtitle:
        'Estoy abierto a oportunidades, colaboraciones y proyectos freelance. La forma más rápida es por mail.',
      copyEmail: 'Copiar email',
      copied: '¡Copiado!',
      sendEmail: 'Enviar email',
    },
    footer: {
      built: 'React · Tailwind · Vite',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      services: 'Services',
      contact: 'Contact',
      cta: 'Let’s talk',
    },
    hero: {
      eyebrow: 'Available for new projects',
      title1: 'I build',
      title2: 'software',
      title3: 'that creates value.',
      subtitle:
        'Senior-year Software Engineering student. I work on backend and frontend, focused on clean code, performance and attention to detail.',
      ctaPrimary: 'See projects',
      ctaSecondary: 'Get in touch',
      roles: ['Backend Developer', 'Frontend Developer', 'Software Engineer', 'Problem Solver'],
    },
    about: {
      title: 'About me',
      kicker: 'Who I am',
      p1:
        'I’m a senior-year Software Engineering student with a strong interest in backend development and efficient database management. I bring a logical, structured approach to problem solving and learn fast on my own.',
      p2:
        'Throughout my studies I’ve worked on academic projects where I applied best practices, agile methodologies and built solid foundations in Python, Java, Flask and PostgreSQL. I’m always looking for new challenges to keep growing as a developer.',
      facts: [
        { k: 'Location', v: 'Argentina · Remote' },
        { k: 'Education', v: 'Software Eng. · Siglo 21' },
        { k: 'Languages', v: 'Spanish (native) · English' },
        { k: 'Focus', v: 'Backend · Databases' },
      ],
    },
    experience: {
      title: 'Journey',
      kicker: 'Timeline',
      subtitle: 'Academic and learning milestones along the way.',
    },
    projects: {
      title: 'Selected work',
      kicker: 'What I’ve been building',
      viewCode: 'View code',
      viewLive: 'Live demo',
      stack: 'Stack',
      featured: 'featured',
    },
    skills: {
      title: 'Skills & tools',
      kicker: 'What I use day to day',
      hard: 'Hard skills',
      soft: 'Soft skills',
    },
    services: {
      title: 'How I can help',
      kicker: 'Services',
      subtitle: 'Areas where I can add value to your team or project.',
      items: [
        {
          title: 'Backend development',
          desc: 'APIs in Python/Flask and Java, PostgreSQL data modeling and clean, scalable architecture.',
        },
        {
          title: 'Web applications',
          desc: 'Responsive apps with React + TypeScript, focused on performance, accessibility and great UX.',
        },
        {
          title: 'Databases',
          desc: 'Relational schema design, optimized queries and safe migrations.',
        },
        {
          title: 'Automation',
          desc: 'Python scripts to automate repetitive tasks and cut manual work.',
        },
      ],
    },
    contact: {
      title: 'Let’s work together',
      kicker: 'Contact',
      subtitle:
        'I’m open to opportunities, collaborations and freelance work. The fastest way is email.',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      sendEmail: 'Send email',
    },
    footer: {
      built: 'React · Tailwind · Vite',
      rights: 'All rights reserved.',
    },
  },
};

export type Locale = Loc;
export type Dict = DictShape;
