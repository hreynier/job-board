import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';

import Jobs from './components/Jobs';

// Jobs API URL - currently localhost.
const JOB_API_URL = 'http://localhost:3001/jobs'

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

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <HeroSection />
      <Jobs jobs={jobsList} />
      
    </div>
  );
}

export default App;
