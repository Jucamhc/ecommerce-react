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
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


export default function Navbar() {

    const [{ basket, login }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const backLogin = () => {
        dispatch({
            type: actionTypes.OUTLOGIN,
            login: null,
            //basket: []
        });
        navigate('/');
    }

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#42cba5', borderRadius: '2%' }} >
                <Toolbar >
                    <RouteLink to="/">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={logo} />
                        </IconButton>
                    </RouteLink>

                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1, mx: 5 }}>
                        <h4>Supermercado la 80 </h4>
                    </Typography>


                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1.5 }}>
                        {login ? <h4>Bienvenido <corre><strong>{login}</strong></corre></h4> : <h4>Bienvenido Cliente</h4>}
                    </Typography>

                    {login === "test@test.com" ?
                        <Typography align="center" sx={{ bgcolor: '#FCBD00 ', borderRadius: '15%', mx: 2 }}>
                            <RouteLink to='/SignIn'>
                                <Button onClick={backLogin}> <strong> <h4>Productos</h4> </strong> </Button>
                            </RouteLink>
                        </Typography>
                        : ""}

                    <Typography align="center" sx={{ bgcolor: '#FCBD00 ', borderRadius: '15%', mx: 2 }}>
                        <RouteLink to='/SignIn' >
                            <Button onClick={backLogin}> <strong> <h4>{login ? "Cerrar Seccion" : "Iniciar Seccion"}</h4> </strong> </Button>
                        </RouteLink>
                    </Typography>

                    <RouteLink to="/checkout-page">
                        <IconButton aria-label="show Cart items" >
                            <Badge badgeContent={basket?.length} color="error">
                                <ShoppingCart fontSize='large' />
                            </Badge>
                        </IconButton>
                    </RouteLink>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
