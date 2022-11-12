import React from 'react';
import NavBar from '../components/navigation/NavBar.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { guestTheme } from '../themes/guestTheme.js';
import { appTheme } from '../themes/theme.js';

const Layout = ({component: Component}) => {
  
  return (
    <ThemeProvider theme={guestTheme}>
      <CssBaseline enableColorScheme />
      <NavBar/>
      <div style={{padding: "80px 20px 0px"}}>
        <Component/>
      </div>
    </ThemeProvider>
  )
}

export default Layout;