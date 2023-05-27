// JobLogs.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobLogs = () => {
  const { jobId } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // TODO: Replace with your actual get logs API
    axios.get(`/api/jobs/${jobId}/logs`)
      .then(res => {
        setLogs(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [jobId]);

  return (
    <div>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
};

export default JobLogs;
