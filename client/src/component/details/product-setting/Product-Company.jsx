import React, { useState, useRef } from 'react';
import {
    Box,
    Button,
    Stack,
    TextField,
    Typography,
    IconButton,
    Divider,
} from '@mui/material';
import { CloudUpload, Delete, Add } from '@mui/icons-material';

const ProductCompany = () => {
    const [file, setFile] = useState(null);
    const [socialMediaLinks, setSocialMediaLinks] = useState([
        'www.facebook.com/enamul',
        'www.facebook.com/enamul',
    ]);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (!['image/png', 'image/jpeg'].includes(selectedFile.type)) {
                alert('Only PNG and JPEG files are allowed.');
                return;
            }
            if (selectedFile.size > 2 * 1024 * 1024) {
                alert('File size must be less than 2MB.');
                return;
            }
            setFile(URL.createObjectURL(selectedFile));
        }
    };


    const handleAddSocialMedia = () => {
        setSocialMediaLinks([...socialMediaLinks, '']);
    };


    const handleSocialMediaChange = (index, value) => {
        const updatedLinks = [...socialMediaLinks];
        updatedLinks[index] = value;
        setSocialMediaLinks(updatedLinks);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <Box sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <form onSubmit={handleSubmit}>
                {/* Page Logo Section */}
                <Box mb={4}>
                    <Typography variant="body1" fontWeight="medium" mb={2} sx={{ color: 'text.primary' }}>
                        Page Logo
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                        <Box
                            sx={{
                                width: 150,
                                height: 100,
                                bgcolor: 'grey.100',
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '1px solid',
                                borderColor: 'grey.300',
                            }}
                        >
                            {file ? (
                                <>
                                    <img
                                        src={file}
                                        alt="Logo"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </>
                            ) : (
                                <Typography variant="caption" color="text.secondary">
                                    No image
                                </Typography>
                            )}
                        </Box>

                        <Box
                            sx={{
                                textAlign: 'center',
                                border: '2px dashed',
                                borderColor: 'grey.300',
                                borderRadius: 2,
                                p:1,
                                width: '100%',
                                transition: 'all 0.3s ease',
                                '&:hover': { borderColor: 'purple.500', bgcolor: 'purple.50' },
                            }}
                        >
                            <input
                                type="file"
                                id="inputFile"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                accept="image/*"
                            />
                            <label htmlFor="inputFile" style={{ cursor: 'pointer' }}>
                                <Stack spacing={1} alignItems="center">
                                    <CloudUpload sx={{ fontSize: 48, color: 'purple.500' }} />
                                    <Typography variant="body2">
                                        <span className="text-purple-500 font-medium">Click to upload</span>{' '}
                                        <span className="text-gray-500">or drag and drop</span>
                                    </Typography>
                                </Stack>
                            </label>
                        </Box>
                    </Stack>
                </Box>

                {/* Form Fields */}
                <Stack spacing={3}>
                    <Box>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                            Page Name
                        </Typography>
                        <TextField
                            defaultValue="Oliva"
                            size="small"
                            fullWidth
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    bgcolor: 'white',
                                    '& fieldset': { borderColor: 'grey.300' },
                                    '&:hover fieldset': { borderColor: 'grey.500' },
                                    '&.Mui-focused fieldset': { borderColor: '#6b21a8' },
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <Typography variant="body2" color="text.secondary" mb={1}>
                            Page Description
                        </Typography>
                        <TextField
                            defaultValue="Description"
                            size="small"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={3}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    bgcolor: 'white',
                                    '& fieldset': { borderColor: 'grey.300' },
                                    '&:hover fieldset': { borderColor: 'grey.500' },
                                    '&.Mui-focused fieldset': { borderColor: '#6b21a8' },
                                },
                            }}
                        />
                    </Box>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" color="text.secondary" mb={1}>
                                Mobile Number
                            </Typography>
                            <TextField
                                defaultValue="01723240896"
                                size="small"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        bgcolor: 'white',
                                        '& fieldset': { borderColor: 'grey.300' },
                                        '&:hover fieldset': { borderColor: 'grey.500' },
                                        '&.Mui-focused fieldset': { borderColor: '#6b21a8' },
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" color="text.secondary" mb={1}>
                                WhatsApp Number
                            </Typography>
                            <TextField
                                defaultValue="01723240896"
                                size="small"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        bgcolor: 'white',
                                        '& fieldset': { borderColor: 'grey.300' },
                                        '&:hover fieldset': { borderColor: 'grey.500' },
                                        '&.Mui-focused fieldset': { borderColor: '#6b21a8' },
                                    },
                                }}
                            />
                        </Box>
                    </Stack>

                    <Box>
                        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={2} mb={2}>
                            <Typography variant="body2" color="text.secondary" mb={1}>
                                Social Media
                            </Typography>
                            <Button
                                startIcon={<Add />}
                                sx={{
                                    color: '#6b21a8',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    alignSelf: 'flex-start',
                                }}
                            >
                                Add More
                            </Button>
                        </Stack>
                        <Stack>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <TextField
                                    value={"www.facebook.com"}
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px',
                                            bgcolor: 'white',
                                            '& fieldset': { borderColor: 'grey.300' },
                                            '&:hover fieldset': { borderColor: 'grey.500' },
                                            '&.Mui-focused fieldset': { borderColor: '#6b21a8' },
                                        },
                                    }}
                                />
                                <Stack direction="row" spacing={1}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#ff6f61',
                                            '&:hover': { bgcolor: '#e65b50' },
                                            textTransform: 'none',
                                            borderRadius: '10px',
                                            minWidth: 80,
                                            py: 1,
                                        }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#6b21a8',
                                            '&:hover': { bgcolor: '#581c87' },
                                            textTransform: 'none',
                                            borderRadius: '10px',
                                            minWidth: 80,
                                            py: 1,
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: 'grey.300' }} />

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                bgcolor: '#6b21a8',
                                '&:hover': { bgcolor: '#581c87' },
                                textTransform: 'none',
                                borderRadius: '10px',
                                py: 1.5,
                            }}
                            fullWidth
                        >
                            Save Changes
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default ProductCompany;