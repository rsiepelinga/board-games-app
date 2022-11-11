import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const About = (props) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: "10px", textAlign: 'left'}}>
        <Typography variant="h1">
          About.
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;