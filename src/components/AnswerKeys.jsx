import React from 'react';

const AnswerKeys = () => {
  const answerKeys = [
    { title: 'UPSC Civil Services Answer Key', link: '/answer-keys/upsc-civil-services' },
    { title: 'SSC CHSL Answer Key', link: '/answer-keys/ssc-chsl' },
    { title: 'IBPS PO Answer Key', link: '/answer-keys/ibps-po' },
  ];

  return (
    <div className="container mx-auto py-16">
        <div className="lg:ml-16 sm:ml-0 bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
      <h2 className="text-3xl font-bold text-center text-white">Answer Keys</h2>
        </div>
      <ol className="list-disc list-inside border border-blue-500 lg:ml-16 sm:ml-0 p-4">
        {answerKeys.map((key, index) => (
          <li key={index} className="text-left pl-2 underline">
            <a href={key.link} className="text-blue-500 text-lg hover:underline">
              {key.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AnswerKeys;
