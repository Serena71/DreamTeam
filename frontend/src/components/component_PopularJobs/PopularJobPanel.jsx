import * as React from 'react';
import SimpleJobCard from '../component_SimpleJobCard/SimpleJobCard';

import { Dialog } from '@mui/material';
import JobDetail from '../compopnent_JobDetail/JobDetail';
import './PopularJobPanel.css';

function getJobDetail(jobs, id) {
  const job = jobs.filter((job) => job.id == id);
  return job[0];
}

export default function PopularJobPanel(props) {
  const [open, setOpen] = React.useState(false);
  const [jobId, setJobId] = React.useState(null);

  const handleClickOpen = (e) => {
    setOpen(true);
    setJobId(e.currentTarget.id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="popular-panel">
        <div>Trending Search</div>
        {props.jobs.map((job, idx) => (
          <SimpleJobCard
            key={idx}
            jobID={job.id}
            title={job.title}
            company={job.company || 'company'}
            location={{ country: job.location, state: job.state, city: job.city }}
            hanldeClickOpen={handleClickOpen}
          />
        ))}
      </div>
      <Dialog open={open} onClose={handleClose} scroll="paper" maxWidth="md">
        <JobDetail handleClose={handleClose} job={getJobDetail(props.jobs, jobId)} />
      </Dialog>
    </>
  );
}
