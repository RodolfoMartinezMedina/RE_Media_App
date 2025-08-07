import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import HomeSection from "./HomeSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "services":
        return <ServicesSection />;
      case "testimonials":
        return <TestimonialsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 sticky top-0 z-50 rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">
            Atlanta Media Pro
          </h1>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-lg font-medium transition-colors duration-300 rounded-md px-3 py-2
                  ${
                    activeSection === item.id
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-700"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-indigo-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-white rounded-md shadow-lg py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-base font-medium transition-colors duration-300
                  ${
                    activeSection === item.id
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-700"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto py-8 px-4 md:px-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center rounded-t-lg">
        <div className="container mx-auto">
          <p>
            &copy; {new Date().getFullYear()} Atlanta Media Pro. All rights
            reserved.
          </p>
          <p className="text-sm mt-2">
            Connecting properties with people through stunning visuals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
