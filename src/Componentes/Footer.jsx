import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import whatsapp from '../img/whatsappicon.png';

import '../Css/Footer.css';

function Footer () {
    function openFacebook(){
        window.open('https://www.facebook.com/profile.php?id=100090622666241');
    }
    return (
    <section className='footerSection'>
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
    <div className='dataDiv'>
    <p className='footerData'>449 000 00 00</p>
    <p className='footerData'>martinmarescr@gmail.com</p>
    </div>
    <div className='legalDiv'>
        <a href='/terms-of-use' className='legalLink'>Terms of Use</a>
        <a href='/privacy-policy' className='legalLink'>Privacy Policy</a>
        <p className='copyright'>
           © 2023 Martin Cruz. All rights reserved.
        </p>
    </div>
</section>
    )
}

export default Footer;