import React from "react";
import { FaBookOpen, FaShippingFast, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-900 to-violet-900 text-white shadow-lg rounded-lg mt-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Bookstore Interior"
            className="rounded-lg shadow-xl border-2 border-white"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-purple-400">Chapter & Verse</span>
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Your Gateway to Literary Adventures. Since 2010, we've been 
            connecting readers with stories that inspire, educate, and entertain.
          </p>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-violet-800 p-6 rounded-lg hover:bg-violet-700 transition-colors">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <FaBookOpen className="mr-2 text-blue-400" />
            Our Collection
          </h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Rare first editions and signed copies</li>
            <li>Curated monthly recommendations</li>
            <li>Global literature section with translations</li>
          </ul>
        </div>

        <div className="bg-violet-800 p-6 rounded-lg hover:bg-violet-700 transition-colors">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <FaShippingFast className="mr-2 text-green-400" />
            Our Services
          </h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Worldwide shipping with tracking</li>
            <li>Gift wrapping & personalized notes</li>
            <li>Book subscription boxes</li>
            <li>Same-day delivery in major cities</li>
          </ul>
        </div>
      </div>

      {/* Community Section */}
      <div className="flex flex-col md:flex-row items-center bg-indigo-900 p-8 rounded-lg mb-12">
        <div className="md:w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Reading Community"
            className="rounded-lg shadow-lg border-2 border-white"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <FaUsers className="mr-2 text-purple-400" />
            Join Our Reading Community
          </h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Monthly book club meetings</li>
            <li>Author Q&A sessions</li>
            <li>Writing workshops</li>
            <li>Member-exclusive discounts</li>
          </ul>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-blue-800 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center">
          <FaAward className="mr-2 text-yellow-300" />
          Recognized Excellence
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-400">12+</div>
            <div className="text-gray-200">Industry Awards</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-green-400">1M+</div>
            <div className="text-gray-200">Books Delivered</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-400">95%</div>
            <div className="text-gray-200">Happy Customers</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-red-400">24/7</div>
            <div className="text-gray-200">Support</div>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-6 text-center">
        Crafted with 📚 by Yash Gundre
      </p>
    </div>
  );
};

export default About;