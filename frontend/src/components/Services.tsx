import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const resources = [
    { title: "Easily Decide who are eligible clients through the power the Decision Tree model.", type: "Loan Eligibility", link: "/loan-eligibility" },
    { title: "Leveraging Naive Bayes classification to assess credit risk and assist in lending decisions with greater accuracy.", type: "Risk Management", link: "/" },
    { title: "Real-time fraud detection powered by advanced machine learning for anomaly detection and pattern recognition.", type: "Fraud Detection", link: "/" },
  ];

  return (
    <section>
    <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {resources.map((resource, index) => (
        <div key={index} className="bg-black2 text-white p-4 h-[20vh] rounded-md" onClick={() => navigate(resource.link)}>
          <span className="block text-3xl font-semibold mb-2">{resource.type}</span>
          <h3 className="font-regular font-md">{resource.title}</h3>
        </div>
      ))}
    </div>
  </section>
  );
}