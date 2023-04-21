import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer(props) {
  return (
    <Box component="sticky" sx={{
      bgcolor: '#42cba5',
      py: 0,
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Ecommer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Implement accounting - gh-pages - react - react-dom - react-router-dom - react-scripts - web-vitals - reducer
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
