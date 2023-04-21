
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './../assets/logo.jpg'
//import users from './../users-data';
import { Link as RouteLink, useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
const theme = createTheme();


export default function SignIn() {

  let [{ user, login }, dispatch] = useStateValue();
  const navigate  = useNavigate();


  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    const userIndex = user.findIndex(u => u.email === email);
    if (userIndex === -1) {
      alert('Email incorrecto');
      return;
    }

    const currentUser = user[userIndex];
    if (currentUser.password !== password) {
      alert('Contraseña incorrecta');
      return;
    }

    // Actualizar el estado de isinit a 1 para el usuario actual
    const updatedUser = { ...currentUser, isinit: 1 };
    const updatedUsers = [...user];
    updatedUsers[userIndex] = updatedUser;
    user = updatedUsers;


    dispatch({
      type: actionTypes.LOGIN,
      item: currentUser.email,
    });
    console.log(login);

    navigate('/');
    alert('Inicio de sesión exitoso')

  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={logo} sx={{ width: 100, height: 100, m: 1 }} />
          <Typography component="h1" variant="h5">
            Inicia Sesion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Grid container sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Grid item>
                <RouteLink to="/ecommerce-react/SignUp" variant="body2">
                  {"¿No tienes una cuenta? Inscribirse"}
                </RouteLink>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}