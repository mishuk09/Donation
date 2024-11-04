import React, { useState } from 'react';

const AboutSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderToggleIcon = (section) => {
    return openSection === section ? "−" : "+";
  };

  return (
    <div className="p-6 w-full mx-auto aboutsection rounded-lg">
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
          {/* Add supporter information here */}
        </div>
        <p className="text-blue-600 text-center bg-gray-100 border p-10 rounded-lg text-sm mt-2 italic">
          Be the first one to support Wesam Hammad ❤️
        </p>
      </div>

      {/* Claim Rules Section */}
      <div className="mt-10   border-gray-200 pt-4">
        <h3 className="text-xl font-bold secondary-font mb-6">Claim Rules for College Student Program</h3>

        <div className="space-y-4">
          {[
            { title: "Eligibility", content: "Only available to active college students with a valid student ID. Users must verify their student status before claiming benefits." },
            { title: "Claim Amount", content: "Daily claim amount is limited to $5 per student. The claim resets every 24 hours, and any unused funds do not roll over." },
            { title: "Participating Businesses Only", content: "Claims can only be redeemed through our network of participating small businesses. A list of approved businesses is provided in the app, and students must visit in person to make a claim." },
            { title: "Process", content: "To redeem a claim, students need to visit a participating business, complete the in-app check-in and verify location, and scan the business’s QR code provided at the checkout. Upon verification, the claim amount will be transferred to the business, reducing the student’s cost by $5." },
            { title: "Limits & Restrictions", content: "Only one claim per day per student. Claims cannot be transferred or saved for future use. Any misuse of the program may result in account suspension." },
          ].map((section, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex justify-between items-center w-full text-left text-gray-700 font-semibold text-sm focus:outline-none"
              >
                {section.title}
                <span className="text-xl">{renderToggleIcon(section.title)}</span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openSection === section.title ? 'max-h-40' : 'max-h-0'}`}
              >
                {openSection === section.title && (
                  <p className="mt-2 text-gray-600 text-sm">{section.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
