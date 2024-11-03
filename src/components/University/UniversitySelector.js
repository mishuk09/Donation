// src/UniversitySelector.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UniversitySelector = () => {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUniversities = async () => {
            setLoading(true);
            setError(''); // Reset error state
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/Hipo/university-domains-list/refs/heads/master/world_universities_and_domains.json'
                );
                setUniversities(response.data);
            } catch (error) {
                setError('Failed to load universities. Please try again later.');
                console.error('Error fetching universities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, []); // Ensure this runs only once

    const handleSelect = (event) => {
        const universityName = event.target.value;
        const university = universities.find((uni) => uni.name === universityName);
        setSelectedUniversity(university || null); // Ensure valid selection
    };

    return (
        <div className="university-sel    ">
            <div className="bg-white wel-back items-center text-center rounded-lg shadow-lg p-8   ">
                <h1 className="text-4xl welcome-font font-bold text-center   mb-4">Welcome to Our Donation Platform</h1>
                <p className="text-center text-white  mb-6">Please select your university:</p>
                
                {loading && <p className="text-center text-gray-600">Loading universities...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                
                {!loading && !error && (
                    <select
                        onChange={handleSelect}
                        className="border border-gray-300 input-color rounded p-2 w-1/2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a university...</option>
                        {universities.map((uni) => (
                            <option key={uni.name} value={uni.name}>
                                {uni.name}
                            </option>
                        ))}
                    </select>
                )}

                {selectedUniversity && (
                    <div className="text-center mt-6">
                        <h2 className="text-lg font-semibold text-gray-800">{selectedUniversity.name}</h2>
                        <p className="text-sm text-gray-500">
                            Website: <a href={`http://${selectedUniversity.domains[0]}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{selectedUniversity.domains[0]}</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UniversitySelector;
