import React from "react";
import '../scss/main.scss';

const Blog = () => {


    return (
        <section className='blog' id="blog">
            <div className='wrapper'>
                <div className='blog__container'>
                    <span className='blog__plan'> Co u nas słychać ?</span>
                    <h1 className='blog__header'> Ostatnie wydarzenia i nowości</h1>
                    <div className='blog__content'>
                        <div className='blog__firstNews'>
                            <a href='/#'> <img src={require('../images/usta_news1.jpg')} style={{
                                width: '350px',
                                height: '200px'
                            }}/></a>
                            <h1><a href='/#'> Piękne usta: 1ml kwasu hialuronowego</a></h1>
                        </div>
                        <div className='blog__firstNews'>
                            <a href='/#'> <img src={require('../images/lipoliza_news2.jpg')} style={{
                                width: '350px',
                                height: '200px'
                            }}/></a>
                            <h1><a href='/#'> Lipoliza iniekcyjna</a></h1>
                        </div>
                        <div className='blog__firstNews'>
                            <a href='/#'> <img src={require('../images/rzeski_news3.jpg')} style={{
                                width: '350px',
                                height: '200px'
                            }}/></a>
                            <h1><a href='/#'> Rzesy: Metoda 3D</a></h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;