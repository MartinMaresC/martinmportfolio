import { useTranslation } from 'react-i18next';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import whatsapp from '../img/whatsappicon.png';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';*/

import '../Css/Footer.css';

function Footer () {

    const {t} = useTranslation("Footer");

    function openFacebook(){
        window.open('https://www.facebook.com/profile.php?id=100090622666241');
    }
    return (
    <section className='footerSection'>
    <div className='dataDiv'>
        <p className='footerData'>Martin Cruz</p>
        <p className='footerData'>{t('footing')}</p>
        <p>{t('followme')}</p>
    </div>
    <div className='iconDiv'>
        <img src={github}
        onClick={()=>window.open('https://github.com/MartinMaresC')} 
        alt="" className='footerIcon'/>
        <img src={linkedin} 
        onClick={openFacebook} 
        alt="" className='footerIcon'/>
        <img src={facebook}
        onClick={openFacebook} 
        alt="" className='footerIcon'/>
        <img src={whatsapp}
        onClick={openFacebook} 
        alt="" className='footerIcon'/>
    </div>
    <div className='legalDiv'>
        <div className='legalLinks'>
        <a href='/terms-of-use' className='legalLink'>{t('terms')}</a>
        <a href='/privacy-policy' className='legalLink'>{t('privacy')}</a>
        </div>
        <p className='copyright'>
           {t('rights')}
        </p>
    </div>
</section>
    )
    
}

export default Footer;