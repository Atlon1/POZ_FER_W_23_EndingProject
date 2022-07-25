import React from "react";
import '../../scss/main.scss';
import {Link} from "react-router-dom";

const News1 = () => {

    return (
        <section className='news1'>
            <div className='wrapper'>
                <div className='news1__container'>
                    <div className='news1__img'>
                        <img src={require('../../images/usta_news1.jpg')} className='news1__img1'/>
                    </div>
                    <div className='news1__text'>
                        <h1> Piękne usta: 1ml kwasu hialuronowego</h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div className='news1__backButton'>
                <Link to='/Blog'>Wstecz</Link>
            </div>
        </section>
    )
}

export default News1;