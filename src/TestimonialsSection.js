import React, { useState } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Atlanta Media Pro transformed our listings! Their photography and virtual tours are top-notch and truly help sell homes faster.",
      author: "Sarah J., Real Estate Agent",
    },
    {
      quote:
        "The cinematic videos they produced for our new development were incredible. Professional, efficient, and highly recommended!",
      author: "David L., Property Developer",
    },
    {
      quote:
        "Their attention to detail and quick turnaround time make them an indispensable partner for our brokerage. Always impressed!",
      author: "Emily R., Brokerage Owner",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg mb-12 p-6 md:p-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Clients Say
      </h2>
      <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl text-center">
        <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
          "{testimonials[currentTestimonial].quote}"
        </p>
        <p className="text-lg font-semibold text-indigo-600">
          - {testimonials[currentTestimonial].author}
        </p>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevTestimonial}
            className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 transform -translate-x-1/2"
            aria-label="Previous testimonial"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextTestimonial}
            className="bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 transform translate-x-1/2"
            aria-label="Next testimonial"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
