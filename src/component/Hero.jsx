export default function Hero({ title, subtitle, backgroundImage }) {
  return (
    <div className="relative bg-gray-900 text-white py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImage || "/images/hero-bg.jpg"})`,
        }}
      ></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
