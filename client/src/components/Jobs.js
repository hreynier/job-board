import React from 'react';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


import Job from './Job';
import JobModal from './JobModal';


export default function Jobs({jobs}) {

    // Modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, setSelectedJob] = React.useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Pagination
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 50);
    const [activeStep, setActiveStep] = React.useState(0);
    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

    // step = 0, show 0-49;
    // step = 1, show 50-99; etc.

    function scrollToTop () {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        scrollToTop();
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        scrollToTop();
    };

    return (
        <div className="jobs">
            <JobModal open={open} job={selectedJob} handleClose = {handleClose} />

            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>

            <Typography variant="h6" component="h2">
                Found {numJobs} Jobs
            </Typography>

            {/*<Typography variant="h6" component="h3">
                Current Sources: <Button variant="outlined" color="primary" href="https://jobs.github.com/">GitHub Jobs</Button> <Button variant="outlined" color="primary" href="https://remoteok.io/">Remote OK</Button>
                </Typography>
            */}


            {jobsOnPage.map(
                (job, i) => (<Job key = {i} job={job} onClick={() => {
                    handleClickOpen();
                    setSelectedJob(job)
                }} />)
            )}

            <div>
                Page {activeStep + 1} of {numPages}
            </div>

            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === (numPages - 1)} >
                        Next
                <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} >
                        <KeyboardArrowLeft />
                Back
            </Button>
                }
            />
        </div>
    );
}

