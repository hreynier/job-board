import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';



export default function JobSearchBar({handleChange}) {  


	return (
	  <Paper className="search-bar-container">
		  	<InputBase placeholder="Search Jobs..." inputProps={{ 'aria-label': 'search jobs'}} onChange={handleChange} />
			
			<IconButton type="submit" aria-label="search">
				<SearchIcon />
			</IconButton>
			
	  </Paper>
	);
  }
