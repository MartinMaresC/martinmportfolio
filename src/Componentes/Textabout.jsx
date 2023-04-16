import { useTranslation } from 'react-i18next';
import '../Css/Textabout.css';
import coder from '../img/coding.png';
import google from '../img/search.png';
import translate from '../img/translate.png';
import chatbot from '../img/chatbot.png';
import html from '../img/html-5.png';
import react from '../img/react.png';
import angular from '../img/angular.png';
import nodejs from '../img/nodejs.png';
import sql from '../img/sql-server.png';
import git from '../img/git.png';
import profilePic from '../img/Picture.png'

function Textabout() {
  const {t} = useTranslation('Textabout');
return (
        <div className='textabout' id='textAbout'>
        <div className='profileDescripcion'>
        <div className='profilePictureDiv'>
        <img src={profilePic} alt="" />
        </div>
        <div className='textDescriptionDiv'>
        <p className='texto'>{t('line1')}</p>
        <p className='texto'>{t('line2')}</p>
        <p className='texto'>{t('line3')}</p>
        <p className='texto'>{t('line4')}</p>
        </div>
        </div>
        <div className='skillsDiv'>
        <h3>{t('services')}</h3>
        <ul className='ulSoftSkills'>
          <div className='softSkillsDiv'>
          <li className='liContainer'>
            <img src={coder} alt="" />
            {t('web')}
          </li>
          <li>
          <img src={google} alt="" />
            {t('seo')}
          </li>
          </div>
          <div className='softSkillsDiv'>
          <li className='liContainer'>
          <img src={translate} alt="" />
            {t('translation')}
          </li>
          <li>
          <img src={chatbot} alt="" />
          {t('chatbot')}
          </li>
          </div>
        </ul>
        <ul className='ulTechnologies'>
        <li className='liTechnologies'>
          <img src={html} alt="" />
            </li>
          <li className='liTechnologies'>
            <img src={react} alt="" />
            </li>
          <li className='liTechnologies'>
          <img src={angular} alt="" />
            </li>
          <li className='liTechnologies'>
          <img src={nodejs} alt="" />
            </li>
          <li className='liTechnologies'>
          <img src={sql} alt="" />
            </li>
          <li className='liTechnologies'>
          <img src={git} alt="" />
            </li>
        </ul>
        </div>
        </div>
      );
}

export default Textabout;
