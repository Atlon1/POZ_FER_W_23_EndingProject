import React from "react";
import '../scss/main.scss';

const Home = () => {
    return (
        <section className='home' id="home">
            <div className='wrapper'>
                <div className='home__container'>
                    <div className='home__welcome'> Witaj u nas!</div>
                    <h1>Terapia relaksacyjna</h1>
                    <p className='home__content'>
                        Zasługujesz na coś lepszego niż szybką usługe przez początkującego
                        kosmetologa w miejscu, które sprawia, że czujesz się bardziej zestresowany
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home;