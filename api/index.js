const express = require('express')
const app = express()
// react running on 3000 for dev.
const port = 3001

// Redis
var redis = require ("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/api/jobs', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Fetch the Github JSON string, parse to Json and print the length to console.
    const Github = await getAsync('github');
    const JSON_Github = JSON.parse(Github);
    console.log(`Github Jobs : ${JSON.parse(Github).length}`);

    // Fetch the RemoteOK JSON string, parse to Json and print the length to console.
    const RemoteOK = await getAsync('remoteok');
    let JSON_RemoteOK = JSON.parse(RemoteOK);
    console.log(`RemoteOk Jobs : ${JSON.parse(RemoteOK).length}`);

    // Concatenate the JSON arrays into one total jobs array.
    let jobs = JSON_Github.concat(JSON_RemoteOK);

    // Print the total length.
    console.log(`Total Jobs : ${jobs.length}`);

    let sortedJobs = jobs.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter array to remove false jobs.
    let filteredJobs = sortedJobs.filter(job => {
        if(job.company == ""){
            return false
        }
        return true
    })

    // Print the jobs removed by the filter.
    console.log(`Removed ${jobs.length-filteredJobs.length} empty jobs. Total jobs: ${filteredJobs.length}`);
    // Stringify Jobs.
    filteredJobs = JSON.stringify(filteredJobs);
    return res.send(filteredJobs) 
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})