import {
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaFlask,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import type { ReactNode } from 'react';
import type { Locale } from '../i18n/dictionaries';

export interface HardSkill {
  name: string;
  icon: ReactNode;
  level: number;
  category: 'backend' | 'frontend' | 'data' | 'tooling';
}

export const hardSkills: HardSkill[] = [
  { name: 'Python', icon: <FaPython />, level: 90, category: 'backend' },
  { name: 'Java', icon: <FaJava />, level: 75, category: 'backend' },
  { name: 'Flask', icon: <FaFlask />, level: 80, category: 'backend' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 60, category: 'backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75, category: 'data' },
  { name: 'SQL', icon: <FaDatabase />, level: 80, category: 'data' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 70, category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs />, level: 80, category: 'frontend' },
  { name: 'React', icon: <FaReact />, level: 75, category: 'frontend' },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 75, category: 'frontend' },
  { name: 'HTML / CSS', icon: <FaHtml5 />, level: 85, category: 'frontend' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, category: 'tooling' },
];

export interface SoftSkill {
  label: Record<Locale, string>;
}

export const softSkills: SoftSkill[] = [
  { label: { es: 'Trabajo en equipo', en: 'Teamwork' } },
  { label: { es: 'Comunicación', en: 'Communication' } },
  { label: { es: 'Resolución de problemas', en: 'Problem solving' } },
  { label: { es: 'Adaptabilidad', en: 'Adaptability' } },
  { label: { es: 'Pensamiento crítico', en: 'Critical thinking' } },
  { label: { es: 'Gestión del tiempo', en: 'Time management' } },
  { label: { es: 'Proactividad', en: 'Proactiveness' } },
  { label: { es: 'Aprendizaje autodidacta', en: 'Self-learning' } },
];
