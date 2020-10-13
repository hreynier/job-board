import React from 'react';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './JobBoard.css';

import Job from './Job';
import JobModal from './JobModal';
import JobSearchBar from './JobSearchBar';


export default function JobBoard({jobs, searchOnChange}) {

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

    var getOffsetTop = function (elem) {

        // Set our distance placeholder
        var distance = 0;
    
        // Loop up the DOM
        if (elem.offsetParent) {
            while(elem) {
                distance += elem.offsetTop;
                elem = elem.offsetParent;
            }
        }
        // Return our distance
        return distance < 0 ? 0 : distance;
    };

    const jobBoardEl = document.getElementById('job-board');

    function scrollToTop () {
        const c = getOffsetTop(jobBoardEl);
        console.log(c);
        if (c > 0) {
          //window.requestAnimationFrame(scrollToTop); causes callback hell loop
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

    // Search Component functions
    // OnChange{
        /*
    const handleSearchChange = (e) => {
        
        // Store the current list of jobs.
        let currentJobs = jobs;
        // Create variable to store filtered jobs.
        let filteredJobs = [];
        // Store input
        let input = e.target.value;

        // If search is not empty, begin search.
        if(input !== ""){

            // Use the filter function to determine which jobs to show 
            // based on the search.
            filteredJobs = currentJobs.filter( job =>{
                // Change all relevant job.values to lowercase.
                let title = job.title.toLowerCase();
                let company = job.company.toLowerCase();
                let description = job.description.toLowerCase();
                let location = job.location.toLowerCase();

                // Store input as lowercase.
                let inpLC = input.toLowerCase();

                if(title.includes(inpLC) || company.includes(inpLC) || description.includes(inpLC) || location.includes(inpLC)){
                    return true;
                    console.log(job);
                }
            })
        }
        else{
            filteredJobs = currentJobs;
        }
        console.log('click');
        console.log(filteredJobs);

    }; */

    return (
        <div className="job-board-container" id="job-board">
            <JobModal open={open} job={selectedJob} handleClose = {handleClose} />
            <div className="search-container"> 
                <Typography className="search-title" variant="h4" component="h1">
                    Search
                </Typography>

                <JobSearchBar handleChange = {searchOnChange} />

                <Typography variant="h6" component="h2">
                    Found {numJobs} Jobs
                </Typography>
            </div>

            <svg className="curved-upper" xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 105">
                <path fill="#F5F5F5" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,96C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>

            <div className="jobs-container">
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
                    className="mobile-stepper"
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
        </div>
    );
}

