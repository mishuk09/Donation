import React from 'react';

const AboutSection = () => {
  return (
    <div className="p-6 w-full mx-auto aboutsection rounded-lg  ">
      <h2 className="text-xl font-bold secondary-font mb-6">About Wesam Hammad</h2>
      <p className="para mb-4">
        I am trying to raise enough money to take my 6-year-old orphaned nephew to Egypt from Gaza.
      </p>
      <p className="para mb-4">
        He suffers from brain atrophy, and his medication is unavailable in Gaza. The alternative medicine has serious side effects on his kidneys.
      </p>
      <p className="para mb-6">
        Please help with whatever you can; Hamood and I really appreciate your support.
      </p>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-gray-500 text-sm font-semibold mb-4">Recent Supporters</h3>
        <div className="space-y-2">

        </div>
        <p className="text-blue-600 text-center bg-gray-100 border p-10 rounded-lg text-sm mt-2 italic">
          Be the first one to support Wesam Hammad ❤️
        </p>
      </div>

      {/* <div className="mt-6">
        <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-200">
          Support Now
        </button>
      </div> */}
    </div>
  );
};

export default AboutSection;
