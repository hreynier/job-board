import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

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
        },
    breakpoints: {
        values: {
            xs: 0,
            mobL: 300,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    }
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '3rem'
    },
    [theme.breakpoints.up('mobL')]: {
        fontSize: '4rem'
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