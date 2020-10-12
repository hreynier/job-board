import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



export default function JobSearchBar({job, handleChange}) {  

    /*  <InputBase
                placeholder="Search Jobs"
                inputProps={{ 'aria-label': 'search jobs' }}
            />
            <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>

    */
   let jobsList = job;
   

    return (
      <Paper 
        className="search-bar-container">
            <div>
                <input type="text" className="input" placeholder="Search Jobs..." onChange={handleChange} />
                
            </div>
            
      </Paper>
    );
  }
