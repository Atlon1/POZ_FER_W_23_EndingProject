import React from "react";
import '../scss/main.scss';
import {Link} from "react-router-dom";

const Blog = () => {


    return (
        <section className='blog' id="blog">
            <div className='wrapper'>
                <div className='blog__container'>
                    <span className='blog__plan'> Co u nas słychać ?</span>
                    <h1 className='blog__header'> Ostatnie wydarzenia i nowości</h1>
                    <div className='blog__content'>
                        <div className='blog__firstNews'>
                            <div>
                                <Link to='/blog_news1'><img src={require('../images/usta_news1.jpg')} style={{
                                    width: '350px',
                                    height: '200px'
                                }}/></Link>
                            </div>
                            <h1><Link to='/blog_news1'> Piękne usta: 1ml kwasu hialuronowego</Link></h1>
                        </div>
                        <div className='blog__firstNews'>
                            <div>
                                <Link to='/blog_news2'><img src={require('../images/lipoliza_news2.jpg')} style={{
                                    width: '350px',
                                    height: '200px'
                                }}/></Link>
                            </div>
                            <h1><Link to='/blog_news2'> Lipoliza iniekcyjna</Link></h1>
                        </div>
                        <div className='blog__firstNews'>
                            <div>
                                <Link to='/blog_news3'><img src={require('../images/rzeski_news3.jpg')} style={{
                                    width: '350px',
                                    height: '200px'
                                }}/></Link>
                            </div>
                            <h1><Link to='/blog_news3'> Rzesy: Metoda 3D</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;