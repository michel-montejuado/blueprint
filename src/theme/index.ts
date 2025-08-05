import { createTheme } from '@mui/material/styles';

export default createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  palette: {
    primary: {
      main: '#0095cf',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00161f',
      contrastText: '#ffffff',
    },
  }
});
