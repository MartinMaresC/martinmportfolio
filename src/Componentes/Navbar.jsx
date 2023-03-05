import React, { useState } from 'react';
import '../Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">Martin Mares</div>
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
    </nav>
  );
};

export default Navbar;
