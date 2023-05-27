// JobDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // TODO: Replace with your actual get detail API
    axios.get(`/api/jobs/${jobId}`)
      .then(res => {
        setJob(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [jobId]);

  return (
    <div>
      {job ? (
        <div>
          <h1>Job ID: {job.id}</h1>
          <p>Status: {job.status}</p>
          // TODO: Display other job details
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
