import React from 'react';
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useNavigate} from 'react-router-dom'
import {IoNotificationsSharp} from "react-icons/io5";

const AppNavbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/login")
    }
    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo */}

                <Link to={"/"}>
                    <Typography variant="h6" color="textPrimary" fontWeight={700}>
                        Logo
                    </Typography>
                </Link>

                {/* Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton>
                        <IoNotificationsSharp sx={{ color: '#f87171' }} /> {/* red-400 */}
                    </IconButton>
                    <Link to={"/order/delivery-order"}>
                        <IconButton>
                            <ShoppingCartOutlinedIcon sx={{ color: '#a78bfa' }} /> {/* violet-400 */}
                        </IconButton>
                    </Link>

                    {/* Logout Button */}
                    <Button
                        onClick={logout}
                        variant="contained"
                        startIcon={<LogoutIcon />}
                        sx={{
                            backgroundColor: '#c084fc', // violet-400
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: '8px',
                            px: 2,
                            '&:hover': { backgroundColor: '#a855f7' }, // hover violet-500
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppNavbar;
