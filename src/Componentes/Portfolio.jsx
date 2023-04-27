import projectJapan from '../img/JapanViews.png'
import '../Css/Portfolio.css';
import html from '../img/html-5.png';
import react from '../img/react.png';
import angular from '../img/angular.png';
import nodejs from '../img/nodejs.png';
import css from '../img/css-3.png';
import jquery from '../img/jquery.webp';
function Portfolio() {
    return (
        <section className='sectionPortfolio' id='Portafolio'>
            <h1 className="Titulo" >Portfolio</h1>
            <div className='projectsDiv'>
            <div className='projectMain'>
                    <div className='projectDiv'>
                        <div className='imageDiv'>
                        <img src={projectJapan} alt="" className='imagePortfolio'/>
                        </div>
                    </div>
                    <div>
                        <p className='portfolioTag'>Microsite</p>
                        <div className='techDiv'>
                            <img src={html} alt=""></img>
                            <img src={react} alt=""></img>
                            <img src={nodejs} alt=""></img>
                            <img src={react} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className='projectMain'>
                    <div className='projectDiv'>
                        <div className='imageDiv'>
                        <img src={projectJapan} alt="" className='imagePortfolio'/>
                        </div>
                    </div>
                    <div>
                        <p className='portfolioTag'>Chatbot</p>
                        <div className='techDiv'>
                            <img src={html} alt=""></img>
                            <img src={angular} alt=""></img>
                            <img src={nodejs} alt=""></img>
                            <img src={nodejs} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className='projectMain'>
                    <div className='projectDiv'>
                        <div className='imageDiv'>
                        <img src={projectJapan} alt="" className='imagePortfolio'/>
                        </div>
                    </div>
                    <div>
                        <p className='portfolioTag'>Japan Magazine</p>
                        <div className='techDiv'>
                            <img src={html} alt=""></img>
                            <img src={jquery} alt=""></img>
                            <img src={css} alt=""></img>
                            <img src={html} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Portfolio;