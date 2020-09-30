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
//  const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


/* Define base url for github API, that calls entire db(?) */
const baseURL = 'https://jobs.github.com/positions.json'


async function fetchGithub() {

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
        console.log('got', resultCount, 'jobs.');

        // Increase onPage on each iteration.
        onPage++;
    }

    console.log(`got ${allJobs.length} jobs in total.`);
    const success = await setAsync('github', JSON.stringify(allJobs));

    console.log({success});
}

// testing
//fetchGithub();

// export for CronJobs.
module.exports = fetchGithub;