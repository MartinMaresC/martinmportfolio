import { useTranslation } from 'react-i18next';
import React, { useEffect, useLayoutEffect } from 'react';
import './Contact';
import '../Css/About.css';
import whatsapp from '../img/whatsappicon.png'

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
        <h1 className='martinCruz'>Martin Cruz</h1>
        <img
        className='iconoWhatsappAbout' 
        src={whatsapp} alt="whatsapp" 
        onClick={openWhatsapp}
        />
      </div>
    );
}

export default About;