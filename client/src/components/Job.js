import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Job.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.up('xs')]:{
			fontSize: '1rem'
		},
		[theme.breakpoints.up('sm')]:{
			fontSize: '1.1rem'
		},
		[theme.breakpoints.up('md')]:{
			fontSize: '1.2rem'
		},
		[theme.breakpoints.up('lg')]:{
			fontSize: '1.5rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '2.2rem',
		}
    },
    company: {
        [theme.breakpoints.up('xs')]:{
			fontSize: '0.95rem'
		},
		[theme.breakpoints.up('sm')]:{
			fontSize: '1rem'
		},
		[theme.breakpoints.up('md')]:{
			fontSize: '1.1rem'
		},
		[theme.breakpoints.up('lg')]:{
			fontSize: '1.3rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '2rem',
		}
    },
    location: {
        [theme.breakpoints.up('xs')]:{
			fontSize: '0.8rem'
		},
		[theme.breakpoints.up('sm')]:{
			fontSize: '0.9rem'
		},
		[theme.breakpoints.up('md')]:{
			fontSize: '1rem'
		},
		[theme.breakpoints.up('lg')]:{
			fontSize: '1.2rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '1.5rem',
		}
    }

}));


export default function Job({job, onClick}) {

    // logic for title slicing.
    let title = job.title;
    let modTitle;

    if(title.length >= 50){
        modTitle = title.slice(0,45).concat('...');
    }
    else{
        modTitle = title;
    }

    // Styles
    const classes = useStyles();

    return (
        <Paper onClick={onClick} className={'job'}>
            <div>
                <Typography className={classes.title} variant="h5">{modTitle}</Typography>
                <Typography className={classes.company} variant="h6">{job.company}</Typography>
                <Typography className={classes.location} >{job.location}</Typography>
           </div>
           <div>
               <Typography className={classes.location}>{job.created_at.split(' ').splice(0, 3).join(' ')}</Typography>
           </div>
        </Paper>
    )
}