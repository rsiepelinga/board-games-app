import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#2D3142',
    },
    secondary: {
      main: '#EF8354',
    },
    accent: {
      main: '#4f5d75',
    },
    white: {
      main: '#ffffff',
    },
    grey: {
      main: '#BFC0C0',
    },
    background: {
      default: '#2D3142',
      paper: '#4f5d75',
    },
  },
  typography: {
    h1: {
      color: '#fff',
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '1.5rem',
      color: '#BFC0C0'
    },
    body2: {
      fontSize: '0.8125rem',
      color: '#BFC0C0'
    },
    label: {
      fontSize: '0.8125rem',
      color: '#BFC0C0'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#fff',
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#BFC0C0',
        },
        root: {
          hover: {
            notchedOutline: {
              borderColor: '#fff'
            }
          }
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        track: {
          backgroundColor: '#4f5d75'
        },
        thumb: {
          backgroundColor: '#EF8354'
        },
        markLabel: {
          color: '#fff',
          // "&:nth-child(even)": {
          //   transform: 'translateX(-100%)'
          // },
          // "&:nth-child(odd)": {
          //   transform: 'translateX(100%)'
          // }
        },
        rail: {
          backgroundColor: '#4f5d75'
        }
      }
    }
  }
});
