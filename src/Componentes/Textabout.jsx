import { useTranslation } from 'react-i18next';
import '../Css/Textabout.css';

function Textabout() {
  const {t} = useTranslation('Textabout');
return (
        <div className='textabout'>
        <p className='texto'>{t('line1')}</p>
        <p className='texto'>{t('line2')}</p>
        <p className='texto'>{t('line3')}</p>
        <p className='texto'>{t('line4')}</p>
        <h3>{t('skills')}</h3>
        <ul>
          <li>Frontend Jr</li>
          <li>{t('english')}</li>
          <li>{t('french')}</li>
          <li>{t('associate')}</li>
        </ul>
        </div>
      );
}

export default Textabout;
