import React from 'react';
import RootLayout from "../../component/header/Root-Layout.jsx";
import OrderHistory from "../../component/order/Order-History.jsx";

const OrderPage = () => {
    return (
        <div>
            <RootLayout>
                <OrderHistory />
            </RootLayout>
        </div>
    );
};

export default OrderPage;