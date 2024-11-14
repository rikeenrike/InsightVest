import React from 'react';

const resources = [
  { title: "Utilizing Linear Regression to analyze asset performance and optimize investment strategies based on economic trends.", type: "Investment Advisory" },
  { title: "Leveraging Naive Bayes classification to assess credit risk and assist in lending decisions with greater accuracy.", type: "Risk Management" },
  { title: "Real-time fraud detection powered by advanced machine learning for anomaly detection and pattern recognition.", type: "Fraud Detection" },
];

const Resources: React.FC = () => {
  return (
    <section className="mt-10 max-w-[70vw]  mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-black2 text-white p-4 h-[20vh] rounded-md">
            <span className="block text-3xl font-semibold mb-2">{resource.type}</span>
            <h3 className="font-regular font-md">{resource.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;