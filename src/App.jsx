// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import JobSubmit from './JobSubmit';
import JobList from './JobList';
import JobControl from './JobControl';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/submit">Submit Job</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/list">Job List</Link>acd
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/control">Job Control</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path="/submit" element={<JobSubmit />} />
            <Route path="/list" element={<JobList />} />
            <Route path="/control" element={<JobControl />} />
            <Route path="*" />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
