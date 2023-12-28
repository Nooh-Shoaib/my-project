import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileDropDown from './MobileDropDown';



function Layout({ children }) {
        return (
                <div>
                        <Header />
                        <MobileDropDown />
                        {/* <SideIcons /> */}
                        {children}
                        <Footer />
                </div>
        );
}

export default Layout;