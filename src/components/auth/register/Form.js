import React from 'react';
import {
  Container, Box, Typography, TextField, Button
} from '@mui/material';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Box sx={{ padding: '10px', textAlign: 'left' }}>
          <Typography variant="h1">
            Hi welcome.
          </Typography>
          <Typography variant="h3">
            Complete the form to create an account.
          </Typography>
        </Box>
        <Box sx={{ padding: '15px 10px' }}>
          <Box sx={{ padding: '5px 0' }}>
            <TextField
              fullWidth
              id="first_name"
              label="First Name"
              placeholder="First Name"
            />
          </Box>
          <Box sx={{ padding: '10px 0' }}>
            <TextField
              fullWidth
              id="last_name"
              label="Last Name"
              placeholder="Last Name"
            />
          </Box>
          <Box sx={{ padding: '10px 0' }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              placeholder="Email"
            />
          </Box>
          <Box sx={{ padding: '10px 0' }}>
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
            />
          </Box>
          <Box sx={{ padding: '5px 0' }}>
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
          padding: '10px',
          textAlign: 'center'
        }}
        >
          <Typography variant="body">
            Already have an account?
            <Button
              size="small"
              variant="text"
              color="secondary"
              href="/login"
            >
              Sign In
            </Button>
          </Typography>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            href="/"
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    );
  }
}

export default Form;