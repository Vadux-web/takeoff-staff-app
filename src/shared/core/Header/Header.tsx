import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import {ButtonSx} from "./styles";

export const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{bgcolor: 'primary.main', justifyContent: 'space-between'}}>
                    <Button component={NavLink} to="/contacts" color="inherit" sx={ButtonSx}>Список
                        контактов</Button>
                    <Button component={NavLink} to="/login" color="inherit" sx={ButtonSx}>Войти</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

