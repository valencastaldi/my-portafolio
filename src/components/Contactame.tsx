import React from 'react';
// Importa los íconos si están en src/assets/img
import githubIcon from '../assets/img/github icon.png';
import gmailIcon from '../assets/img/gmail icon.png';
import linkedinIcon from '../assets/img/linkedin icon.png';

const Contactame: React.FC = () => (
  <section id="contacto" className="tarjeta">
    <h2>Contacto</h2>
    <div className="contacto-iconos">
      <a href="https://github.com/valencastaldi" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="mailto:valentino.castaldi@gmail.com">
        <img src={gmailIcon} alt="Gmail" />
      </a>
      <a href="https://linkedin.com/in/valentinocastaldi" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
    </div>
  </section>
);

export default Contactame;