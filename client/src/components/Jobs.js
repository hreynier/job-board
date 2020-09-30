import React from 'react';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import Job from './Job';


export default function Jobs({jobs}) {

    console.log('jobs is', jobs[0]);

    return (
        <div className="jobs">
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>
            {
                jobs.map(
                    job => <Job job={job} />
                )
            }

        </div>
    )
}

