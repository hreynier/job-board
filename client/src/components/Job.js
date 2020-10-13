import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Job.css';

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

    return (
        <Paper onClick={onClick} className={'job'}>
            <div>
                <Typography variant="h5">{modTitle}</Typography>
                <Typography variant="h6">{job.company}</Typography>
                <Typography>{job.location}</Typography>
           </div>
           <div>
               <Typography>{job.created_at.split(' ').splice(0, 3).join(' ')}</Typography>
           </div>
        </Paper>
    )
}