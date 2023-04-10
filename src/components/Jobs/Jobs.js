import Job from "../Job/job"

export default function Jobs(props) {
    const jobs = props.jobs.map(job => {
        return <Job 
                    key={job.id} 
                    logo={job.logo}
                    company={job.company}
                    isNew={job.new}
                    isFeatured={job.featured}
                    position={job.position}
                    role={job.role}
                    level={job.level}
                    postedAt={job.postedAt}
                    contract={job.contract}
                    location={job.location}
                    languages={job.languages}
                    tools={job.tools}
                    addFilter={props.addFilter}
                      />
    })
  return (
    <main>
        {jobs}
    </main>
  )
}
