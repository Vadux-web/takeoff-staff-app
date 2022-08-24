import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{py: 1, mt: 'auto', bgcolor: 'primary.main'}}
        >
            <Typography variant="body1" color="white">
                2022
            </Typography>
        </Box>
    );
}
