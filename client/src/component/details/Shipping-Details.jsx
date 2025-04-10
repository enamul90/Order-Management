import React from 'react';
import {Box, Button, Stack, Typography} from "@mui/material";
import {AiOutlineEdit} from "react-icons/ai";

const ShippingDetails = () => {
    return (
        <div>
            <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1, p: 3, position: 'relative' }}>
                <Button
                    startIcon={<AiOutlineEdit />}
                    sx={{ position: 'absolute', top: 8, right: 8, bgcolor: 'grey.200', '&:hover': { bgcolor: 'grey.300' } }}
                >
                    Edit
                </Button>
                <Typography variant="h6" sx={{ mb: 2 }}>Shipping Address</Typography>
                <Stack spacing={1}>
                    {[
                        ['Name', 'Rabiul Islam'],
                        ['Phone', '01700-00000'],
                        ['Email', 'rabi@gmail.com'],
                        ['Address 1', 'Road 123'],
                        ['Address 2', 'Road 123'],
                        ['Post Code', '7800'],
                        ['Country', 'Bangladesh'],
                    ].map(([label, value]) => (
                        <Box key={label} sx={{ display: 'flex', gap: 2 }}>
                            <Typography variant="body2" sx={{ minWidth: 100, fontWeight: 500 }}>{label}:</Typography>
                            <Typography variant="body2">{value}</Typography>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </div>
    );
};

export default ShippingDetails;