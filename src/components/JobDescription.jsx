import React from 'react';

const JobDescription = ({ job }) => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-lg mb-6">{job.description}</p>
      <a href={job.applyLink} className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">
        Apply Now
      </a>
    </div>
  );
};

export default JobDescription;
