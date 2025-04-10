import React, { useState } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tabs,
    Tab,
    Stack,
    Avatar,
    Button,
} from '@mui/material';
import { Visibility } from '@mui/icons-material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const orders = [
    { id: 1, title: 'Enamul Hossen Firoz', qty: '02 pcs', price: '10000.00 Tk', image: '' },
    { id: 2, title: 'Enamul Hossen Firoz', qty: '10 pcs', price: '10000.00 Tk', image: '' },
    { id: 3, title: 'Enamul Hossen Firoz', qty: '20 pcs', price: '10000.00 Tk', image: '' },
    { id: 4, title: 'Enamul Hossen Firoz', qty: '5 pcs', price: '10000.00 Tk', image: '' },
    { id: 5, title: 'Enamul Hossen Firoz', qty: '6 pcs', price: '10000.00 Tk', image: '' },
];

const orderDetails = {
    id: 'LU202108',
    title: 'Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod',
    brand: 'Tago',
    description:
        'Ready-to-wear floral print fit-and-flare silhouette dress in green tiered midi length. A versatile option, dress down with chunky trainers or up with strappy sandals.',
    size: '5.5',
    price: '400.00',
    qty: '02',
    image: 'path-to-watch-image.jpg',
    shipping: {
        insideDhaka: {
            name: 'Rabiul Islam',
            phone: '01700-00000',
            address1: 'Road 123',
            address2: 'Road 123',
            city: 'Savar, Union Dhaka',
            postCode: '7800',
            country: 'Bangladesh',
        },
        outsideDhaka: {
            name: 'Rabiul Islam',
            phone: '01700-00000',
            address1: 'Road 123',
            address2: 'Road 123',
            city: 'Savar, Union Dhaka',
            postCode: '7800',
            country: 'Bangladesh',
        },
    },
    payment: {
        subTotal: '800.00',
        taxes: '0.00',
        deliveryCharge: '400.00',
        total: '1200.00',
    },
};

const OrderHistory = () => {
    const [tabValue, setTabValue] = useState('1');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [shippingTab, setShippingTab] = useState('1');

    const handleTabChange = (event, newValue) => setTabValue(newValue);

    const handleViewOrder = (id) => {
        const selected = orders.find(order => order.id === id);
        if (selected) {
            setSelectedOrder({ ...orderDetails, ...selected });
        }
    };


    return (
        <Box sx={{ p: { xs: 2, md: 5 }, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
            <Typography variant="h5" fontWeight="bold" mb={3}>
                Order History
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '3fr 2fr' }, gap: 3 }}>
                {/* Orders Table */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                    <TabContext value={tabValue}>
                        <TabList onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tab label="Delivered Order" value="1" />
                            <Tab label="New Order" value="2" />
                        </TabList>

                        <TabPanel value="1" sx={{ p: 0, pt: 2 }}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>PRODUCT TITLE</TableCell>
                                            <TableCell>QTY</TableCell>
                                            <TableCell>SELL PRICE</TableCell>
                                            <TableCell>IMAGE</TableCell>
                                            <TableCell>ACTION</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.map((order) => (
                                            <TableRow key={order.id} hover >
                                                <TableCell>{order.title}</TableCell>
                                                <TableCell>{order.qty}</TableCell>
                                                <TableCell>{order.price}</TableCell>
                                                <TableCell>
                                                    {order.image ? (
                                                        <Avatar src={order.image} variant="square" sx={{ width: 40, height: 40 }} />
                                                    ) : (
                                                        <Typography color="text.secondary">-</Typography>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <IconButton size="small" onClick={() => handleViewOrder(order.id)}>
                                                        <Visibility sx={{ color: 'info.main' }} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>

                        <TabPanel value="2">
                            <Typography>New Order Content</Typography>
                        </TabPanel>
                    </TabContext>
                </Paper>

                {/* Order Details Panel */}
                {selectedOrder && (
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Stack spacing={3}>
                            {/* Product Info */}
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                                <Box sx={{ flex: 1 }}>
                                    <img
                                        src={selectedOrder.image}
                                        alt="Product"
                                        style={{ width: '100%', maxWidth: 200, borderRadius: 8 }}
                                    />
                                </Box>
                                <Box sx={{ flex: 2 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Product ID: {selectedOrder.id}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">{selectedOrder.title}</Typography>
                                    <Typography color="text.secondary" mt={1}>Brand: {selectedOrder.brand}</Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        {selectedOrder.description}
                                    </Typography>
                                    <Stack direction="row" spacing={2} mt={2}>
                                        <Typography>Size: {selectedOrder.size}</Typography>
                                        <Typography>Price: ${selectedOrder.price}</Typography>
                                        <Typography>Qty: {selectedOrder.qty}</Typography>
                                    </Stack>
                                </Box>
                            </Box>

                            {/* Shipping Address */}
                            <Box>
                                <Typography variant="h6" fontWeight="bold" mb={2}>
                                    Shipping Address
                                </Typography>
                                <Stack direction="row" spacing={2} mb={2}>
                                    <Button
                                        variant={shippingTab === '1' ? 'contained' : 'outlined'}
                                        onClick={() => setShippingTab('1')}
                                    >
                                        Inside Dhaka
                                    </Button>
                                    <Button
                                        variant={shippingTab === '2' ? 'contained' : 'outlined'}
                                        onClick={() => setShippingTab('2')}
                                    >
                                        Outside Dhaka
                                    </Button>
                                </Stack>
                                <Stack spacing={1}>
                                    {Object.entries(
                                        shippingTab === '1'
                                            ? selectedOrder.shipping.insideDhaka
                                            : selectedOrder.shipping.outsideDhaka
                                    ).map(([key, value]) => (
                                        <Box key={key} display="flex" justifyContent="space-between">
                                            <Typography color="text.secondary">
                                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                            </Typography>
                                            <Typography>{value}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>

                            {/* Payment */}
                            <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2 }}>
                                <Typography variant="h6" fontWeight="bold" mb={2}>
                                    Payment
                                </Typography>
                                <Stack spacing={1}>
                                    {Object.entries(selectedOrder.payment).map(([key, value]) => (
                                        <Box key={key} display="flex" justifyContent="space-between">
                                            <Typography color="text.secondary">
                                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                            </Typography>
                                            <Typography>${value}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Stack>
                    </Paper>
                )}
            </Box>
        </Box>
    );
};

export default OrderHistory;
