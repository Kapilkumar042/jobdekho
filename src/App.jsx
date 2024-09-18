import React from 'react'
import Navbar from './components/Navbar'
import TextAnimation from './components/TextAnimation'
import JobCategories from './components/JobCategories'
import LatestJobs from './components/LatestJobs'
import JobDescription from './components/JobDescription'
import RelatedJobs from './components/RelatedJobs'
import AdmitCards from './components/AdmitCards'
import AnswerKeys from './components/AnswerKeys'

import { jobs } from './jobs'

const App = () => {
  // const job = {
  //   title: 'Junior Engineer',
  //   description: 'Junior Engineer position for government department XYZ.',
  //   applyLink: '/apply/junior-engineer',
  // };

  const relatedJobs = [
    { title: 'Junior Clerk', link: '/jobs/junior-clerk' },
    { title: 'Account Assistant', link: '/jobs/account-assistant' },
  ];
  return (
    <div>
      <Navbar/>
      <TextAnimation/>
      <JobCategories/>
      <div className='lg:flex gap-6 sm:block'>
         <LatestJobs />
      <AdmitCards />
      <AnswerKeys />
      </div>
      <JobDescription job={jobs} />
      <RelatedJobs jobs={relatedJobs}/>
    </div>
  )
}

export default App