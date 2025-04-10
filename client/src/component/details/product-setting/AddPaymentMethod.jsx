import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    FormHelperText,
} from '@mui/material';
import { AccountBalance } from '@mui/icons-material';

const AddPaymentMethod = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        bankName: '',
        productId: '125adsfD', // Pre-filled as per your code
        totalPayment: '',
        transactionId: '',
    });

    // State for form errors
    const [errors, setErrors] = useState({
        bankName: '',
        totalPayment: '',
        transactionId: '',
    });

    // Handle input changes
    const handleInputChange = (field) => (event) => {
        const value = event.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    // Validate form
    const validateForm = () => {
        let isValid = true;
        const newErrors = { bankName: '', totalPayment: '', transactionId: '' };

        if (!formData.bankName.trim()) {
            newErrors.bankName = 'Bank Name is required';
            isValid = false;
        }

        if (!formData.totalPayment.trim()) {
            newErrors.totalPayment = 'Total Payment is required';
            isValid = false;
        } else if (isNaN(formData.totalPayment) || Number(formData.totalPayment) <= 0) {
            newErrors.totalPayment = 'Total Payment must be a positive number';
            isValid = false;
        }

        if (!formData.transactionId.trim()) {
            newErrors.transactionId = 'Transaction ID is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleAddBank = () => {
        if (validateForm()) {
            // Add logic to handle form submission (e.g., API call)
            console.log('Form Data:', {
                bankName: formData.bankName,
                productId: formData.productId,
                totalPayment: formData.totalPayment,
                transactionId: formData.transactionId,
            });
            // Reset form after submission
            setFormData({
                bankName: '',
                productId: '125adsfD',
                totalPayment: '',
                transactionId: '',
            });
        }
    };

    return (
        <Paper
            elevation={4}
            sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: 'white',
                maxWidth: 400,
                mx: 'auto',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AccountBalance sx={{ color: '#7c4dff', mr: 1 }} />
                <Typography variant="h6" color="grey.800">
                    Add Payment Method
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="grey.600" gutterBottom>
                    Bank Name
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.bankName}
                    onChange={handleInputChange('bankName')}
                    error={!!errors.bankName}
                    helperText={errors.bankName}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    aria-label="Bank Name"
                />
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="grey.600" gutterBottom>
                    Add Guide
                </Typography>
                <Typography variant="subtitle2" color="grey.600" gutterBottom>
                    Product ID
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.productId}
                    onChange={handleInputChange('productId')}
                    disabled // Product ID is pre-filled and not editable
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    aria-label="Product ID"
                />
                <Typography variant="subtitle2" color="grey.600" gutterBottom sx={{ mt: 2 }}>
                    Total Payment
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="number"
                    value={formData.totalPayment}
                    onChange={handleInputChange('totalPayment')}
                    error={!!errors.totalPayment}
                    helperText={errors.totalPayment}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    InputProps={{
                        startAdornment: <Typography sx={{ mr: 1, color: 'grey.600' }}>$</Typography>,
                    }}
                    aria-label="Total Payment"
                />
                <Typography variant="subtitle2" color="grey.600" gutterBottom sx={{ mt: 2 }}>
                    Transaction ID
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={formData.transactionId}
                    onChange={handleInputChange('transactionId')}
                    error={!!errors.transactionId}
                    helperText={errors.transactionId}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    aria-label="Transaction ID"
                />
            </Box>

            <Button
                fullWidth
                variant="contained"
                onClick={handleAddBank}
                sx={{
                    bgcolor: '#7c4dff',
                    '&:hover': { bgcolor: '#6b42ff' },
                    textTransform: 'none',
                    borderRadius: '8px',
                    py: 1.5,
                    boxShadow: '0 2px 10px rgba(124,77,255,0.3)',
                }}
                aria-label="Add Bank"
            >
                Add Bank
            </Button>
        </Paper>
    );
};

export default AddPaymentMethod;