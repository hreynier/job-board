import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import './HeroSection.css';
import JobSearchBar from './JobSearchBar';

const useStyles = makeStyles((theme) => ({
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
        marginTop: '-20px',
        textTransform: 'lowercase',
        fontVariant: 'small-caps',
        [theme.breakpoints.up('xl')]: {
            fontSize: '5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
        //fontStyle: 'italic',
        //backgroundColor: '#FFFFFF',
        //borderRadius: '5px',
        //padding: '2px 5px',
    },
    underline: {
        textDecoration: 'underline #FF5A5F'
    },
    searchContainer: {
        marginTop: 'auto',
        color: 'white',
        marginBottom: '5%'
    },
    jobNum: {
        marginLeft: '10%',
        [theme.breakpoints.up('xs')]:{
			fontSize: '0.95rem'
		},
		[theme.breakpoints.up('sm')]:{
			fontSize: '1.05rem'
		},
		[theme.breakpoints.up('md')]:{
			fontSize: '1.15rem'
		},
		[theme.breakpoints.up('lg')]:{
			fontSize: '1.25rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '2rem',
		}
    }
}));

export default function HeroSection({jobs, searchOnChange}) {
    
    const numJobs = jobs.length;

    const classes = useStyles();

    return (
        <div className="hero-container">   
            <img className="hero-image" src="/assets/images/hero-working-table.jpg" />
            <div className="hidden"></div>
            <div className="title-container">
                <Typography variant="h1" component="h1" className={classes.title}>
                    techstart
                </Typography>
                <Typography variant="h3" component="h2" className={classes.tagline}>
                    Find <span variant="body1" className={classes.underline}>Entry-Level</span> Tech Jobs
                </Typography>
            </div>

            <div className={classes.searchContainer}>
                <JobSearchBar handleChange = {searchOnChange} />
                <Typography className={classes.jobNum} variant="h6" component="h2">
                    Found {numJobs} Jobs
                </Typography>
            </div>
        </div>
    )
}