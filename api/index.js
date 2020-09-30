const express = require('express')
const app = express()
// react running on 3000 for dev.
const port = 3001

// Redis
var redis = require ("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const jobs = await getAsync('github');
    //console.log(JSON.parse(jobs).length);


    return res.send(jobs)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})