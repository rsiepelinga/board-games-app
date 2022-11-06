import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';


const Login = (props) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: "10px", textAlign: 'left'}}>
        <Typography variant="h1">
          Hi welcome.
        </Typography>
        <Typography variant="h2">
          Sign in to access cool board game stuff.
        </Typography>
      </Box>
      <Box sx={{ height: '360px', padding: '15px 10px'}}>
        <Box sx={{ padding: "5px 0"}}>
          <TextField
            fullWidth
            id="username"
            label="Username"
            placeholder="Username"
            />
        </Box>
        <Box sx={{ padding: "5px 0"}}>
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
        </Box>
      </Box>
      <Box sx={{ 
        padding: "10px", 
        textAlign: "center",
      }}>
        <Typography variant="body2">
          Don't have an account?
          <Button 
            size="small"
            variant="text" 
            color="secondary"
            href="/register">
              Sign Up
          </Button>
        </Typography>
        <Button 
          fullWidth
          size="large"
          variant="contained" 
          color="secondary"
          href="/">
            Sign In
        </Button>
      </Box>
    </Container>

  );
}

export default Login;