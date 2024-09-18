import React from 'react';

const TextAnimation = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Sarkari Job Portal</h2>
        <p className="text-lg">
          <span className="animate-bounce">Find Latest Sarkari Jobs</span> | 
          <span className="animate-bounce"> Admit Cards and Answer Keys</span> | 
          <span className="animate-bounce"> Jobs for 12th, Graduates, Professionals</span>
        </p>
      </div>
    </div>
  );
};

export default TextAnimation;
