import React from 'react';
import AppNavbar from "./App-Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const RootLayout = ({ children }) => {
    return (
        <>
            <div className="grid lg:grid-cols-5">
                <div className={"col-span-1 "}>

                </div>
                <
                div className={"col-span-4 relative"}>
                    <AppNavbar />
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;
