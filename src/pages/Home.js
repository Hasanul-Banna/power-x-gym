import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bannerVideo from '../assets/Images/VideoBG.mp4'
import '../assets/styles/_home.scss'

import proggression from '../assets/Images/Icons/proggression.png'
import workout from '../assets/Images/Icons/worlout.png'
import nutrition from '../assets/Images/Icons/nutrition.png'
import about from '../assets/Images/about.jpg'

import cardio1 from '../assets/Images/cardio.jpg'
import cardio2 from '../assets/Images/hardcardio.jpg'
import { ArrowRight } from 'react-feather';

const Home = () => {
    const section2 = [
        { icon: proggression, title: 'proggression', description: '' },
        { icon: workout, title: 'workout', description: '' },
        { icon: nutrition, title: 'nutrition', description: '' }
    ]
    return <>
        <header className='homeBanner'>
            <div className="w-100">
                <video autoPlay loop muted id="bgvideo">
                    <source src={bannerVideo} type="video/mp4" />
                </video>
            </div>
            <div className="header-text text-white">
                <div className="container">
                    <h1 className="display-2">
                        the best fitness <br /> studio in town
                    </h1>
                    <div>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </small><br />
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga</small><br />
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, fugiat</small>
                    </div>
                    <br />
                    <button className="btn-lg btn-primary px-5">JOIN US</button>
                </div>
            </div>
        </header>
        <section className="container my-5">
            <Row>
                {
                    section2.map((item, index) => <Col key={index} md='4' className='home-section-2 my-2'>
                        <div className={`mx-3 px-4 pt-5 ${item.title}`}>
                            <img src={item.icon} alt={item.title} className='mb-4' />
                            <h2>{item.title}</h2>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas maiores, nostrum omnis eius ratione unde laudantium.</small>
                        </div>
                    </Col>)
                }

            </Row>
        </section>
        <section className="container">
            <Row className="my-5">
                <Col md='6' className='home-section-3'>
                    <img src={about} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='6' className='home-section-3 pt-5'>
                    {/* <p className="display-5">About US</p> */}
                    <h2>we are here to dream</h2>
                    <h2>our dream is to serve you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, ad deleniti sapiente quibusdam et sint unde quasi voluptatum explicabo commodi natus tempora veniam exercitationem sequi vitae quia rem eveniet esse?</p>
                </Col>

            </Row>
        </section>
        <section className="container home-section-4">
            <h2 className='text-center'>Training <span className='text-primary'>programs</span></h2>
            <Row className="my-5 ">
                <Col md='6' className='position-relative text-center'>
                    <p>Cardio training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio1} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='6' className='position-relative text-center'>
                    <p>special training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio2} alt={'about'} className='img-fluid' />
                </Col>

            </Row>
        </section>
    </>
}

export default Home;