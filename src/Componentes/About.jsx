import { useTranslation } from 'react-i18next';
import React from 'react';
import './Contact';
import '../Css/About.css';

function About () {

  const {t} = useTranslation("About");
    return (
      
      <div className="about-section">
        <h1>{t('about')}
          <span className='me'>{t('me')}</span>
          </h1>
        <button 
        onClick={()=> document.getElementById('Contact').scrollIntoView({ behavior: 'smooth'})}
        className='contactme'>{t('contactme')}</button>
      </div>
    );
}

export default About;