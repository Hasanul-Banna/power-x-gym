import React from 'react';
import { Col, Row } from 'react-bootstrap';
import footerGIF from '../assets/Images/Gif/lead_fitness.gif'
import '../assets/styles/_footer.scss'

const Footer = () => <footer className='bg-secondary'>
    <div className="w-100 container">

        <Row className='m-0 w-100 py-md-4 text-white'>

            <Col md='4'>
                <h3 className='text-center'>POWER-<span className='text-primary'>X</span></h3>
                <img src={footerGIF} alt="GIF" className="img-fluid" />
            </Col>
            <Col md='2'>
                <p>Need Help?</p>
                <ul>
                    <li>FAQ</li>
                    <li>Help</li>
                    <li>Support</li>
                    <li>Live Chat</li>
                    <li>Send Feedback</li>
                </ul>
            </Col>
            <Col md='2'>
                <p>Stay Connected</p>
                <ul>
                    <li>Youtube</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </Col>
            <Col md='4'>
                <p>Join Our Newsletter</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate eveniet unde, consequatur error ratione praesentium.</p>
                <button className="btn btn-primary">Subscribe Now</button>
            </Col>
        </Row>
        <p className="text-center text-primary bg-secondary w-100 m-0"> <small > &copy; Copyright 2022 || Developed by Hasanul-Banna</small></p>
    </div>
</footer>

export default Footer;