import React, { useState } from 'react';
import francia from '../img/francia.png';
import uk from '../img/reino-unido.png';
import '../Css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">Martin Cruz ✗</div>
      <ul className={menuOpen ? 'menu show' : 'menu'}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="toggle" onClick={toggleMenu}>
        <div className={menuOpen ? 'hamburger active' : 'hamburger'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='flags'>
          <li><img src={francia} alt="" /></li>
          <li><img src={uk} alt="" /></li>
        </div>
    </nav>
  );
};

export default Navbar;
