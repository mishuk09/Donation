// src/components/University/UniversitySelector.js
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const UniversitySelector = () => {
    const [universities, setUniversities] = useState([]);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchUniversities = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/Hipo/university-domains-list/refs/heads/master/world_universities_and_domains.json'
                );
                setUniversities(response.data);
                setFilteredUniversities(response.data.slice(0, 6));
            } catch (error) {
                setError('Failed to load universities. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchUniversities();
    }, []);

    const handleSelect = (university) => {
        setIsDropdownOpen(false);
        setFilteredUniversities(universities.slice(0, 6));
        setSearchTerm('');
        // Navigate to UniversityDetails with the selected university's domain
        navigate(`/university/${university.domains[0]}`);
    };

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = universities.filter((uni) =>
            uni.name.toLowerCase().includes(term)
        );
        setFilteredUniversities(filtered.slice(0, 6));
    };

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
                            Select a university...
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
            </div>
        </div>
    );
};

export default UniversitySelector;
