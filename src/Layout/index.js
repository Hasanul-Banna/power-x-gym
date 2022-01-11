import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const Layout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Banner />
            {children}
            <Footer />
        </>
    );
};

export default Layout;