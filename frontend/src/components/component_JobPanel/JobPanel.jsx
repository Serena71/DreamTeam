import * as React from 'react';
import JobCard from './JobCard';
import Pagination from '@mui/material/Pagination';
import './JobPanel.css';
import usePagination from './usePagination';

export default function JobPanel() {
  const jobs = [
    {
      title: 'Web Developer',
      company: 'Google',
      region: {
        country: 'Australia',
        state: 'NSW',
        city: 'Sydney',
      },
      citizenship: ['Australian PR', 'Australian Citizen'],
      description: 'This is a job description',
      meetings: [
        { date: '2022-07-21', link: 'url-link-1' },
        { date: '2022-07-24', link: 'url-link-2' },
      ],
    },
    {
      title: 'Data Analysis',
      company: 'Microsoft',
      region: {
        country: 'Australia',
        state: 'NSW',
        city: 'North Sydney',
      },
      citizenship: ['Australian PR', 'Australian Citizen'],
      description: 'This is a job description',
      meetings: [
        { date: '2022-07-22', link: 'url-link-3' },
        { date: '2022-07-24', link: 'url-link-4' },
      ],
    },
  ];
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 1;
  const count = Math.ceil(jobs.length / PER_PAGE);
  const handleData = usePagination(jobs, PER_PAGE);

  const handlePageChange = (e, p) => {
    setPage(p);
    handleData.jump(p);
  };

  return (
    <div className="job-panel">
      {handleData.currentData().map((job, idx) => (
        <JobCard key={idx} title={job.title} company={job.company} location={job.region} briefing={job.description} />
      ))}
      <Pagination count={count} page={page} onChange={handlePageChange} shape="rounded" />
    </div>
  );
}