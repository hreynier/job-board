var CronJob = require('cron').CronJob;

// Import fetch functions for each API
const fetchGithub = require('./tasks/fetch-github');

// fetch Github jobs every minute.
new CronJob('* * * * *', fetchGithub, null, true, 'Europe/London');
