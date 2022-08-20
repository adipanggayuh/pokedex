import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LeftTypography from '../typography/LeftTypography';
import logo from '../../media/logopoke.webp';

const Header = () => {
    return (
        <AppBar position="static" sx={{ marginBottom: 2, backgroundColor:"#fecf28" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LeftTypography>
                        <img src={logo} alt='' width={145} height={60} />
                    </LeftTypography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
