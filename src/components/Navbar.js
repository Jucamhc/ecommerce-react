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
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


export default function Navbar() {

    const [{ basket, login }, dispatch] = useStateValue();
    const navigate  = useNavigate();
    const backLogin = ()=> {
        dispatch({
            type: actionTypes.OUTLOGIN,
            login: null,
            basket: []
          });
          navigate('/');
    }

    return (
        <Box sx={{ flexGrow: 1, p: 5 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#42cba5' }} >
                <Toolbar >
                    <Link to="/">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={logo} />
                        </IconButton>
                    </Link>

                    <Typography variant="h6" color="textPrimary"  sx={{ flexGrow: 1, mx: 5 }}>
                      <h4>Supermercado la 80 </h4>  
                    </Typography>

                    <Typography variant="h6"  color="textPrimary" sx={{ flexGrow: 1, mx: 5 }}>
                      <h4>Bienvenido {login ? login : "Cliente"} </h4>  
                    </Typography>

                    
                    <Link to='/SignIn'>
                            <Button color="inherit" onClick={backLogin}> <strong> <h4>{login ? "Cerrar Seccion" : "Iniciar Seccion"}</h4> </strong> </Button>
                    </Link>

                    <Link to="/checkout-page">
                        <IconButton aria-label="show Cart items" >
                            <Badge badgeContent={basket?.length} color="error">
                                <ShoppingCart fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
