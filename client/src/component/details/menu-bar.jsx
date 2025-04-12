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
import {FaFacebookF, FaYoutube} from "react-icons/fa";

// Placeholder logo
const Logo = () => (
    <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: 'purple.500', letterSpacing: 1 }}
    >
       Logo
    </Typography>
);

const MenuBar = () => {

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
                <div className="flex gap-4 text-[20px]">
                    <FaFacebookF />
                    <FaYoutube />
                    <FaFacebookF />
                    <FaYoutube />
                </div>
            </Box>
        </Box>
    );
};

export default MenuBar;