import React from 'react';

const AboutSection = () => {
  return (
    <div className="p-8 w-full mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-6">About Wesam Hammad</h2>
      <p className="text-gray-700 mb-4">
        I am trying to raise enough money to take my 6-year-old orphaned nephew to Egypt from Gaza.
      </p>
      <p className="text-gray-700 mb-4">
        He suffers from brain atrophy, and his medication is unavailable in Gaza. The alternative medicine has serious side effects on his kidneys.
      </p>
      <p className="text-gray-700 mb-6">
        Please help with whatever you can; Hamood and I really appreciate your support.
      </p>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-gray-500 text-sm font-semibold mb-4">Recent Supporters</h3>
        <div className="space-y-2">
          {/* Supporter List... */}
        </div>
        <p className="text-blue-600 text-sm mt-2 italic">Be the first one to support Wesam Hammad.</p>
      </div>

      <div className="mt-6">
        <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-200">
          Support Now
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
