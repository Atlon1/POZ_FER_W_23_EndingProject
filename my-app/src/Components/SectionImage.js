import React, {useState,useEffect} from "react";
import '../scss/main.scss';

const SectionImage = () => {

    const img = [
        '../images/slide1.jpg',
        '../images/slide2.jpg',
        '../images/pexels-marcelo-moreira-1926620.jpg'
    ]

    const [arrayState, SetArrayState] = useState(0)




    useEffect(() => {
        const interval = setInterval(() => {
            SetArrayState((prevState) => (prevState + 1));
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [arrayState]);



    return (
        <section className='home'>
            <div className='wrapper wrapper__home'>
                <div className='home__container'>
                    <h1> O nas!</h1>
                    <p> Jestemy firmą z wieloletnia tradycja</p>
                </div>
                    <img src={require('./slide1.jpg')} alt='' className='home__img'/>
            </div>
        </section>
    )
}

export default SectionImage