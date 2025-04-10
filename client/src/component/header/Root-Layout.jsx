import React from 'react';
import AppNavbar from "./App-Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const RootLayout = ({ children }) => {
    return (
        <>
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50">
                <AppNavbar />
            </div>

            {/* Page content */}
            <div className="my-5">
                {children}
            </div>
        </>
    );
};

export default RootLayout;
