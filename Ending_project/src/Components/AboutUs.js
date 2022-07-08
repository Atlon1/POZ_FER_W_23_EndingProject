import '../scss/main.scss';
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className='wrapper'>
                <div className='aboutUs__container1'>
                    <img src={require('../images/oNas.jpg')} className='aboutUs__img1'/>
                    <div className="aboutUs__content1">
                        <h1 className='aboutUs__header1'>O nas!</h1>
                        <p className='aboutUs__text1'> Kilka informacji o zakładzie</p>
                        <div className='aboutUs__button1'>
                            <Link to='/information'>Czytaj więcej</Link>
                        </div>
                    </div>
                </div>
                <div className='aboutUs__container2'>
                    <img src={require('../images/usługi.jpg')} className='aboutUs__img2'/>
                    <div className="aboutUs__content2">
                        <h1 className='aboutUs__header2'>Usługi</h1>
                        <p className='aboutUs__text2'> Poznaj nasze ceny</p>
                        <div className='aboutUs__button2'>
                            <Link to='/services'>Czytaj więcej</Link>
                        </div>
                    </div>
                </div>
                <div className='aboutUs__container3'>
                    <img src={require('../images/slide2.jpg')} className='aboutUs__img3'/>
                    <div className="aboutUs__content3">
                        <h1 className='aboutUs__header3'>Produkty</h1>
                        <p className='aboutUs__text3'>Kup u nas </p>
                        <div className='aboutUs__button3'>
                            <Link to='/products'>Czytaj więcej</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;