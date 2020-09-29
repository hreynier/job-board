import React from 'react';
import './App.css';

import Jobs from './components/Jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Microsoft'},
  {title: 'SWE 1', company: 'Facebook'},
  {title: 'SWE 1', company: 'Netflix'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
      
    </div>
  );
}

export default App;
