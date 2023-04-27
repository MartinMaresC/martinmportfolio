import { useTranslation } from 'react-i18next';
import React from 'react';
import './Contact';
import '../Css/About.css';

function About () {

  const {t} = useTranslation("About");
    return (
      
      <div className="about-section">
        <h1 className='about'>{t('about')}</h1>
        <h2 className='me'>{t('me')}</h2>
        <button 
        onClick={()=> document.getElementById('Contact').scrollIntoView({ behavior: 'smooth'})}
        className='contactme'>{t('contactme')}</button>
      </div>
    );
}

export default About;