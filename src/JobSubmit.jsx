// JobSubmit.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const JobSubmit = () => {
  const onFinish = values => {
    // TODO: Replace with your actual submit API
    axios.post('/api/submit', values)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Job Name"
        name="jobName"
        rules={[{ required: true, message: 'Please input your job name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JobSubmit;
