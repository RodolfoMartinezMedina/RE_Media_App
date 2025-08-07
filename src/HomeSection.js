import React from "react";

const HomeSection = () => (
  <section
    id="home"
    className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg mb-12 flex flex-col md:flex-row items-center justify-center p-6 md:p-12"
  >
    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Elevate Your Listings with{" "}
        <span className="text-indigo-600">Stunning Visuals</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Specializing in high-quality photography, cinematic videography, and
        immersive virtual tours for real estate professionals in Atlanta,
        Georgia.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
        Explore Our Services
      </button>
    </div>
    <div className="md:w-1/2 flex justify-center">
      {/* Placeholder Image */}
      <img
        src="https://placehold.co/600x400/6366F1/FFFFFF?text=Stunning+Property"
        alt="Stunning Property Visuals"
        className="rounded-xl shadow-2xl object-cover w-full max-w-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/6366F1/FFFFFF?text=Image+Load+Error";
        }}
      />
    </div>
  </section>
);

export default HomeSection;
