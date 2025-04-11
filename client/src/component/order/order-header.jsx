import React from 'react';
import {Box, Typography, useTheme, Paper, Divider} from "@mui/material";
import { NavLink } from "react-router-dom";

const OrderHeader = () => {
    const theme = useTheme();

    const linkStyle = ({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? "#F1A350" : theme.palette.text.primary,
        fontWeight: isActive ? 'bold' : 500,
        transition: 'color 0.3s ease',
    });

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    ORDER HISTORY
                </Typography>
                <Box sx={{ display: 'flex', gap: 4 }}>
                    <NavLink to="/order/delivery-order" style={linkStyle}>
                        <Typography variant="body1" >
                            Delivery Order
                        </Typography>
                    </NavLink>
                    <NavLink to="/order/new-order" style={linkStyle}>
                        <Typography variant="body1" >
                            New Order
                        </Typography>
                    </NavLink>
                </Box>
            </Box>
            <Divider sx={{paddingTop: 1}} />
        </div>
    );
};

export default OrderHeader;
