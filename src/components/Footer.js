import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer(props) {
  return (
    <Box component="sticky" sx={{
      bgcolor: '#42cba5',
      py: 2,
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}
    >
      <Container maxWidth="lg">
        <Typography  align="center" gutterBottom>
          <h4>Ecommer</h4>
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          <h4> Implement accounting - gh-pages - react - react-dom - react-router-dom - react-scripts - web-vitals - reducer</h4>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
