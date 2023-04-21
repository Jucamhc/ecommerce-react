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
import users from './../users-data';
import logo from './../assets/logo.jpg'
import { useState } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
const theme = createTheme();


export default function SignUp() {
  
  let [{ user }, dispatch] = useStateValue();
  const navigate  = useNavigate();
  
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');
  
    // Check if user already exists
    const existingUserIndex = user.findIndex(user => user.email === email);
    const existingPassword = user.findIndex(user => user.password === password);
  
    if (existingUserIndex >= 0) {
      alert("El Usuario ya existe {Error 409}");
      return 409;
    }
  
    if (existingPassword >= 0) {
      alert("Ingrese el password");
      return 409;
    }
  
    // Add new user to array
    const newUser = {
      id: user.length + 1,
      name: firstName,
      lastname: lastName,
      email: email,
      password: password,
      state: 1,
      isAdmin: 0,
      isinit: 0,
    };
  
    const updatedUsers = [newUser];

    dispatch({
      type: actionTypes.SET_USER,
      item: updatedUsers,
    });

    navigate('/SignIn');
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
          <Avatar src={logo} sx={{ width: 100, height: 100, m: 0 }} />

          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inscribirse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouteLink to="/ecommerce-react/SignIn" variant="body2">
                  ¿Ya tienes una cuenta? Iniciar sesión
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}