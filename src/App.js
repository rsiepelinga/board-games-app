import React from 'react';
import AppRoutes from './AppRoutes.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './themes/theme.js';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <AppRoutes/>
    </ThemeProvider>
  );
}