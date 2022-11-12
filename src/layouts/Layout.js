import React from 'react';
import NavBar from '../components/navigation/NavBar.js';
import { CssBaseline, ThemeProvider } from '@mui/material';

const Layout = ({theme, component: Component}) => {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <NavBar/>
      <div style={{padding: "80px 20px 0px"}}>
        <Component/>
      </div>
    </ThemeProvider>
  )
}

export default Layout;