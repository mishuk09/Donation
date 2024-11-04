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
        <div className="p-6 bg-white w-full h-auto support-section rounded-2xl   flex flex-col">
            <h2 className="text-2xl font-bold secondary-font mb-6  ">Give a Meal to College Student</h2>

            {/* Meal Selection */}
            <div className="flex items-center   justify-center space-x-4 mb-4">

                <div className="flex text-center items-center justify-center  rounded-lg w-full bg-blue-50 p-4 space-x-4">
                    <p className='text-4xl me-6 flex text-center items-center'>
                        ☕ <span className='text-xl  text-gray-500'>X</span> 
                    </p>
                    {[1,3, 5, 10].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleQuantityChange(num)}
                            className={`w-10 h-10  flex items-center ring-1  justify-center rounded-full 
                                        ${quantity === num ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 font-bold '} 
                                        hover:bg-blue-500 hover:text-white transition duration-200`}>
                            {num}
                        </button>
                    ))}
                </div>
            </div>
            


            {/* Input Fields */}
            <input
                type="text"
                required
                placeholder="  Email *"
                className="w-full   p-4 text-sm mb-4 border  bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name *"
                className="w-full p-4 text-sm mb-4 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={sponsorName}
                onChange={(e) => setSponsorName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Sponsor Link (Optional)"
                className="w-full p-4 text-sm mb-4 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={sponsorLink}
                onChange={(e) => setSponsorLink(e.target.value)}
            />

            {/* Support Button */}
            <button className="bg-blue-500  mt-6 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md">
                Support ${calculateAmount()}
            </button>
        </div>
    );
};

export default SupportSection;
