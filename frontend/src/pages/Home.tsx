import Hero from '../components/Hero';
import Services from '../components/Services';
import InfoCard from '../components/InfoCard';
import Sponsors from '../components/Others';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    
    <div className=" text-white min-h-screen">
      <Navbar />
      <div className="px-6 flex flex-col gap-[1rem]">
        <Hero />
        <Services />
        <section className='flex-row'>
          <InfoCard
            title="Linear Regression"
            description="Predicts asset performance using historical data, such as stock prices or market indices"
            color="bg-black2 text-white"
            width="w-full md:w-1/3" // Example width
          />
          <InfoCard
            title="Naive Bayes"
            description="Classifies clients based on their financial behavior to assess credit risk. Data Used: Income levels, payment history, debt-to-income ratios."
            color="bg-gradient-to-r from-rose-400 to-red-500"            
            width="w-full md:w-2/3" // Example width
          />
        </section>
        <section className="flex-row">
          <InfoCard
            title="K-Nearest Neighbors"
            description="Detects anomalies and identifies patterns indicative of fraudulent activity."
            color="bg-gradient-to-r from-blue-500 to-purple-500"
            width="w-full md:w-1/2" // Example width
          />
          <InfoCard
            title="Support Vector Machines"
            description="Classifies data points to identify potential investment opportunities."
            color="bg-gradient-to-r from-green-500 to-teal-500"
            width="w-full md:w-1/2" // Example width
          />
        </section>
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
}