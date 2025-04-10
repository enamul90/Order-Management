import React from 'react';
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LoginImg from "../../../public/images/login.png"


const Login = () => {
    return (
        <>
            <div className="w-full md:w-[70%] xl:w-[60%] mx-auto">
                <div className="h-screen lg:flex md:flex-col items-center justify-center">
                    <div className="grid lg:grid-cols-2 gap-6">
                        <Grid item xs={12} md={6} sx={{ p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {/* Logo */}
                            <Box mb={4}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2b2b6f' }}>
                                    <span style={{ color: '#f59e0b' }}>| | |</span> Network
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    Login into your account
                                </Typography>
                            </Box>

                            {/* Email Field */}
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                placeholder={"Email Address"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <EmailIcon sx={{ color: '#f59e0b' }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 3, backgroundColor: '#f7f7f7', borderRadius: 1 }}
                            />

                            {/* Password Field */}
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                placeholder="Enter your password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <LockIcon sx={{ color: '#f59e0b' }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 1.5, backgroundColor: '#f7f7f7', borderRadius: 1 }}
                            />

                            <Box display="flex" justifyContent="flex-end" mb={3}>
                                <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                                    Forgot Password?
                                </Typography>
                            </Box>

                            {/* Login Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    backgroundColor: '#f59e0b',
                                    color: 'white',
                                    py: 1.5,
                                    borderRadius: 1,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                                    '&:hover': { backgroundColor: '#d97706' },
                                }}
                            >
                                Login Now
                            </Button>
                        </Grid>

                        {/* Right - Image Section */}
                        <Grid
                            item
                            xs={false}
                            md={6}
                            sx={{
                                backgroundColor: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 3,
                            }}
                        >
                            <img
                                src={LoginImg}
                                alt="Login Illustration"
                                className={"w-full h-auto"}
                            />
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
