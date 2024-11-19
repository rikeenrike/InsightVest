export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-white p-10 text-center rounded-lg w-full mx-auto min-h-[40vh] flex flex-col items-start justify-center">
      <h1 className="text-6xl font-bold mb-4 text-black">InsightVest.dev</h1>
      <p className="text-2xl mb-6 text-black">Empowering Smarter Financial Decisions Through AI and Machine Learning</p>
      <div className="space-x-4">
        <button className="bg-black px-4 py-2 rounded-md">Read the resources</button>
        <button className="bg-white text-black px-4 py-2 rounded-md">Join for free</button>
      </div>
    </section>
  );
}