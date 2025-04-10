import React from 'react';
import { Box, Typography, Paper, Stack, Divider, Button, IconButton } from '@mui/material';
import { FaMoneyCheckAlt, FaCreditCard, FaWallet } from 'react-icons/fa';
import { EditOutlined, DeleteOutline } from '@mui/icons-material';

const paymentMethods = [
    {
        title: 'Bkash',
        icon: <FaMoneyCheckAlt size={24} />,
        steps: ['Open the Bkash app on your mobile device.', 'Select the "Send Money" option.', 'Enter the recipient details and confirm the payment.'],
    },
    {
        title: 'Nagad',
        icon: <FaWallet size={24} />,
        steps: ['Open the Nagad app or dial *167#.', 'Choose the "Send Money" option.', 'Enter the recipient’s number and confirm the transaction.'],
    },
    {
        title: 'Credit/Debit Card',
        icon: <FaCreditCard size={24} />,
        steps: ['Enter your card details (number, expiry, CVV).', 'Verify the billing address.', 'Confirm the payment to complete the transaction.'],
    },
];

const AddPaymentMethod = () => {
    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', py: 4 }}>
            <Typography
                variant="h5"
                fontWeight="bold"
                mb={4}
                sx={{ color: 'text.primary', textAlign: { xs: 'center', md: 'left' } }}
            >
                Payment Management
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg:'1fr' },
                    gap: 3,
                }}
            >
                {paymentMethods.map((method, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            border: '1px solid',
                            borderColor: 'grey.200',
                            bgcolor: 'background.paper',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                                borderColor: 'purple.400',
                            },
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                            <Box
                                sx={{
                                    color: 'purple.500',
                                    bgcolor: 'purple.50',
                                    p: 1.5,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {method.icon}
                            </Box>
                            <Typography variant="h6" fontWeight="medium" sx={{ color: 'text.primary' }}>
                                {method.title}
                            </Typography>
                        </Stack>

                        <Divider sx={{ mb: 2, borderColor: 'grey.300' }} />

                        <Stack component="ol" spacing={1} sx={{ pl: 2, listStyleType: 'decimal' }}>
                            {method.steps.map((step, stepIndex) => (
                                <Box component="li" key={stepIndex}>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                        {step}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>

                        <Stack direction="row" justifyContent="flex-end" spacing={1} mt={3}>
                            <IconButton
                                color="primary"
                                sx={{ '&:hover': { bgcolor: 'purple.50' } }}
                                aria-label="edit payment method"
                            >
                                <EditOutlined />
                            </IconButton>
                            <IconButton
                                color="error"
                                sx={{ '&:hover': { bgcolor: 'red.50' } }}
                                aria-label="delete payment method"
                            >
                                <DeleteOutline />
                            </IconButton>
                        </Stack>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default AddPaymentMethod;