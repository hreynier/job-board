import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Job({job}) {
    return (
        <Paper className={'job'}>
            <div>
                <Typography variant="h5">{job.title}</Typography>
                <Typography variant="h6">{job.company}</Typography>
                <Typography>{job.location}</Typography>
           </div>
           <div>
               <Typography>{job.created_at.split(' ').splice(0, 3).join(' ')}</Typography>
           </div>
        </Paper>
    )
}