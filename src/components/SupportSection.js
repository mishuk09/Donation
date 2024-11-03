import React from 'react';

const SupportSection = () => {
    return (
        <div className="p-8 bg-white w-full rounded-2xl shadow-md flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Buy Wesam Hammad a Coffee</h2>

            {/* Coffee Selection */}
            <div className="flex items-center justify-center space-x-4 mb-6">
                <span role="img" aria-label="coffee" className="text-3xl">☕</span>
                <div className="flex space-x-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200">3</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200">5</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200">10</button>
                </div>
            </div>

            {/* Input Fields */}
            <input
                type="text"
                placeholder="Name or @yoursocial"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            />
            <textarea
                placeholder="Say something nice..."
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            ></textarea>

            {/* Support Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md">
                Support $5
            </button>
        </div>
    );
};

export default SupportSection;
