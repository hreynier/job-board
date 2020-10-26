var CronJob = require('cron').CronJob;

// Import fetch functions for each API
const fetchGithub = require('./tasks/fetch-github');
const fetchRemoteOk = require('./tasks/fetch-remoteok');

fetchRemoteOk();
fetchGithub();

// fetch Github jobs at every 10th minute past the hour 10 * * * *
new CronJob('52 * * * *', fetchGithub, null, true, 'Europe/London');

// fetch Remote Ok jobs every 30th minute past the hour.
new CronJob('30 * * * *', fetchRemoteOk, null, true, 'Europe/London');