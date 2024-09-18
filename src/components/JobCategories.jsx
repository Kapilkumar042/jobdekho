import React from 'react';
import { FaGraduationCap, FaUserGraduate, FaBriefcase, FaUniversity } from 'react-icons/fa';

const JobCategories = () => {
  return (
    <div className="text-2xl text-center mt-10 font-medium">
      <h1>Jobs By Qualification</h1>
    <div className=" container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <a href="/jobs-after-12th" className="hover:bg-gray-100 p-6 rounded">
        <FaGraduationCap size={50} className="mx-auto text-blue-500" />
        <h3 className="mt-4 text-lg font-bold">Jobs After 12th</h3>
      </a>
      <a href="/jobs-after-graduation" className="hover:bg-gray-100 p-6 rounded">
        <FaUserGraduate size={50} className="mx-auto text-green-500" />
        <h3 className="mt-4 text-lg font-bold">Jobs After Graduation</h3>
      </a>
      <a href="/professional-jobs" className="hover:bg-gray-100 p-6 rounded">
        <FaBriefcase size={50} className="mx-auto text-yellow-500" />
        <h3 className="mt-4 text-lg font-bold">Professional Jobs</h3>
      </a>
      <a href="/govt-exams" className="hover:bg-gray-100 p-6 rounded">
        <FaUniversity size={50} className="mx-auto text-red-500" />
        <h3 className="mt-4 text-lg font-bold">Government Exams</h3>
      </a>
    </div>
    </div>
  );
};

export default JobCategories;
