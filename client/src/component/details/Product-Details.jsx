import React, { useState } from 'react';
import { Typography, Box, Tab, Button, TextField, Stack, Chip, Divider } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FaMinus } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import ImageGallery from './image-gallery/Image-Gallery.jsx';
import ProductDescription from './Product-Description.jsx';
import ShippingDetails from './Shipping-Details.jsx';
import Footer from '../footer/Footer.jsx';
import MenuBar from './menu-bar.jsx';

const ProductDetails = () => {
    const [price] = useState(450);
    const [quantity, setQuantity] = useState(1);
    const [value, setValue] = useState('1');
    const [selectedSize, setSelectedSize] = useState(null);

    const IncreaseQtyHandler = () => setQuantity((prev) => prev + 1);
    const DecreaseQtyHandler = () => quantity > 1 && setQuantity((prev) => prev - 1);
    const handleChange = (event, newValue) => setValue(newValue);
    const handleSizeSelect = (size) => setSelectedSize(size);

    const totalPrice = price * quantity;
    const discountPrice = 660;
    const taxes = 2.0;
    const deliveryCharge = 4.0;
    const discount = 5.0;
    const finalTotal = totalPrice + taxes + deliveryCharge - discount;

    return (
        <>
            <MenuBar />
            <Box sx={{ px: { xs: 2, md: 5 }, py: 5, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
                <Box sx={{ display: 'grid', gap: 5, gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}>
                    {/* Left Side */}
                    <Box>
                        <ImageGallery />
                        <TabContext value={value}>
                            <TabList
                                onChange={handleChange}
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider',
                                    '& .MuiTab-root': { textTransform: 'none', fontWeight: 500 },
                                    '& .Mui-selected': { color: '#f59e0b' },
                                    '& .MuiTabs-indicator': { bgcolor: '#f59e0b', height: 3 },
                                }}
                            >
                                <Tab label="Description" value="1" />
                            </TabList>
                            <TabPanel value="1" sx={{ p: 0, pt: 3 }}>
                                <ProductDescription />
                            </TabPanel>
                        </TabContext>
                    </Box>

                    {/* Right Side */}
                    <Stack spacing={4}>
                        <Box>
                            <Typography variant="body2" color="text.secondary">
                                Product ID: UID152368
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" mt={1} sx={{ color: 'text.primary' }}>
                                Readymade Linen Fabrics Glorious Designed Gown 1piece long kurti And koti, By Anisha Fashion Gallary Kamiz and koti For Stylish Women / Girls
                            </Typography>
                            <Stack direction="row" spacing={2} alignItems="center" mt={1}>
                                <Typography variant="subtitle2">
                                    Brand: <span className="font-medium text-purple-500">Tago</span>
                                </Typography>
                                <Chip
                                    label="Available (50 in stock)"
                                    size="small"
                                    color="success"
                                    variant="outlined"
                                    sx={{ borderRadius: 1 }}
                                />
                            </Stack>
                        </Box>

                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            Stylish Joggers & T-shirt combo for men's Stylish Joggers & T-shirt combo for men'sStylish Joggers & T-shirt combo for men's Stylish
                            Joggers & T-shirt combo for men'sStylish Joggers & T-shirt combo for men's Stylish Joggers & T-shirt combo for men's Stylish Joggers &.
                            T-shirt combo for men's Stylish Joggers & T-shirt combo for men's Stylish Joggers & T-shirt combo for men's Stylish Joggers & T-shirt combo for men's
                        </Typography>

                        {/* Size Selection */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: 'text.primary' }}>
                                Select Size
                            </Typography>
                            <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ gap: 1 }}>
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? 'contained' : 'outlined'}
                                        onClick={() => handleSizeSelect(size)}
                                        sx={{
                                            minWidth: 48,
                                            height: 48,
                                            borderRadius: 1,
                                            bgcolor: selectedSize === size ? 'purple.500' : 'grey.100',
                                            color: selectedSize === size ? 'white' : 'text.primary',
                                            borderColor: selectedSize === size ? 'purple.500' : 'grey.300',
                                            fontWeight: 500,
                                            '&:hover': {
                                                bgcolor: selectedSize === size ? 'purple.600' : 'grey.200',
                                                borderColor: selectedSize === size ? 'purple.600' : 'grey.400',
                                            },
                                        }}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </Stack>
                        </Box>

                        {/* color Selection */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: 'text.primary' }}>
                                Select Color
                            </Typography>
                            <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ gap: 1 }}>
                                {['Black', 'Green', 'White', 'Rad', 'Gray'].map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? 'contained' : 'outlined'}
                                        onClick={() => handleSizeSelect(size)}
                                        sx={{
                                            minWidth: 48,
                                            height: 48,
                                            borderRadius: 1,
                                            bgcolor: selectedSize === size ? 'purple.500' : 'grey.100',
                                            color: selectedSize === size ? 'white' : 'text.primary',
                                            borderColor: selectedSize === size ? 'purple.500' : 'grey.300',
                                            fontWeight: 500,
                                            '&:hover': {
                                                bgcolor: selectedSize === size ? 'purple.600' : 'grey.200',
                                                borderColor: selectedSize === size ? 'purple.600' : 'grey.400',
                                            },
                                        }}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </Stack>
                        </Box>


                        {/* Price and Quantity */}
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ my: 2 }}>
                            <Box>
                                <Typography variant="h4" component="span">
                                    ${price}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="span"
                                    sx={{ ml: 2, textDecoration: 'line-through', color: 'grey.500' }}
                                >
                                    ${discountPrice}
                                </Typography>
                            </Box>
                            <Stack
                                direction="row"
                                alignItems="center"
                                sx={{
                                    border: 1,
                                    borderColor: 'grey.300',
                                    borderRadius: 1,
                                    p: 0.5,
                                    bgcolor: 'white',
                                }}
                            >
                                <Button
                                    onClick={DecreaseQtyHandler}
                                    disabled={quantity === 1}
                                    sx={{ minWidth: 40, color: quantity === 1 ? 'grey.400' : 'purple.500' }}
                                >
                                    <FaMinus />
                                </Button>
                                <TextField
                                    value={quantity}
                                    inputProps={{ readOnly: true, style: { textAlign: 'center', fontWeight: 600 } }}
                                    variant="standard"
                                    sx={{ width: 50, '& .MuiInputBase-input': { py: 1 } }}
                                    InputProps={{ disableUnderline: true }}
                                />
                                <Button onClick={IncreaseQtyHandler} sx={{ minWidth: 40, color: 'purple.500' }}>
                                    <TiPlus />
                                </Button>
                            </Stack>
                        </Stack>

                        {/* Shipping Address */}
                        <Box>
                            <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: 'text.primary' }}>
                                Shipping Address
                            </Typography>
                            <ShippingDetails />
                        </Box>

                        {/* Total Summary */}
                        <Box
                            sx={{
                                border: 1,
                                borderColor: 'grey.300',
                                borderRadius: 2,
                                bgcolor: 'white',
                                overflow: 'hidden',
                            }}
                        >
                            <Stack spacing={2} sx={{ p: 3 }}>
                                {[
                                    ['Sub Total', `$${totalPrice.toFixed(2)}`],
                                    ['Taxes', `$${taxes.toFixed(2)}`],
                                    ['Delivery Charge', `$${deliveryCharge.toFixed(2)}`],
                                    ['Discount', `-$${discount.toFixed(2)}`],
                                ].map(([label, value], idx) => (
                                    <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                            {label}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ color: value.startsWith('-') ? 'error.main' : 'text.primary' }}
                                        >
                                            {value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                            <Divider sx={{ borderColor: 'grey.300' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    px: 3,
                                    py: 2,
                                    bgcolor: 'purple.50',
                                }}
                            >
                                <Typography variant="body1" fontWeight="bold" sx={{ color: 'text.primary' }}>
                                    TOTAL PAYMENT
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" sx={{ color: 'success.main' }}>
                                    ${finalTotal.toFixed(2)}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Add to Cart Button */}
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#F1A350',
                                '&:hover': { bgcolor: '#F1A355' },
                                textTransform: 'none',
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 500,
                                borderRadius: 2,
                            }}
                            fullWidth
                        >
                            Add to Cart
                        </Button>
                    </Stack>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default ProductDetails;