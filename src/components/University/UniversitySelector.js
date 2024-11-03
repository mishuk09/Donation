// src/UniversitySelector.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const UniversitySelector = () => {
    const [universities, setUniversities] = useState([]);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference for the dropdown container

    useEffect(() => {
        const fetchUniversities = async () => {
            setLoading(true);
            setError(''); // Reset error state
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/Hipo/university-domains-list/refs/heads/master/world_universities_and_domains.json'
                );
                setUniversities(response.data);
                setFilteredUniversities(response.data.slice(0, 6)); // Show first 6 initially
            } catch (error) {
                setError('Failed to load universities. Please try again later.');
                console.error('Error fetching universities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, []); // Ensure this runs only once

    const handleSelect = (university) => {
        setSelectedUniversity(university); // Set selected university
        setIsDropdownOpen(false); // Close dropdown
        setFilteredUniversities(universities.slice(0, 6)); // Reset filtered list
        setSearchTerm(''); // Reset search term
    };

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = universities.filter((uni) =>
            uni.name.toLowerCase().includes(term)
        );
        setFilteredUniversities(filtered.slice(0, 6));
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="university-sel">
            <div className="bg-white wel-back items-center text-center rounded-lg shadow-lg p-8">
                <h1 className="text-4xl welcome-font font-bold text-center mb-4">
                    Welcome to Our Donation Platform
                </h1>
                <p className="text-center text-white mb-6">Please select your university:</p>

                {loading && <p className="text-center text-gray-600">Loading universities...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="relative w-1/2 mx-auto" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="border border-gray-300 input-color rounded p-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {selectedUniversity ? selectedUniversity.name : 'Select a university...'}
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto shadow-lg">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    placeholder="Search for a university..."
                                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                                />
                                <ul className="max-h-48 overflow-y-auto">
                                    {filteredUniversities.map((uni) => (
                                        <li
                                            key={uni.name}
                                            onClick={() => handleSelect(uni)}
                                            className="p-2 cursor-pointer hover:bg-blue-100 text-gray-700"
                                        >
                                            {uni.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
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
