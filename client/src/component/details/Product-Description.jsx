import React from 'react';
import { Box, Divider, List, ListItem, Typography, Stack } from "@mui/material";

const ProductDescription = () => {
    return (
        <Box>
            {/* Header Section */}
            <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ color: 'text.primary' }}
            >
                Product Details & Care Guide
            </Typography>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{
                    lineHeight: 1.6,
                    color: 'text.secondary',
                    mb: 2
                }}
            >
                Floaty florals and a flattering fit-and-flare silhouette make this green tiered midi an elegant pick.
                A versatile option, dress down with chunky trainers or up with strappy sandals.
            </Typography>

            {/* Features List */}
            <Box sx={{ mb: 3 }}>
                <List
                    dense
                    sx={{
                        bgcolor: 'grey.50',
                        borderRadius: 1,
                        p: 1
                    }}
                >
                    {[
                        "Floral print",
                        "Rounded neckline",
                        "Long puff sleeves",
                        "Ruched front",
                        "Tiered hem",
                        "Midi length",
                        "Button and tie",
                        "Back fastening",
                        "Lightweight woven fabric",
                        "Fit-and-flare design",
                        "Model is 5'8”/173cm and wears UK 10/EU 38/US 6",
                    ].map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                py: 0.5,
                                pl: 0,
                                color: 'text.secondary',
                                '&::before': {
                                    content: '"•"',
                                    mr: 1,
                                    color: 'primary.main'
                                }
                            }}
                        >
                            {item}
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Product Code */}
            <Typography
                variant="body2"
                sx={{
                    mb: 3,
                    color: 'text.secondary'
                }}
            >
                <strong>Product Code:</strong> 865771939
            </Typography>

            {/* Care Guide Section */}
            <Box>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                        mb: 1,
                        color: 'text.primary'
                    }}
                >
                    Care Guide
                </Typography>
                <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                        • 100% Viscose
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        • Machine washable
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProductDescription;