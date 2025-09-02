import React, { useState } from 'react';
import { FaPython, FaJava, FaHtml5, FaJs, FaDatabase, FaGitAlt, FaFlask, FaMobileAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const skills = [
  { 
    name: 'Python', 
    icon: <FaPython />, 
    level: 90, 
    info: 'Lenguaje principal para backend y scripts.', 
    proyecto: 'MiEscuelaApp'
  },
  { 
    name: 'Java', 
    icon: <FaJava />, 
    level: 75, 
    info: 'Utilizado para proyectos universitarios y algoritmos.', 
    proyecto: 'Proyectos académicos'
  },
  { 
    name: 'HTML/CSS', 
    icon: <FaHtml5 />, 
    level: 85, 
    info: 'Estructura y estilos de interfaces web.', 
    proyecto: 'Portafolio Web y MiEscuelaApp'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs />, 
    level: 80, 
    info: 'Interactividad y lógica en el frontend.', 
    proyecto: 'Portafolio Web'
  },
  { 
    name: 'Flask', 
    icon: <FaFlask />, 
    level: 80, 
    info: 'Framework para APIs y backend.', 
    proyecto: 'MiEscuelaApp'
  },
  { 
    name: 'PostgreSQL', 
    icon: <FaDatabase />, 
    level: 70, 
    info: 'Base de datos relacional para proyectos.', 
    proyecto: 'MiEscuelaApp'
  },
  { 
    name: 'Git', 
    icon: <FaGitAlt />, 
    level: 80, 
    info: 'Control de versiones y trabajo colaborativo.', 
    proyecto: 'Todos los proyectos'
  },
  { 
    name: 'Responsive Design', 
    icon: <FaMobileAlt />, 
    level: 85, 
    info: 'Diseño adaptable a dispositivos móviles.', 
    proyecto: 'Portafolio Web'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    level: 60,
    info: 'Uso básico para servidores y scripts backend en proyectos personales.',
    proyecto: 'Portafolio Web'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    level: 55,
    info: 'Tipado estático y mejores prácticas en proyectos React.',
    proyecto: 'Portafolio Web'
  },
];

const softSkills = [
  { name: 'Trabajo en equipo', icon: '🤝' },
  { name: 'Comunicación', icon: '💬' },
  { name: 'Resolución de problemas', icon: '🧩' },
  { name: 'Adaptabilidad', icon: '🔄' },
  { name: 'Pensamiento crítico', icon: '🧠' },
  { name: 'Gestión del tiempo', icon: '⏰' },
  { name: 'Proactividad', icon: '🚀' },
];

const Skills: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="tarjeta">
      <h2>Skills</h2>
      <div className="skills-list">
        {/* Hard skills */}
        {skills.map((skill) => (
          <div
            className="skill-item"
            key={skill.name}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: 'relative' }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar-bg">
              <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
            {hovered === skill.name && (
              <div className="skill-tooltip">
                <strong>{skill.name}</strong><br />
                {skill.info}<br />
                <em>Utilizado en: {skill.proyecto}</em>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <h3 style={{ marginTop: '2.5rem' }}>Soft Skills</h3>
      <ul className="soft-skills-list">
        {softSkills.map((soft) => (
          <li key={soft.name}>
            <span className="soft-skill-icon">{soft.icon}</span> {soft.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;