/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './../assets/logo.jpg'
import { makeStyles } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { red } from '@mui/material/colors';
import { ShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material/Badge';


export default function Navbar() {

    return (
        <Box sx={{ flexGrow: 1, p: 5 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#42cba5' }} >
                <Toolbar >
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={logo} />
                    </IconButton>

                    <Typography variant="h6" color="textPrimary" component="p" sx={{ flexGrow: 1, mx: 5 }}>
                        Supermercado la 80
                    </Typography>
                    <div>
                        <Button color="inherit"> <strong>Iniciar Seccion</strong> </Button>
                    </div>
                    <IconButton aria-label="show Cart items" >
                        <Badge badgeContent={4} color="error">
                            <ShoppingCart fontSize='large' />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
