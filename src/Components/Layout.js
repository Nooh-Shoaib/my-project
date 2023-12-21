import React from 'react';
import Header from './Header';
import SidebarIcons from './SidebarIcons';
import Footer from './Footer';



function Layout({ children }) {
        return (
                <div>
                        <Header />
                        {/* <SidebarIcons /> */}
                        {children}
                        <Footer />
                </div>
        );
}

export default Layout;