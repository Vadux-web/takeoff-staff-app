import * as React from 'react';
import {Header} from "../Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../Footer";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";


export const Layout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header/>
            <Container maxWidth="lg" component="main" sx={{ mt: 8, mb: 2 }}>
                <Outlet/>
            </Container>

            <Footer/>
        </Box>
    );
}
