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
    <div className='dataDiv'>
    <p className='footerData'>Martin Cruz ✗</p>
    <p className='footerData'>449 0000000</p>
    <p className='footerData'>martinmarescr@gmail.com</p>
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
</section>
    )
}

export default Footer;