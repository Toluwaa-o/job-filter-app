import FilterBar from "../components/FilterBar/filterBar";
import { useState, useEffect } from "react";
import Jobs from "../components/Jobs/Jobs";
import Footer from "../components/Footer/Footer";

function App() {
  const [jobState, setJobState] = useState({
    jobs: [],
    filter: [],
    totalJobs: []
  })

  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(res => {
      setJobState(prev => ({...prev, jobs: res, totalJobs: res}))
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {

    if(jobState.filter.length > 0) {
      let newJobs = jobState.totalJobs
      for(let i = 0; i < jobState.filter.length; i++){
        newJobs =  newJobs.filter(job => {
          return job.role === jobState.filter[i] || job.level === jobState.filter[i] || job.languages.includes(jobState.filter[i]) || job.tools.includes(jobState.filter[i])
        })
      }
      setJobState(prev => {
        return ({...prev, jobs: newJobs})
      })
    }

    if(jobState.filter.length === 0){
      setJobState(prev => ({
        ...prev, jobs: prev.totalJobs
      }))
    }

  }, [jobState.filter.length])

  const addFilter = (type, name) => {
    if(jobState.filter.indexOf(name) === -1) {
      setJobState(prev => ({...prev, filter: [...prev.filter, name]}))
    }
  }

  const removeFilter = (name) => {
    setJobState(prev => ({...prev, filter: prev.filter.filter(filt => filt !== name)}))
  }

  const clearFilter = () => {
    setJobState(prev => ({...prev, filter: []}))
  }

  return (
    <div className="App">
      <FilterBar filters={jobState.filter} removeFilter={removeFilter} clearFilter={clearFilter} />
      <Jobs addFilter={addFilter} jobs={jobState.jobs} />
      <Footer />
    </div>
  )
}

export default App;