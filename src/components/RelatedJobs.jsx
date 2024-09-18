import React from 'react';

const RelatedJobs = ({ jobs }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Latest Jobs in this Category</h2>
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="text-center">
            <a href={job.link} className="text-blue-500 text-lg hover:underline">
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedJobs;
