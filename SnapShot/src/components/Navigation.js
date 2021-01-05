import React from 'react';
import { NavLink } from 'react-router-dom';

//panel nawigacyjny z przyciskami przekierowującymi do podstron z zdjęciami z 4 kategorii
const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Góry</NavLink></li>
        <li><NavLink to="/beach">Plaże</NavLink></li>
        <li><NavLink to="/bird">Ptaki</NavLink></li>
        <li><NavLink to="/food">Jedzenie</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
