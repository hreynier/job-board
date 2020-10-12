import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



export default function JobSearchBar() {  
    return (
      <Paper component="form">
            <InputBase
                placeholder="Search Jobs"
                inputProps={{ 'aria-label': 'search jobs' }}
            />
            <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
