import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/PowerXlogo.png'
import '../assets/styles/_NavigationBar.scss'
import { Menu, X } from 'react-feather';

const NavigationBar = () => {
    const navs = ['Home', 'Services', 'Schedules', 'Pricing', 'About']
    const [showMblMnu, setShowMnu] = useState(false)
    return (<>
        <nav className='bg-secondary py-1'>
            <Container className='d-flex justify-content-between'>

                <Navbar.Brand className='text-white'>
                    <img alt="logo" src={logo} width="40" className="d-inline-block align-top" />&nbsp;POWER-<b className='text-primary'>X</b>
                </Navbar.Brand>
                <Nav style={{ lineHeight: '45px' }} className='d-lg-block d-none'>
                    {
                        navs.map(item => <NavLink key={item} to={`${item}`} activeClassName="active" className='mx-3'>{item}</NavLink>)
                    }
                </Nav>
                <div className='d-lg-none d-block pt-2'>
                    <Menu size={20} color={'white'} onClick={() => setShowMnu(true)} />
                </div>
            </Container >
        </nav>
        {showMblMnu && <div className='mobile-menu-overlay'>
            <div style={{ textAlign: "right" }} className='m-2'>
                <X size={22} color={'white'} onClick={() => setShowMnu(false)} />
            </div>
            <Nav style={{ height: '90vh' }} className={`d-flex flex-column align-items-center justify-content-center`}>
                {
                    navs.map(item => <NavLink onClick={() => setShowMnu(false)} key={item} to={`${item}`} activeClassName="active" className='my-3 display-3'>{item}</NavLink>)
                }
            </Nav>
        </div>}
    </>
    );
};

export default NavigationBar;