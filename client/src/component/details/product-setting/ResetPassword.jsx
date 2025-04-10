import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
} from '@mui/material';
import { Lock } from '@mui/icons-material';

const ResetPassword = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    // State for form errors
    const [errors, setErrors] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
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
        const newErrors = { oldPassword: '', newPassword: '', confirmPassword: '' };

        if (!formData.oldPassword.trim()) {
            newErrors.oldPassword = 'Old Password is required';
            isValid = false;
        }

        if (!formData.newPassword.trim()) {
            newErrors.newPassword = 'New Password is required';
            isValid = false;
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = 'New Password must be at least 8 characters long';
            isValid = false;
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm Password is required';
            isValid = false;
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleResetPassword = () => {
        if (validateForm()) {
            // Add logic to handle form submission (e.g., API call)
            console.log('Form Data:', {
                oldPassword: formData.oldPassword,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword,
            });
            // Reset form after submission
            setFormData({
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
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
                <Lock sx={{ color: '#7c4dff', mr: 1 }} />
                <Typography variant="h6" color="grey.800">
                    Reset Password
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="grey.600" gutterBottom>
                    Old Password
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="password"
                    value={formData.oldPassword}
                    onChange={handleInputChange('oldPassword')}
                    error={!!errors.oldPassword}
                    helperText={errors.oldPassword}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    aria-label="Old Password"
                />
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="grey.600" gutterBottom>
                    New Password
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleInputChange('newPassword')}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    aria-label="New Password"
                />
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="grey.600" gutterBottom>
                    Confirm Password
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            bgcolor: '#f5f5f5',
                        },
                    }}
                    aria-label="Confirm Password"
                />
            </Box>

            <Button
                fullWidth
                variant="contained"
                onClick={handleResetPassword}
                sx={{
                    bgcolor: '#7c4dff',
                    '&:hover': { bgcolor: '#6b42ff' },
                    textTransform: 'none',
                    borderRadius: '8px',
                    py: 1.5,
                    boxShadow: '0 2px 10px rgba(124,77,255,0.3)',
                }}
                aria-label="Reset Password"
            >
                Reset
            </Button>
        </Paper>
    );
};

export default ResetPassword;