
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './../assets/logo.jpg'
import users from './../users-data';


const theme = createTheme();

export default function SignIn() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
  
    const userIndex = users.findIndex(u => u.email === email);
    if (userIndex === -1) {
      alert('Email incorrecto');
      return;
    }
  
    const user = users[userIndex];
    if (user.password !== password) {
      alert('Contraseña incorrecta');
      return;
    }
  
    // Actualizar el estado de isinit a 1 para el usuario actual
    const updatedUser = {...user, isinit: 1};
    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;


    // Hacer lo que se necesite para continuar con el proceso de inicio de sesión
    console.log(users);
    //window.location="/";
    alert('Inicio de sesión exitoso');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
                <Link href="/SignUp" variant="body2">
                  {"¿No tienes una cuenta? Inscribirse"}
                </Link>
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