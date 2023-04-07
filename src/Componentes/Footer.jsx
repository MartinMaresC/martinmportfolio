import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import '../Css/Footer.css';

function Footer () {
    return (
    <section className='footerSection'>
    <div className='dataDiv'>
    <p className='footerData'>Martin Cruz ✗</p>
    <p className='footerData'>449 0000000</p>
    <p className='footerData'>martinmarescr@gmail.com</p>
    </div>
    <div className='iconDiv'>
    <img src={github} alt="" className='footerIcon'/>
    <img src={linkedin} alt="" className='footerIcon'/>
    <img src={facebook} alt="" className='footerIcon'/>
    </div>
</section>
    )
}

export default Footer;