// 最后是JobControl组件。这个组件包含暂停和重启按钮，用户可以通过这些按钮控制任务。点击按钮时，我们会使用axios向后端发送一个PUT请求来暂停或重启任务。
// JobControl.js
import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

const JobControl = ({ jobId }) => {
    const handlePause = () => {
        // TODO: Replace with your actual control API
        axios.put(`/api/jobs/${jobId}/pause`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleResume = () => {
        // TODO: Replace with your actual control API
        axios.put(`/api/jobs/${jobId}/resume`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
                quote("JobSubmit.js\nimport React from 'react';", "export default JobSubmit;")
                quote("JobList.js\nimport React, { useEffect, useState }", "export default JobList;")
                quote("JobControl.js\nimport React from 'react';", "console.error(err);")
            })
            .catch(err => {
                console.error(err);
            });

    };

    return (
        <div>
            <Button onClick={handlePause}>Pause</Button>
            <Button onClick={handleResume}>Resume</Button>
        </div>
    );
};

export default JobControl;