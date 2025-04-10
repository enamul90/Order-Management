import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box component="footer" sx={{ mt: 5 }}>
            {/* Top Section */}
            <Box sx={{ backgroundColor: '#4B4B4B', color: 'white', px: 3, py: 5 }}>
                <Grid container spacing={4}>
                    {/* About Company */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Company
                        </Typography>
                        <Typography variant="body2">
                            Open source is source code that is made freely available for possible modification and redistribution.
                            Products include permission to use the source code, design documents, or content of the product.
                        </Typography>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={4} display="flex" alignItems="center" gap={2}>
                        <WhatsAppIcon />
                        <Typography variant="body1">017229240879</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" alignItems="center" gap={2}>
                        <CallIcon />
                        <Typography variant="body1">017229240879</Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Bottom Section */}
            <Box sx={{ backgroundColor: '#f5f5f5', py: 2, px: 3 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="body2">© All Rights Reserved</Typography>
                    </Grid>
                    <Grid item>
                        <Box display="flex" gap={1}>
                            <IconButton size="small">
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;
