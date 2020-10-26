/***
 *  Program to fetch jobs from the RemoteOk API
 * 
 *  
***/

/* import fetch from node-fetch library */
var fetch = require('node-fetch');

/* import uuid library */
const { v4: uuidv4 } = require('uuid');


/* import node-redis */
var redis = require ("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);


/* Define base url for github API, that calls entire db(?) */
const baseURL = 'https://remoteok.io/api';

// Need to change the JSON keys to match the og github jobs API.
// 1. Create a function that takes a JSON array, and replaces the keys.

function renameKey( obj, oldKey, newKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
} 

async function fetchRemoteOk() {
    console.log('Fetching RemoteOK jobs...');
    /*  Remote OK API provides every active posting through the base URL.
        This means we do not need to lioop through pages like the github API.
    */

    let jobCount, legalInfo;

    // Push jobs that we fetch into an array.
    const allJobs = [];

    // Fetch jobs JSON.
    const res = await fetch(baseURL);
    const jobs = await res.json();

    // Spread jobs into allJobs array (may need to remove legal tag.)
    allJobs.push(...jobs);

    legalInfo = allJobs.shift();

    jobCount = allJobs.length;

    // Log total jobs received from API.
    console.log(`RemoteOk: Got ${jobCount} jobs in total.`);


    // Need to change keys of json array.
    // Loop through all jobs array, renaming each key according to the github jobs API key names.
    // Use the function defined @line24.
    // Also reformatting the date as well.

    allJobs.forEach( entry => {
        renameKey( entry , 'position', 'title');

        // Replace ID with UUID
        entry.id = uuidv4();

        entry.created_at = entry.date;

        // Set new date variable and reformat as UTC string to allow to print in react client.
        let jobDate = new Date(entry.created_at);
        entry.created_at = jobDate.toString().replace(/,/g, '');
        entry.source = 'Remote OK';
    });

    
    /*let test2 = allJobs[2];
    console.log({test2});
    */
    

    // Simple filtering algo
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();

        // Algo Logic

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
            jobTitle.includes('architect') // Add more incl. descriptions.
        ) {
            return false
        }
        return true
    })

    console.log(`Remote OK: Filtered down to ${jrJobs.length} jr jobs in total.`);

    // Send jobs to redis server.
    const success = await setAsync('remoteok', JSON.stringify(jrJobs));

    console.log({success});
}

// testing
//fetchRemoteOk();

// export for CronJobs.
module.exports = fetchRemoteOk;