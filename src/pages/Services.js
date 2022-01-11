import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../assets/styles/_home.scss'
import cardio1 from '../assets/Images/tr1.jpg'
import cardio2 from '../assets/Images/tr2.jpg'
import cardio3 from '../assets/Images/tr3.jpg'
import { ArrowRight } from 'react-feather';

const Services = () => {
    return (
        <section className="container home-section-4">
            <h2 className='text-center mt-5'>our <span className='text-primary'>services</span></h2>
            <Row className="">
                <Col md='4' className='position-relative text-center my-4'>
                    <p>Cardio training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio1} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='4' className='position-relative text-center my-4'>
                    <p>special training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio2} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='4' className='position-relative text-center my-4'>
                    <p>Cardio training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio3} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='4' className='position-relative text-center my-4'>
                    <p>Cardio training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio1} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='4' className='position-relative text-center my-4'>
                    <p>special training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio2} alt={'about'} className='img-fluid' />
                </Col>
                <Col md='4' className='position-relative text-center my-4'>
                    <p>Cardio training program &nbsp;&nbsp;&nbsp;<ArrowRight size={12} /></p>
                    <img src={cardio3} alt={'about'} className='img-fluid' />
                </Col>

            </Row>
        </section>
    );
};

export default Services;