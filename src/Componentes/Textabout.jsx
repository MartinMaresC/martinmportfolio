import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import '../Css/Textabout.css';
import coder from '../img/coding.png';
import google from '../img/search.png';
import translate from '../img/translate.png';
import chatbot from '../img/chatbot.png';
import aboutpic3 from '../img/aboutpic3.jpg';
import aboutpic2 from '../img/aboutpic2.jpg';
import aboutpic1 from '../img/aboutpic1.jpg';

function Textabout() {
  const {t} = useTranslation('Textabout');
return (
        <div className='textabout' id='textAbout'>
          <Helmet>
        <title>{t('SEO:pageTitle')}</title>
        <meta name='description' content={t('SEO-description')} />
        <meta name='keywords' content={t('SEO-keywords')} />
          </Helmet>
        <div className='profileDescripcion'>
        <div className='profilePictureDiv'>
        <img className='pic1' src={aboutpic3} alt="" />
        <img className='pic2' src={aboutpic1} alt="" />
        <img className='pic3' src={aboutpic2} alt="" />
        </div>
        <div className='textDescriptionDiv'>
          <h1 className='aboutTitle'>About me</h1>
        <p className='texto'>{t('line1')}</p>
        <p className='texto'>{t('line2')}</p>
        <p className='texto'>{t('line3')}</p>
        <p className='texto'>{t('line4')}</p>
        </div>
        </div>
        <div className='skillsDiv'>
        <h1 className='servicesTitle'>{t('services')}</h1>
        <ul className='ulSoftSkills'>
          <div className='softSkillsDiv'>
          <li className='liContainer'>
            <img src={coder} alt="" />
            {t('web')}
            <div className='services'>
            <p>- Landing page</p>
            <p>- One page</p>
            <p>- Magazine</p>
            <p>- Blog</p>
            <p>- Microsite</p>
            </div>
          </li>
          <li>
          <img src={google} alt="" />
            {t('seo')}
            <div className='services'>
            <p>- Keyword research</p>
            <p>- On-page optimization</p>
            <p>- Off-page optimization</p>
            <p>- Technical SEO</p>
            <p>- Local SEO</p>
            </div>
          </li>
          </div>
          <div className='softSkillsDiv'>
          <li className='liContainer'>
          <img src={translate} alt="" />
            {t('translation')}
            <div className='services'>
            <p>- Website content</p>
            <p>- Website interface</p>
            <p>- Multilanguage SEO</p>
            <p>- Technical documents</p>
            <p>- Marketing</p>
            </div>
          </li>
          <li>
          <img src={chatbot} alt="" />
            {t('chatbot')}
            <div className='services'>
            <p>- Whatsapp chatbot</p>
            <p>- Website chatbot</p>
            <p>- Customer support</p>
            <p>- Development</p>
            <p>- Implementarion</p>
            </div>
          </li>
          </div>
        </ul>
        
        </div>
        </div>
      );
}

export default Textabout;
