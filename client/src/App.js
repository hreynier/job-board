import React from "react";
import "./App.css";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


import HeroSection from "./components/HeroSection";
import JobBoard from "./components/JobBoard";
import Footer from "./components/Footer";

// Jobs API URL - relative path.
const JOB_API_URL = "/api/jobs";

// call API jobs.
async function fetchJobs(updateCb) {
	const res = await fetch(JOB_API_URL);
	const json = await res.json();

	// Update state function used as callback
	// so that jobsList can be updated.
	updateCb(json);
}

function App() {
	// Use the State Hook to declare the jobsList state as an
	// empty array. The update state function is called on
	// the fetched github jobs JSON and then passed to the
	// Jobs component to display on the page.
	const [jobsList, updateJobs] = React.useState([]);

	// Use State Hook to declare filtered jobs list,
	// that takes initial value as og jobslist but upates
	// as user searches.
	const [filteredList, updateFiltered] = React.useState(jobsList);

	React.useEffect(() => {
		fetchJobs(updateJobs);
		fetchJobs(updateFiltered);
		//updateFiltered(jobsList);
	}, []);


	// Search Component functions
	// OnChange
	const handleSearchChange = (e) => {

		// Store the current list of jobs.
		let currentJobs = jobsList;
		// Create variable to store filtered jobs.
		let filteredJobs = [];
		// Store input
		let input = e.target.value;

		// If search is not empty, begin search.
		if (input !== "") {
			currentJobs = jobsList;

			// Use the filter function to determine which jobs to show
			// based on the search.
			filteredJobs = currentJobs.filter((job) => {
				// Change all relevant job.values to lowercase.
				let title = job.title.toLowerCase();
				let company = job.company.toLowerCase();
				let description = job.description.toLowerCase();
				let location = job.location.toLowerCase();

				// Store input as lowercase.
				let inpLC = input.toLowerCase();

				if (
					title.includes(inpLC) ||
					company.includes(inpLC) ||
					description.includes(inpLC) ||
					location.includes(inpLC)
				) {
					return true;
				}
				else {
					return false;
				}
			});
		} else {
			filteredJobs = currentJobs;
		}

		console.log(filteredJobs);
		updateFiltered(filteredJobs);

	};

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<HeroSection jobs={filteredList} searchOnChange={handleSearchChange} />
				<JobBoard jobs={filteredList} />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
