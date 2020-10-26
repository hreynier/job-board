import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import './JobModal.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
		[theme.breakpoints.up('lg')]:{
			fontSize: '1.5rem'
		},
		[theme.breakpoints.up('xl')]:{
			fontSize: '2.2rem',
		}
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  

export default function JobModal({job, open, handleClose}) {

    //styles
    const classes = useStyles();

    let jobBoard = `From ${job.source}`;

    return (
        // make job company smaller in the dialog title.
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle disableTypography id="alert-dialog-slide-title">
                    <Typography variant="h4"> {job.title} </Typography>
                    <Typography variant="h4"> {job.company} </Typography>
                    {job.company_logo != "" && 
                        <img className="detail-logo" src={job.company_logo} alt={`${job.company} Logo.`} />
                    }
                    <br />
                    <Chip size="small" label={jobBoard} color="primary" />
                </DialogTitle>
                <DialogContent>
                    
                    <DialogContentText variant="body1"
                        id="alert-dialog-slide-description" dangerouslySetInnerHTML={ {__html: job.description}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <a href={job.url} target="_blank">
                        <Button color="primary">
                            Apply
                        </Button>
                    </a>
                </DialogActions>
            </Dialog>
        </div>
  
    )
}