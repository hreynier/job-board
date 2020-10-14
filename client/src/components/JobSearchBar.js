import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchContainer: {
		padding: '5px 5px 5px 20px',
		borderRadius: '30px'
	}
})


export default function JobSearchBar({handleChange}) {  

	const classes = useStyles();

	return (
	  <Paper className={classes.searchContainer}>
		  	<InputBase placeholder="Search Jobs..." inputProps={{ 'aria-label': 'search jobs'}} onChange={handleChange} />
			
			<IconButton type="submit" aria-label="search">
				<SearchIcon />
			</IconButton>
			
	  </Paper>
	);
  }
