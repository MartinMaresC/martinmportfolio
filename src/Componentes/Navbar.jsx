import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import francia from '../img/francia.png';
import uk from '../img/reino-unido.png';
import '../Css/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const { t } = useTranslation("Navbar");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <div className="logo">Martin Cruz ✗</div>
      <ul className={menuOpen ? 'show' : 'menu'}>
        <li>{t('liAbout')}</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="toggle" onClick={toggleMenu}>
        <div className={'hamburger'}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='flags'>
        <li onClick={() => handleChangeLng("fr")}><img src={francia} alt="" /></li>
        <li onClick={() => handleChangeLng("en")}><img src={uk} alt="" /></li>
      </div>
    </nav>
  );
}

export default Navbar;
