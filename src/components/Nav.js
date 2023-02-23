import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));

function Nav() {
    return (
        <Box >
            <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
                <StyledToolbar sx={{ position: "fixed" }}>
                    <Link to="#">
                        <img style={{ width: 60, minHeight: 50 }} variant="square" src={"https://kota.co.uk/static/f01b5c88da322126c44e3e0400df9baf/25e3f/kotalogo.jpg"} />
                    </Link>


                    <Link to="#" style={{ textDecoration: "none", color: "black", fontSize: 30, marginLeft: "70rem" }}>Work
                    </Link>
                    <Link to="#" style={{ textDecoration: "none", color: "black", fontSize: 30, marginLeft: "1rem" }}>Contact
                    </Link>
                    <Link to="#" style={{ color: "black" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ml: "1rem" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Link>

                </StyledToolbar>

            </AppBar>

        </Box>
    );
}

export default Nav