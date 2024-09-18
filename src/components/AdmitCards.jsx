import React from 'react';

const AdmitCards = () => {
  const admitCards = [
    { title: 'UPSC Civil Services Admit Card', link: '/admit-cards/upsc-civil-services' },
    { title: 'SSC CHSL Admit Card', link: '/admit-cards/ssc-chsl' },
    { title: 'IBPS PO Admit Card', link: '/admit-cards/ibps-po' },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="lg:ml-16 sm:ml-0 bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
      <h2 className="text-3xl font-bold text-center text-white">Admit Cards</h2>
        </div>
      <ul className="list-disc list-inside border border-blue-500 lg:ml-16 sm:ml-0 p-4">
        {admitCards.map((card, index) => (
          <li key={index} className="text-left  pl-2 underline">
            <a href={card.link} className="text-blue-500 text-lg hover:underline">
              {card.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdmitCards;
