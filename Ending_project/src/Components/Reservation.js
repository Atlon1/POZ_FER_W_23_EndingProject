import React from "react";
import '../scss/main.scss';

const Reservation = () => {

    return (
        <section className='reservation'>
            <div className='wrapper'>
                <div className='reservation__firstContainer'>
                    <div className="reservation__firstRow">
                        <div className='reservation__category'>Kategoria</div>
                        <select>
                            <option value='0'>Wybierz kategorie</option>
                            <option value='1'>Zdrowie</option>
                            <option value='2'>Uroda</option>
                        </select>
                    </div>
                    <div className="reservation__secRow">
                        <div className='reservation__Service'>Usługa</div>
                        <select>
                            <option value='0'>Wybierz usługe</option>
                            <option value='1'>Paznokcie żelowe</option>
                            <option value='2'>Makijaż</option>
                            <option value='3'>Hybrydy</option>
                            <option value='4'>Stylizacja paznokci</option>
                        </select>
                    </div>
                    <div className="reservation__trdRow">
                        <div className='reservation__employee'>Pracownik</div>
                        <select>
                            <option value='0'>Każdy</option>
                            <option value='1'>Adam Małysz</option>
                        </select>
                    </div>
                </div>
                <div className='reservation__secContainer'>
                    <div className="reservation__secRow">

                        <div className='reservation__available'>Jestem dostępny w dniu..</div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation;