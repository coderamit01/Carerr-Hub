import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import AppliedJobs from '../Pages/AppliedJobs';
import JobDetails from '../Components/JobDetails/JobDetails';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/aplied-jobs', element: <AppliedJobs />},
      {
        path: '/job/:jobId',
        loader: () => fetch('../../public/jobData.json'),
        element: <JobDetails />
      }
    ]
  }
])

export default Router;