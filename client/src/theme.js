import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF5A5F',
    },
    secondary: {
      main: '#00A699',
    },
  },
  typography: {
    fontFamily:  '"Open Sans"'
    }
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '3rem'
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '5rem'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem'
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '6.5rem'
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '10rem'
    }
};

export default theme;