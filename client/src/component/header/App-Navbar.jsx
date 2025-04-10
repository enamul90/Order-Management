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
import {Link} from 'react-router-dom'

const AppNavbar = () => {
    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo */}
                <Typography variant="h6" color="textPrimary" fontWeight={700}>
                    Logo
                </Typography>

                {/* Icons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton>
                        <FavoriteBorderIcon sx={{ color: '#f87171' }} /> {/* red-400 */}
                    </IconButton>
                    <Link to={"/order"}>
                        <IconButton>
                            <ShoppingCartOutlinedIcon sx={{ color: '#a78bfa' }} /> {/* violet-400 */}
                        </IconButton>
                    </Link>

                    {/* Logout Button */}
                    <Button
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
