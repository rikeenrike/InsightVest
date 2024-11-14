import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resources from './components/Resources';
import InfoCard from './components/InfoCard';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="pt-[10vh] p-6"> {/* Add padding to avoid overlap with the fixed navbar */}
        <Hero />
        {/* <section className="mt-10 max-w-[70vw]  mx-auto">
          <section className="mt-10 max-w-[70vw] mx-auto">
            <h2 className="text-5xl tracking-normal font-semibold mb-4 border border-black2 rounded-lg p-6 shadow-glow">
              InsightVest is dedicated to transforming finance through cutting-edge AI and machine learning. We value transparency, reliability, and providing actionable insights to empower better financial decisions.
            </h2>
          </section>
        </section> */}
        <Resources />

        <section className="mt-10  flex gap-4 max-w-[70vw]  mx-auto">
          <InfoCard
            title="Linear Regression"
            description="Predicts asset performance using historical data, such as stock prices or market indices"
            color="bg-black2 text-white"
            width="w-full md:w-1/3" // Example width
          />
          <InfoCard
            title="Naive Bayes"
            description=" Classifies clients based on their financial behavior to assess credit risk.
                          Data Used: Income levels, payment history, debt-to-income ratios."
            color="bg-white text-black"
            width="w-full md:w-2/3" // Example width
          />
        </section>

        <section className="mt-4 flex gap-4 max-w-[70vw]  mx-auto">
          <InfoCard
            title="K-Nearest Neighbors"
            description=" Detects anomalies and identifies patterns indicative of fraudulent activity."
            color="bg-gradient-to-r from-blue-500 to-purple-500"
            width="w-full md:w-2/3"
          />
          <InfoCard
            title="Support Vector Machines"
            description="Identifies outliers or fraudulent activities by creating decision boundaries in multi-dimensional space."
            color="bg-yellow-500 text-black"
            width="w-full md:w-1/3"
          />
        </section>

        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default App;