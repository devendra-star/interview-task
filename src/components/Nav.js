import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CiCircleRemove } from 'react-icons/ci'

import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>

            <Box >
                <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
                    <div>
                        <StyledToolbar sx={{
                            position: "fixed",
                        }}>
                            <Link to="#">
                                <img style={{ width: 60, minHeight: 50 }} variant="square" src={"https://kota.co.uk/static/f01b5c88da322126c44e3e0400df9baf/25e3f/kotalogo.jpg"} />
                            </Link>


                            <Link to="#" style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: 30, marginLeft: "70rem" }}>Work
                            </Link>
                            <Link to="#" style={{ textDecoration: "none", color: "black", fontWeight: "bolder", fontSize: 30, marginLeft: "1rem" }}>Contact
                            </Link>
                            <Link to="#" style={{ color: "black" }}>

                                <Button onClick={handleOpen}>
                                    <IconButton >
                                        <MenuIcon />
                                    </IconButton>
                                </Button>
                            </Link>

                        </StyledToolbar>
                    </div>

                </AppBar>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ backgroundColor: "rgb(247, 78, 161);", height: "100%" }}>
                    <StyledToolbar sx={{ position: "fixed" }}>
                        <Link to="#">
                            <img style={{ width: 60, minHeight: 50 }} variant="square" src={"https://kota.co.uk/static/f01b5c88da322126c44e3e0400df9baf/25e3f/kotalogo.jpg"} />
                        </Link>

                        <Link to="#" style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: 30, marginLeft: "83rem" }}>

                            <CiCircleRemove onClick={() => setOpen(false)} size={50} />

                        </Link>

                    </StyledToolbar>
                    <ul>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                    </ul>

                </Box>
            </Modal>
        </>
    );
}

export default Nav