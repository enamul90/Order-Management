import React from 'react';
import RootLayout from "./component/header/Root-Layout.jsx";
import ProductDetailsPage from "./page/details/ProductDetails-Page.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetails from "./component/details/Product-Details.jsx";
import RegisterPage from "./page/login-form/Register-page.jsx";
import LoginPage from "./page/login-form/Login-Page.jsx";
import HomePage from "./page/home/Home-Page.jsx";
import OrderPage from "./page/order/Order-Page.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    // user login
                    <Route path={"/register"} element={<RegisterPage />}/>
                    <Route path={"/login"} element={<LoginPage />}/>

                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/product-details"} element={<ProductDetailsPage />} />
                    <Route path={"/order"} element={<OrderPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;