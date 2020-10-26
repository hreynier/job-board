/***
 *  Program to fetch jobs from the GitHub Jobs API
 * 
 *  
***/

/* import fetch from node-fetch library */
var fetch = require('node-fetch');

/* import node-redis */
var redis = require ("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);


/* Define base url for github API, that calls entire db(?) */
const baseURL = 'https://jobs.github.com/positions.json'


async function fetchGithub() {
    console.log('Fetching Github jobs...');
    /*  As base url only gives first page, we need to loop
        each page until we reach an empty page in order to
        fetch all of the possible jobs.
    */

    // variable that stores the number of results fetched per page.
    // and variable that stores the current page number.
    let resultCount = 1, onPage = 0;

    // Push jobs that we fetch into an array.
    const allJobs = [];

    while(resultCount > 0) {
        // Fetch jobs json.
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
    
        // Spreading array so that our total array is squashed.
        allJobs.push(...jobs);

        // Set result count.
        resultCount = jobs.length;
        console.log('Page: ', onPage,' got', resultCount, ' jobs.');

        // Increase onPage on each iteration.
        onPage++;
    }

    console.log(`GitHub: Got ${allJobs.length} jobs in total.`);

    // Add source key to each job.
    // Add date object for sorting.
    allJobs.forEach( entry => {
        entry.source = 'GitHub Jobs';

        let date = entry.created_at.split(' ').splice(0, 3).join(' ');
        let year = entry.created_at.split(' ').splice(5).join(' ');
        let dateFull = date.concat(' ', year);

        entry.date = new Date(dateFull).toISOString();
    })

    /*let testJob = allJobs[2];

    console.log({testJob});
    */

    // Simple filtering algorithm
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        // algorithm logic
        if(
            jobTitle.includes('senior') ||
            jobTitle.includes('sr.') || 
            jobTitle.includes('manager') ||
            jobTitle.includes('lead') ||
            jobTitle.includes('head') ||
            jobTitle.includes('director') ||
            jobTitle.includes('vp') ||
            jobTitle.includes('president') ||
            jobTitle.includes('exec.') ||
            jobTitle.includes('executive') ||
            jobTitle.includes('vice') ||
            jobTitle.includes('principal') ||
            jobTitle.includes('Architekt') ||
            jobTitle.includes('architect') //add more  incl. job descriptions.
        ) {
            return false
        }
        return true
    })
    console.log(`GitHub: Filtered down to ${jrJobs.length} jr jobs in total.`);

    // Send jobs to redis server.
    const success = await setAsync('github', JSON.stringify(jrJobs));

    console.log({success});
}

// testing
//fetchGithub();

// export for CronJobs.
module.exports = fetchGithub;