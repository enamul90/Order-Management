import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Divider,
    Avatar,
    Tooltip,
} from '@mui/material';
import { AiOutlineUser, AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';

// Placeholder logo
const Logo = () => (
    <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: 'purple.500', letterSpacing: 1 }}
    >
        MyBrand
    </Typography>
);

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Add logout logic here (e.g., clear auth token, redirect to login)
        console.log('User logged out');
        handleMenuClose();
    };

    const handleProfile = () => {
        // Add profile navigation logic here
        console.log('Navigating to profile');
        handleMenuClose();
    };

    const handleSettings = () => {
        // Add settings navigation logic here
        console.log('Navigating to settings');
        handleMenuClose();
    };

    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderBottom: '1px solid',
                borderColor: 'grey.200',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                px: { xs: 2, md: 4 },
                py: 2,
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Logo />
                </Box>

                {/* User Menu */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Tooltip title="User Menu">
                        <IconButton
                            onClick={handleMenuOpen}
                            sx={{
                                bgcolor: open ? 'grey.100' : 'transparent',
                                '&:hover': { bgcolor: 'grey.100' },
                            }}
                        >
                            <Avatar sx={{ bgcolor: 'purple.500', width: 36, height: 36 }}>
                                <AiOutlineUser size={20} />
                            </Avatar>
                        </IconButton>
                    </Tooltip>

                    {/* User Menu Dropdown */}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{
                            elevation: 3,
                            sx: {
                                mt: 1,
                                borderRadius: 2,
                                minWidth: 200,
                                '& .MuiMenuItem-root': {
                                    py: 1.5,
                                    fontSize: '0.9rem',
                                    '&:hover': { bgcolor: 'purple.50' },
                                },
                            },
                        }}
                    >
                        <MenuItem onClick={handleProfile}>
                            <AiOutlineUser style={{ marginRight: 8 }} />
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleSettings}>
                            <AiOutlineSetting style={{ marginRight: 8 }} />
                            Settings
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleLogout}>
                            <AiOutlineLogout style={{ marginRight: 8, color: 'error.main' }} />
                            <Typography color="error.main">Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default MenuBar;