import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{py: 1, mt: 'auto', borderTop: '1px solid lightgray'}}
        >
                <Typography variant="body1">
                    2022
                </Typography>
        </Box>
    );
}
