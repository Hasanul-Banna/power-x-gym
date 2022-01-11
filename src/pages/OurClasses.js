import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import '../assets/styles/_home.scss'
import gymInt from '../assets/Images/atGym.jpg'
import gif from '../assets/Images/Gif/gym-guy-8x6.gif'
import { ArrowRight } from 'react-feather';

const OurClasses = () => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'];
    return (<>
        <section className="container schedule">
            <Row className="">
                <Col md='6' className='position-relative  my-4'>
                    <img src={gymInt} alt={'about'} className='img-fluid' />
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fugiat recusandae quia numquam eaque hic obcaecati ipsam dolore perspiciatis doloremque repudiandae laborum optio, ea illum quam consectetur soluta nostrum blanditiis consequuntur dolores facere possimus ipsum delectus. Ab quas non, ducimus earum magnam iusto esse quasi distinctio a perspiciatis ex nihil!</p>
                </Col>
                <Col md='6' className='position-relative my-4'>
                    <h2 className='text-center'>class <span className='text-primary'>schedule</span></h2>
                    <Row className="">
                        {
                            days.map((item) => <Col md='6' className='text-center my-1' key={item}>
                                <Card>
                                    <h3 className='mt-2'>{item}</h3>
                                    <p className="text-primary mb-0">7:00 Am to 11:00pm</p>
                                </Card>
                            </Col>)
                        }
                        <Col md='12'>
                        <img src={gif} alt={'about'} className='img-fluid' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    </>
    );
};

export default OurClasses;