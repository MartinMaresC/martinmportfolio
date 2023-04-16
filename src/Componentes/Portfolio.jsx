import projectJapan from '../img/JapanViews.png'
import '../Css/Portfolio.css'
function Portfolio() {
    return (
        <section className='sectionPortfolio' id='Portafolio'>
            <h1 className="Titulo" >Portfolio</h1>
            <div className='projectsDiv'>
                <div>
                    <div className='projectDiv'>
                        <div className='imageDiv'>
                        <img src={projectJapan} alt="" className='imagePortfolio'/>
                        </div>
                    </div>
                    <div>
                        <p>Project Japan</p>
                        <p>Descrption:</p>
                        <p>Fisrt webpage with up to 10 sections</p>
                        <p>Mobile and destop view</p>
                        <p>Technologies</p>
                    </div>
                </div>
                <div>
                    <div className='projectDiv'>
                        <div className='imageDiv'>
                        <img src={projectJapan} alt="" className='imagePortfolio'/>
                        </div>
                    </div>
                    <div>
                        <p>Project Japan</p>
                        <p>Descrption:</p>
                        <p>Fisrt webpage with up to 10 sections</p>
                        <p>Mobile and destop view</p>
                        <p>Technologies</p>
                    </div>
                </div>
                <div>
                    <div className='projectDiv'>
                        <div className='imageDiv'>
                        <img src={projectJapan} alt="" className='imagePortfolio'/>
                        </div>
                    </div>
                    <div>
                        <p>Project Japan</p>
                        <p>Descrption:</p>
                        <p>Fisrt webpage with up to 10 sections</p>
                        <p>Mobile and destop view</p>
                        <p>Technologies</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Portfolio;