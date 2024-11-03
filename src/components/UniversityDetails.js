import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UniversityDetails = () => {
    const { domain } = useParams();
    const [university, setUniversity] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
                const data = await response.json();
                const filteredUniversity = data.find((uni) => uni.domains.includes(domain));
                setUniversity(filteredUniversity);
            } catch (error) {
                console.error('Error fetching university data:', error);
            }
        };

        fetchData();
    }, [domain]);

    if (!university) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{university.name}</h2>
            {/* <p className="text-gray-700 mb-4">Country: {university.country}</p>
            <p className="text-gray-700 mb-4">State/Province: {university['state-province'] || 'N/A'}</p>
            <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Visit University Website
            </a> */}
        </div>
    );
};

export default UniversityDetails;
