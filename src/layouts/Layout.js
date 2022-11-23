import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar, BottomNav } from '../components';

const Layout = ({ theme, component: Component }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <NavBar />
    <div style={{ padding: '90px 20px 0px' }}>
      <Component />
    </div>
    <BottomNav />
  </ThemeProvider>
);

export default Layout;