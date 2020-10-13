import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import './HeroSection.css';

const useStyles = makeStyles({
    title: {
        fontFamily: '"Proza Libre"',
        color: '#FF5A5F',
        fontWeight: '800',
        textTransform: 'lowercase',
        fontStyle: 'italic',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        padding: '0px 5px',
        marginTop: '5%',
        marginBottom: '20px',
        letterSpacing: '-2px',
    },
    tagline: {
        fontFamily: '"Open Sans"',
        color: '#FFFFFF',
        fontWeight: '600',
        textTransform: 'lowercase',
        fontVariant: 'small-caps'
        //fontStyle: 'italic',
        //backgroundColor: '#FFFFFF',
        //borderRadius: '5px',
        //padding: '2px 5px',
    },
    underline: {
        textDecoration: 'underline #FF5A5F'
    }
})

export default function HeroSection() {

    const classes = useStyles();

    return (
        <div className="hero-container">   
            <img src="/assets/images/hero-working-table.jpg" />
            <Typography variant="h1" component="h1" className={classes.title}>
                techstart
            </Typography>
            <Typography variant="h3" component="h2" className={classes.tagline}>
                Find <span variant="body1" className={classes.underline}>Entry-Level</span> Tech Jobs
            </Typography>
        </div>
    )
}