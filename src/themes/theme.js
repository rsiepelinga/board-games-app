import { createTheme } from "@mui/material/styles";
import { letterSpacing } from "@mui/system";

// Font Family
const font = "'Montserrat', sans-serif";

// Colors
const dark_blue = '#2D3142';
const grey_blue = '#4f5d75';
const orange = '#EF8354';
const white = '#ffffff';
const grey = '#BFC0C0';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: dark_blue,
    },
    secondary: {
      main: orange,
    },
    info: {
      main: grey_blue,
    },
    white: {
      main: white,
    },
    grey: {
      main: grey,
    },
    background: {
      default: dark_blue,
      paper: grey_blue,
    },
  },
  typography: {
    h1: {
      color: white,
      fontSize: '2rem',
      fontFamily: font,
      fontWeight: 'bold',
      paddingBottom: '10px'
    },
    h2: {
      color: white,
      fontSize: '1.5rem',
      fontFamily: font,
      fontWeight: 'bold'
    },
    h3: {
      color: grey,
      fontSize: '1.5rem',
      fontFamily: font,
    },
    h4: {
      color: white,
      fontSize: '16px',
      fontFamily: font,
      fontWeight: 'bold',
      textTransform: "uppercase",
      letterSpacing: '2px',
      paddingBottom: '10px',
      borderBottom: '2px solid',
      borderColor: white,
      marginBottom: '10px',
      textAlign: 'center'
    },
    p: {
      color: grey,
      fontSize: '1rem',
      fontFamily: font,
    },
    body: {
      color: grey,
      fontSize: '0.8125rem',
      fontFamily: font,
    },
    field_label: {
      color: white,
      fontSize: '12px',
      fontFamily: font,
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
    MuiChip: {
      styleOverrides: {
        root: {
          // backgroundColor: orange,
          color: white,
          marginRight: '5px'
        },
        icon: {
          color: orange
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: white,
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: white
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: white
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: grey_blue,
        },
        root: {
          backgroundColor: grey_blue,
          hover: {
            notchedOutline: {
              borderColor: grey_blue
            }
          }
        },
        input: {
          padding: '10px 15px'
        }
      }
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: grey_blue,
    //       color: grey,
    //       hover: {
    //         notchedOutline: {
    //           borderColor: grey_blue
    //         }
    //       }
    //     },
    //     notchedOutline: {
    //       borderColor: grey_blue,
    //     }
    //   }
    // },
    MuiSlider: {
      styleOverrides: {
        track: {
          backgroundColor: grey_blue
        },
        thumb: {
          backgroundColor: orange
        },
        markLabel: {
          color: white,
          // "&:nth-child(even)": {
          //   transform: 'translateX(-100%)'
          // },
          // "&:nth-child(odd)": {
          //   transform: 'translateX(100%)'
          // }
        },
        rail: {
          backgroundColor: grey_blue
        }
      }
    }
  }
});
