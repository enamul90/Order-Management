import React, { useState, useEffect, memo } from 'react';
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
    Avatar,
    Tooltip,
    Stack,
    Skeleton,
    Card,
} from '@mui/material';
import { PreviewOutlined, Visibility } from '@mui/icons-material';
import OrderHeader from "../order-header.jsx";

const orders = [
    { id: 1, productID: "LU10001", brand: "Nike", size: "7", title: "John Doe", qty: "2 pcs", price: "8500.00 Tk", image: "" },
    { id: 2, productID: "LU10002", brand: "Adidas", size: "8.5", title: "Jane Smith", qty: "1 pcs", price: "9200.00 Tk", image: "" },
    { id: 3, productID: "LU10003", brand: "Puma", size: "6", title: "Alice Brown", qty: "3 pcs", price: "7000.00 Tk", image: "" },
    { id: 4, productID: "LU10004", brand: "Reebok", size: "9", title: "Robert Johnson", qty: "5 pcs", price: "11000.00 Tk", image: "" },
    { id: 5, productID: "LU10005", brand: "New Balance", size: "10", title: "Emily Davis", qty: "2 pcs", price: "9900.00 Tk", image: "" },
    { id: 6, productID: "LU10006", brand: "ASICS", size: "8", title: "Michael Wilson", qty: "4 pcs", price: "8700.00 Tk", image: "" },
    { id: 7, productID: "LU10007", brand: "Converse", size: "7.5", title: "Sarah Miller", qty: "6 pcs", price: "7800.00 Tk", image: "" },
    { id: 8, productID: "LU10008", brand: "Fila", size: "6.5", title: "David Martinez", qty: "1 pcs", price: "8300.00 Tk", image: "" },
    { id: 9, productID: "LU10009", brand: "Skechers", size: "9.5", title: "Sophia Lee", qty: "7 pcs", price: "9600.00 Tk", image: "" },
    { id: 10, productID: "LU10010", brand: "Vans", size: "8", title: "Daniel Anderson", qty: "3 pcs", price: "8900.00 Tk", image: "" },
];


const orderDetails = {
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
    },
    payment: {
        subTotal: '800.00',
        taxes: '0.00',
        deliveryCharge: '400.00',
        total: '1200.00',
    },
    status: 'Pending',
};

const OrderRow = memo(({ order, onView }) => (
    <TableRow
        hover
        sx={{
            '&:nth-of-type(odd)': { bgcolor: 'grey.50' },
            transition: 'background-color 0.2s',
        }}
    >
        <TableCell sx={{ py: 1.5 }}>
            <Tooltip title={order.title}>
                <Typography variant="body2" sx={{ fontWeight: 500, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {order.title}
                </Typography>
            </Tooltip>
        </TableCell>
        <TableCell sx={{ py: 1.5 }}>{order.qty}</TableCell>
        <TableCell sx={{ py: 1.5 }}>{order.price}</TableCell>
        <TableCell sx={{ py: 1.5 }}>
            {order.image ? (
                <Avatar src={order.image} variant="square" sx={{ width: 48, height: 48, borderRadius: 1 }} />
            ) : (
                <Avatar variant="square" sx={{ width: 48, height: 48, bgcolor: 'grey.200', borderRadius: 1 }}>
                    <Typography variant="body2" color="text.secondary">-</Typography>
                </Avatar>
            )}
        </TableCell>
        <TableCell sx={{ py: 1.5 }}>
            <IconButton onClick={() => onView(order.id)} size="small" sx={{ color: 'primary.main' }}>
                <Visibility />
            </IconButton>
        </TableCell>
    </TableRow>
));

const DeliveryOrder = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleViewOrder = (id) => {
        setLoading(true);
        const selected = orders.find((order) => order.id === id);
        if (selected) {
            setTimeout(() => {
                setSelectedOrder({ ...orderDetails, ...selected });
                setLoading(false);
            }, 300);
        }
    };

    useEffect(() => {
        if (orders.length > 0) handleViewOrder(orders[0].id);
    }, []);

    return (
        <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 4, bgcolor: 'grey.50', minHeight: '100vh' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, mx: 'auto' }}>
                {/* Orders Table */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ mb: 3 }}>
                        <OrderHeader />
                    </Box>
                    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2, overflowX: 'auto' }}>
                        <Table sx={{ minWidth: 650, bgcolor: 'white' }}>
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'grey.100' }}>
                                    {['PRODUCT TITLE', 'QUANTITY', 'SELL PRICE/PCS', 'IMAGE', 'ACTION'].map((header) => (
                                        <TableCell key={header} sx={{ py: 2, fontWeight: 600, color: 'text.primary' }}>
                                            {header}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <OrderRow key={order.id} order={order} onView={handleViewOrder} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* Order Preview */}
                <Box sx={{ width: { xs: '100%', lg: 400 }, minWidth: 0 }}>
                    {loading ? (
                        <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
                            <Skeleton variant="text" width="60%" height={32} />
                            <Skeleton variant="rectangular" width="100%" height={150} sx={{ mt: 2, borderRadius: 1 }} />
                            <Skeleton variant="text" width="80%" sx={{ mt: 2 }} />
                            <Skeleton variant="text" width="70%" sx={{ mt: 1 }} />
                            <Skeleton variant="text" width="50%" sx={{ mt: 1 }} />
                        </Card>
                    ) : selectedOrder ? (
                        <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, bgcolor: 'white' }}>
                            <Typography variant="h5" fontWeight="bold" mb={3}>
                                Order Preview
                            </Typography>
                            <Stack spacing={3}>
                                {/* Product Details */}
                                <Box>
                                    <Box sx={{ mb: 2, bgcolor: 'grey.100', borderRadius: 2, overflow: 'hidden' }}>
                                        {selectedOrder.image ? (
                                            <img
                                                src={selectedOrder.image}
                                                alt="product"
                                                style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: 200,
                                                    bgcolor: 'grey.200',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Typography variant="body2" color="text.secondary">
                                                    No Image
                                                </Typography>
                                            </Box>
                                        )}
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {selectedOrder.productID}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="medium">
                                        {selectedOrder.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Brand: {selectedOrder.brand}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Price: {selectedOrder.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Quantity: {selectedOrder.qty}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Size: {selectedOrder.size}
                                    </Typography>
                                </Box>

                                {/* Shipping Address */}
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" mb={2}>
                                        Shipping Address
                                    </Typography>
                                    <Stack spacing={1}>
                                        {Object.entries(selectedOrder.shipping.insideDhaka).map(([key, value]) => (
                                            <Box key={key} display="flex" justifyContent="space-between">
                                                <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                                </Typography>
                                                <Typography variant="body2" sx={{ flex: 1, textAlign: 'right' }}>
                                                    {value}
                                                </Typography>
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
                                                <Typography variant="body2" color="text.secondary">
                                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                                </Typography>
                                                <Typography variant="body2">${value}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </Stack>
                        </Card>
                    ) : (
                        <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, bgcolor: 'white' }}>
                            <Typography variant="body1" color="text.secondary">
                                No order selected
                            </Typography>
                        </Card>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default DeliveryOrder;