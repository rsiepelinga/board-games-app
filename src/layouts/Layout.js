/* eslint-disable react/prop-types */
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from '../components/navigation/NavBar';

const Layout = ({ theme, component: Component }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <NavBar />
    <div style={{ padding: '110px 20px 0px' }}>
      <Component />
    </div>
  </ThemeProvider>
);

export default Layout;