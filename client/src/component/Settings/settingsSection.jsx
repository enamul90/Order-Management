import React from 'react';

const SettingsSection = () => {
    return (
        <div>
            <Box className={"w-full lg:w-[30%]"}>
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
        </div>
    );
};

export default SettingsSection;