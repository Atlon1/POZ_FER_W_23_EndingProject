import React from "react";
import '../scss/main.scss';

const ServicesPricing = () => {

    return (
        <section className='service'>
            <div className='wrapper'>
                <span className='service__plan'> Katalog cenowy</span>
                <h1 className='service__header'> Usługi & Ceny</h1>
                <div className='service__container'>
                    <div className='first__row'>
                        <div className='first__row__service'>
                            <div className='row__content'>
                                <a className='service__name'> Paznokcie żelowe</a>
                                <div className='service__dots'>.................</div>
                                <div className='service__price'> 90 PLN</div>
                            </div>
                            <div className='service__description'>
                                <p className='service__content'> 30 - 40 min na sesje</p>
                            </div>
                        </div>
                        <div className='first__row__service'>
                            <div className='row__content'>
                                <a className='service__name'> Stylizacja paznokci</a>
                                <div className='service__dots'>.............</div>
                                <div className='service__price'> 45 PLN</div>
                            </div>
                            <div className='service__description'>
                                <p className='service__content'> 30 - 40 min na sesje</p>
                            </div>
                        </div>
                    </div>
                    <div className='first__row'>
                        <div className='first__row__service'>
                            <div className='row__content'>
                                <a className='service__name'> Henna brwi + regulacja</a>
                                <div className='service__dots'>............</div>
                                <div className='service__price'> 25 PLN</div>
                            </div>
                            <div className='service__description'>
                                <p className='service__content'> 30 - 40 min na sesje</p>
                            </div>
                        </div>
                        <div className='first__row__service'>
                            <div className='row__content'>
                                <a className='service__name'> Hybrydy</a>
                                <div className='service__dots'>.........................</div>
                                <div className='service__price'> 80 PLN</div>
                            </div>
                            <div className='service__description'>
                                <p className='service__content'> 30 - 40 min na sesje</p>
                            </div>
                        </div>
                    </div>
                    <div className='first__row'>
                        <div className='first__row__service'>
                            <div className='row__content'>
                                <a className='service__name'> Rzęsy</a>
                                <div className='service__dots'>................................</div>
                                <div className='service__price'> 80 PLN</div>
                            </div>
                            <div className='service__description'>
                                <p className='service__content'> 30 - 40 min na sesje</p>
                            </div>
                        </div>
                        <div className='first__row__service'>
                            <div className='row__content'>
                                <a className='service__name'> Makijaż</a>
                                <div className='service__dots'>.........................</div>
                                <div className='service__price'> 120 PLN</div>
                            </div>
                            <div className='service__description'>
                                <p className='service__content'> 30 - 40 min na sesje</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesPricing;