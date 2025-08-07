import React from "react";
import { Camera, Video, Home, Star, Mail, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera size={48} className="text-indigo-600 mb-4" />,
      title: "Professional Photography",
      description:
        "High-resolution interior and exterior photos that capture the essence of every property, optimized for MLS and marketing.",
    },
    {
      icon: <Video size={48} className="text-indigo-600 mb-4" />,
      title: "Cinematic Videography",
      description:
        "Engaging property walkthrough videos with professional editing and aerial drone footage to highlight unique features.",
    },
    {
      icon: <Home size={48} className="text-indigo-600 mb-4" />,
      title: "Immersive Virtual Tours",
      description:
        "Interactive 3D tours (Matterport) and 360° panoramas that allow potential buyers to explore properties remotely.",
    },
    {
      icon: <CheckCircle size={48} className="text-indigo-600 mb-4" />,
      title: "Drone & Aerial Media",
      description:
        "Stunning aerial photography and videography providing unique perspectives and showcasing property surroundings.",
    },
    {
      icon: <Star size={48} className="text-indigo-600 mb-4" />,
      title: "Floor Plans & Site Maps",
      description:
        "Detailed 2D and 3D floor plans to help buyers visualize the layout and flow of a property.",
    },
    {
      icon: <Mail size={48} className="text-indigo-600 mb-4" />,
      title: "Virtual Staging & Enhancements",
      description:
        "Transform vacant spaces with realistic virtual furniture and decor, or enhance existing photos with advanced editing.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white rounded-xl shadow-lg mb-12 p-6 md:p-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Comprehensive Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
