import React from 'react';
import { jobs } from '../jobs';
const LatestJobs = () => {

  return (
    <div className="container mx-auto py-16">
        <div className="lg:ml-16 sm:ml-0 bg-gradient-to-r from-blue-500 to-indigo-600 py-8 ">
      <h2 className="text-3xl font-bold text-center text-white">Latest Jobs</h2>
        </div>
      <ul className="list-disc list-inside border border-blue-500 lg:ml-16 sm:ml-0 p-4">
        {jobs.map((job, index) => (
          <li key={index} className="text-left  pl-2 underline">
            <a href={job.applyLink} className="text-blue-500 text-lg hover:underline">
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestJobs;
