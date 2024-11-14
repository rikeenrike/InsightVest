import React from 'react';

const sponsors = [
  { name: "Decision Trees", description: "Classifies data for forecasting market trends and behavior based on historical data patterns." },
  { name: "Artificial Neural Networks", description: "Provides deep learning capabilities for forecasting financial markets and predicting long-term trends." },
];

const Sponsors: React.FC = () => {
  return (
    <section className="mt-10 max-w-[70vw]  mx-auto">
      <h2 className="text-2xl font-semibold mb-4">More Algorithms!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="bg-black2 text-white p-4 rounded-md">
            <h3 className="font-bold">{sponsor.name}</h3>
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;