// JobList.js
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import {getStatus, getQuery} from "./api"
// import axiosProp, {getStatus, query, getVersion} from "../api"


// 这个组件会显示一个任务列表，包含任务的ID、名称和提交时间。
// 这个列表会使用Ant Design的Table组件。组件加载时，我们会使用axios向后端发送一个GET请求来获取任务列表。


const JobList = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    // TODO: Replace with your actual get list API
    const fetchData = async () => {
      try {
        // const response = await fetch('https://api.example.com/data');
        let query = await getQuery();
        // console.log("get_status", getStatus());
        console.log(query);
      setJobs(query.results);
        // setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle error
      }
    };

    fetchData();
    
    
    // axios.get('/api/jobs')
    //   .then(res => {
    //     setJobs(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Job Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Submit Time',
      dataIndex: 'start',
      key: 'start',
    },
    {
      title: 'End Time',
      dataIndex: 'end',
      key: 'end',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      // render: () => <Badge status="success" text="Finished" />,
    },
  ];

  return (
    <Table columns={columns} dataSource={jobs} rowKey="id" />
  );
};

export default JobList;
