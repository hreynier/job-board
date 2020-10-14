import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    searchContainer: {
		padding: '0px 0px 0px 10px',
		borderRadius: '30px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.up('xs')]:{
			width: 200
		},
		[theme.breakpoints.up('sm')]:{
			width: 250
		},
		[theme.breakpoints.up('md')]:{
			width: 300
		},
		[theme.breakpoints.up('lg')]:{
			width: 350
		},
		[theme.breakpoints.up('xl')]:{
			width: 400
		},
		
	},
	textResize: {
		[theme.breakpoints.up('xs')]:{
			fontSize: '0.9rem'
		},
		[theme.breakpoints.up('sm')]:{
			fontSize: '1rem'
		},
		[theme.breakpoints.up('md')]:{
			fontSize: '1.15rem'
		},
		[theme.breakpoints.up('lg')]:{
			fontSize: '1.5rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '2.2rem',
		}
	},
	searchIcon: {
		[theme.breakpoints.up('xs')]:{
			fontSize: '1.25rem'
		},
		[theme.breakpoints.up('sm')]:{
			fontSize: '1.4rem'
		},
		[theme.breakpoints.up('md')]:{
			fontSize: '1.8rem'
		},
		[theme.breakpoints.up('lg')]:{
			fontSize: '2rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '2.5rem',
		}
	}
}));


export default function JobSearchBar({handleChange}) {  

	const classes = useStyles();

	return (
	  	<Paper className={classes.searchContainer} elevation={3}>
		  	<InputBase classes={{input: classes.textResize}} placeholder="Search Jobs..." inputProps={{ 'aria-label': 'search jobs'}} onChange={handleChange} />
			
			<IconButton color="primary" type="submit" aria-label="search">
				<SearchIcon className={classes.searchIcon} />
			</IconButton>
	  	</Paper>
	);
  }
