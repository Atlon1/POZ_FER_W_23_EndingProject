import '../scss/main.scss'

const AboutUs = () => {
    return (
        <section className='aboutUs'>
            <div className='wrapper'>
                <div className='aboutUs__container1'>
                    <img src={require('../images/oNas.jpg')} className='aboutUs__img1'/>
                    <div className="aboutUs__content1">
                        <h1 className='aboutUs__header1'>O nas!</h1>
                        <p className='aboutUs__text1'> Kilka informacji o zakładzie</p>
                        <a href='#' className='aboutUs__button1'>Czytaj więcej</a>
                    </div>
                </div>
                <div className='aboutUs__container2'>
                    <img src={require('../images/usługi.jpg')} className='aboutUs__img2'/>
                    <div className="aboutUs__content2">
                        <h1 className='aboutUs__header2'>Usługi</h1>
                        <p className='aboutUs__text2'> Poznaj nasze ceny</p>
                        <a href='#' className='aboutUs__button2'>Czytaj więcej</a>
                    </div>
                </div>
                <div className='aboutUs__container3'>
                    <img src={require('../images/slide2.jpg')} className='aboutUs__img3'/>
                    <div className="aboutUs__content3">
                        <h1 className='aboutUs__header3'>Produkty</h1>
                        <p className='aboutUs__text3'>Kup u nas </p>
                        <a href='#' className='aboutUs__button3'>Czytaj więcej</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;