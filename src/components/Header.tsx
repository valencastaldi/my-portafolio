import React from 'react';
// Importa la imagen si está en src/assets/img
import perfilImg from '../assets/img/perfil.jpg';

const Header: React.FC = () => (
  <header>
    <img src={perfilImg} alt="Foto de perfil" className="perfil-img" />
    <h1>Valentino Castaldi</h1>
    <hr className="header-separador" />
    <p>
      Estudiante de Ingeniería en Software<br />
      Desarrollador backend y frontend
    </p>
  </header>
);

export default Header;