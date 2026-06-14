import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#0070f2',
      light: '#e8f3ff',
      dark: '#0040b0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6e6e6e',
      light: '#f5f5f5',
    },
    background: {
      default: '#f0f4f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#1d2d3e',
      secondary: '#5b738b',
    },
    divider: '#e0e8f0',
    error: {
      main: '#bb0000',
      light: '#fff0f0',
    },
    success: {
      main: '#188918',
      light: '#f0fff0',
    },
    warning: {
      main: '#e76500',
      light: '#fff8f0',
    },
  },
  typography: {
    fontFamily: '"Noto Sans Hebrew", "Segoe UI", Arial, sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 6,
          padding: '8px 20px',
        },
        contained: {
          boxShadow: '0 1px 4px rgba(0,112,242,0.25)',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,112,242,0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(29,45,62,0.08)',
          border: '1px solid #e0e8f0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: '#c8d8e8',
            },
            '&:hover fieldset': {
              borderColor: '#0070f2',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});
