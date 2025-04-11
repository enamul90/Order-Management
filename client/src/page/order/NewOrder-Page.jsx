import React from 'react';
import RootLayout from "../../component/header/Root-Layout.jsx";
import NewOrder from "../../component/order/New Order/NewOrder.jsx";

const NewOrderPage = () => {
    return (
        <RootLayout>
            <NewOrder />
        </RootLayout>
    );
};

export default NewOrderPage;