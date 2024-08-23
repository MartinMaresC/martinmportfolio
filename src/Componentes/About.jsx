import { useTranslation } from 'react-i18next';
import React, { useEffect, useLayoutEffect } from 'react';
import './Contact';
import '../Css/About.css';
import whatsapp from '../img/whatsappicon.png';
import email from '../img/email.png';

function About () {
  const {t} = useTranslation("About");
  /*useLayoutEffect(()=> {
    document.title = t('title');
  }, [t]);*/
  function openWhatsapp(){
    window.open('https://www.facebook.com/profile.php?id=100090622666241');
}
  
    return (
      <div className="about-section">
        <h1 className='martinCruz'>{t('web-developer')}</h1>
        
        <p className='myemail'>
          <img src={email} alt="" />
          martinmarescr@gmail.com
          </p>

        <img
        className='iconoWhatsappAbout' 
        src={whatsapp} alt="whatsapp" 
        onClick={openWhatsapp}
        />
      </div>
    );
}

export default About;