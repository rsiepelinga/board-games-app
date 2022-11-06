import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';


const Register = (props) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: "10px", textAlign: 'left'}}>
        <Typography variant="h1">
          Hi welcome.
        </Typography>
        <Typography variant="h2">
          Complete the form to create an account.
        </Typography>
      </Box>
      <Box sx={{padding: "15px 10px"}}>
        <Box sx={{padding: '5px 0'}}>
          <TextField
            fullWidth
            id="first_name"
            label="First Name"
            placeholder="First Name"
            />
        </Box>
        <Box sx={{padding: '5px 0'}}>
          <TextField
            fullWidth
            id="last_name"
            label="Last Name"
            placeholder="Last Name"
            />
        </Box>
        <Box sx={{padding: '5px 0'}}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            placeholder="Email"
            />
        </Box>
        <Box sx={{padding: '5px 0'}}>
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            />
        </Box>
        <Box sx={{padding: '5px 0'}}>
          <TextField
            fullWidth
            id="password_confirm"
            type="password"
            label="Confirm Password"
            placeholder="Password"
          />
        </Box>
      </Box>
      <Box sx={{ 
        padding: "10px", 
        textAlign: "center",
      }}>
        <Typography variant="body2">
          Already have an account?
          <Button 
            size="small"
            variant="text" 
            color="secondary"
            href="/login">
              Sign In
          </Button>
        </Typography>
        <Button 
          fullWidth
          size="large"
          variant="contained" 
          color="secondary"
          href="/">
            Sign Up
        </Button>
      </Box>
    </Container>

  );
}

export default Register;