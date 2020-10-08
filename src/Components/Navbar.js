import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../PowerXlogo.png';

const Navibar = () => {
    return (
            <Navbar  bg={ window.scrollY ? "dark" : "dark"} variant="dark">
                <Navbar.Brand href="/home">
                    <img alt="logo" src={logo} width="40" className="d-inline-block align-top"/>{' '}POWER-<span>X</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">Services</Nav.Link>
                    <Nav.Link href="/">Schedules</Nav.Link>
                    <Nav.Link href="/">About us</Nav.Link>
                    <Nav.Link href="/">Blog</Nav.Link>
                    <Nav.Link href="/">Pricing</Nav.Link>
                    <Nav.Link href="/">Contact us</Nav.Link>
                </Nav>
            </Navbar>
    );
};

export default Navibar;