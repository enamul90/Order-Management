import React, { useState } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    IconButton,
    TextField,
    Button,
    Tabs,
    Tab,
    Pagination,
    Stack,
    InputAdornment,
    Avatar,
} from '@mui/material';
import {
    Visibility,
    Edit,
    Delete,
    Search,
    CopyAll,
} from '@mui/icons-material';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductCompany from "../details/product-setting/Product-Company.jsx";
import PaymentSetting from "../details/product-setting/AddPaymentMethod.jsx";
import AddPaymentMethod from "../details/product-setting/AddPaymentMethod.jsx";
import ResetPassword from "../details/product-setting/ResetPassword.jsx";
import {Link} from "react-router-dom";

const products = [
    { id: 1, title: 'Enamul hossen Firoz', price: '10000.00 Tk', sell: '10000.00 Tk', image: '' },
    { id: 2, title: 'Enamul hossen Firoz', price: '10000.00 Tk', sell: '10000.00 Tk', image: '' },
    { id: 3, title: 'Enamul hossen Firoz', price: '10000.00 Tk', sell: '10000.00 Tk', image: '' },
    { id: 4, title: 'Enamul hossen Firoz', price: '10000.00 Tk', sell: '10000.00 Tk', image: '' },
    { id: 5, title: 'Enamul hossen Firoz', price: '10000.00 Tk', sell: '10000.00 Tk', image: '' },
];

const Home = () => {
    const [value, setValue] = useState("1");
    const [page, setPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const rowsPerPage = 10;

    const handleChange = (event, newValue) => setValue(newValue);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleSelectAllRows = (event) => {
        if (event.target.checked) {
            setSelectedRows(products.map((product) => product.id));
        } else {
            setSelectedRows([]);
        }
    };

    return (
        <Box sx={{ p: { xs: 2, md: 5 }, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
            {/* Summary Cards */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs:  'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4,' +
                        ' 1fr)' }, gap: 2, mb: 4 }}>
                {[
                    { title: 'Total Stock', value: '1,280', unit: 'Pcs', color: 'primary.main' },
                    { title: 'Total Items', value: '20', unit: 'Items', color: 'success.main' },
                    { title: 'Complete Order', value: '280', unit: 'Order', color: 'warning.main' },
                    { title: 'New Order', value: '280', unit: 'Order', color: 'info.main' },
                ].map((card, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        sx={{
                            p: 3,
                            borderLeft: `4px solid`,
                            borderColor: card.color,
                            transition: 'transform 0.2s',
                            '&:hover': { transform: 'translateY(-4px)' },
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">{card.title}</Typography>
                        <div className="flex justify-between items-center">
                            <Typography variant="h5" fontWeight="bold" sx={{ color: card.color }}>{card.value}</Typography>
                            <Typography variant="body2" color="primary" >{card.unit}</Typography>
                        </div>
                    </Paper>
                ))}
            </Box>

            {/* Main Content */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '3fr 1fr' }, gap: 3 }}>
                {/* Product Table */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                        <TextField
                            placeholder="Search products..."
                            variant="outlined"
                            size="small"
                            sx={{ width: { xs: '100%', sm: '300px' } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="error"
                                disabled={selectedRows.length === 0}
                                sx={{ textTransform: 'none' }}
                            >
                                Delete Selected
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: 'purple.500', '&:hover': { bgcolor: 'purple.600' }, textTransform: 'none' }}
                            >
                                Add New Product
                            </Button>
                        </Stack>
                    </Box>

                    {/* Responsive Table */}
                    <TableContainer sx={{ whiteSpace: 'nowrap' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedRows.length === products.length}
                                            onChange={handleSelectAllRows}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>PRODUCT TITLE</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>PRICE</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>SELL</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>IMAGE</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>ACTION</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((product) => (
                                    <TableRow
                                        key={product.id}
                                        hover
                                        sx={{ '&:hover': { bgcolor: 'grey.50' } }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selectedRows.includes(product.id)}
                                                onChange={() => handleSelectRow(product.id)}
                                            />
                                        </TableCell>
                                        <TableCell>{product.title}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell>{product.sell}</TableCell>
                                        <TableCell>
                                            {product.image ? (
                                                <Avatar src={product.image} variant="square" sx={{ width: 40, height: 40 }} />
                                            ) : (
                                                <Typography variant="body2" color="text.secondary">-</Typography>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Link to={"/product-details"}>
                                                <IconButton size="small"><Visibility sx={{ color: 'info.main' }} /></IconButton>
                                            </Link>
                                            <IconButton size="small"><Edit sx={{ color: 'warning.main' }} /></IconButton>
                                            <IconButton size="small"><Delete sx={{ color: 'error.main' }} /></IconButton>
                                            <IconButton size="small"><CopyAll sx={{ color: 'text.secondary' }} /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            Showing {Math.min(rowsPerPage, products.length)} of {products.length}
                        </Typography>
                        <Pagination
                            count={Math.ceil(products.length / rowsPerPage)}
                            page={page}
                            onChange={handlePageChange}
                            color="primary"
                            size="small"
                        />
                    </Box>
                </Paper>

                {/* Settings Section */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                    <TabContext value={value}>
                        <TabList
                            onChange={handleChange}
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                                '& .MuiTab-root': {
                                    textTransform: 'none',
                                    minWidth: 100,
                                },
                            }}
                            TabIndicatorProps={{ sx: { bgcolor: '#f59e0b', height: 3 } }}
                        >
                            <Tab label="Company" value="1" sx={{ color: value === "1" ? '#f59e0b' : 'inherit' }} />
                            <Tab label="Payment" value="2" sx={{ color: value === "2" ? '#f59e0b' : 'inherit' }} />
                            <Tab label="Password" value="3" sx={{ color: value === "3" ? '#f59e0b' : 'inherit' }} />
                        </TabList>
                        <TabPanel value="1" sx={{ p: 0, pt: 2 }}>
                            <ProductCompany />
                        </TabPanel>
                        <TabPanel value="2" sx={{ p: 0, pt: 2 }}>
                            <AddPaymentMethod />
                        </TabPanel>
                        <TabPanel value="3" sx={{ p: 0, pt: 2 }}>
                            <ResetPassword />
                        </TabPanel>
                    </TabContext>
                </Paper>
            </Box>
        </Box>
    );
};

export default Home;
