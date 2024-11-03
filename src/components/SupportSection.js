import React, { useState } from 'react';

const SupportSection = () => {
    const [quantity, setQuantity] = useState(1);
    const [sponsorName, setSponsorName] = useState('');
    const [sponsorLink, setSponsorLink] = useState('');
    const [email, setEmail] = useState('');
    const mealCost = 5; // Cost per meal

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const calculateAmount = () => {
        return quantity * mealCost;
    };

    return (
        <div className="p-8 bg-white w-full rounded-2xl shadow-md flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Give a Meal to College Student</h2>

            {/* Meal Selection */}
            <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex space-x-4">
                    {[1, 5, 10].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleQuantityChange(num)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full 
                                        ${quantity === num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} 
                                        hover:bg-gray-300 transition duration-200`}>
                            {num}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Fields */}
            <input
                type="text"
                placeholder="Contact Email"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name (Mandatory for Sponsored)"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={sponsorName}
                onChange={(e) => setSponsorName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Sponsor Link (Optional)"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={sponsorLink}
                onChange={(e) => setSponsorLink(e.target.value)}
            />

            {/* Support Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md">
                Support ${calculateAmount()}
            </button>
        </div>
    );
};

export default SupportSection;
