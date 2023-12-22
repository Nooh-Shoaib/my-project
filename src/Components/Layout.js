import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SidebarMenu from './SidebarMenu';



function Layout({ children }) {
        return (
                <div>
                        <Header />
                        <SidebarMenu />

                        {/* <SidebarIcons /> */}
                        {children}
                        <Footer />
                </div>
        );
}

export default Layout;