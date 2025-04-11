import React from 'react';
import RootLayout from "../../component/header/Root-Layout.jsx";
import DeliveryOrder from "../../component/order/Delivery/Delivery-Order.jsx";

const DeliveryOrderPage = () => {
    return (
        <RootLayout>
            <DeliveryOrder />
        </RootLayout>
    );
};

export default DeliveryOrderPage;