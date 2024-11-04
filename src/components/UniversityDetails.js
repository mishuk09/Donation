// src/components/UniversityDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AboutSection from './AboutSection';
import SupportSection from './SupportSection';

const UniversityDetails = () => {
    const { domain } = useParams();
    const [university, setUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUniversityDetails = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/Hipo/university-domains-list/refs/heads/master/world_universities_and_domains.json'
                );
                const university = response.data.find(uni => uni.domains.includes(domain));
                setUniversity(university);
            } catch (error) {
                setError('Failed to load university details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUniversityDetails();
    }, [domain]);

    if (loading) return <p>Loading university details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className=" bg-gray-200">
            {/* <div>


                {university ? (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-4">{university.name}</h1>
                        <p className="text-lg">Country: {university.country}</p>
                        <p className="text-lg">Domain: {university.domains[0]}</p>
                        <a
                            href={`http://${university.domains[0]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline mt-4 block"
                        >
                            Visit University Website
                        </a>
                    </div>
                ) : (
                    <p>University details not found.</p>
                )}
            </div> */}
            <div>
                <div className="min-h-screen relative flex flex-col">
                    <div
                        className="relative   text-center items-center justify-center bg-cover bg-center h-[350px]"
                        style={{
                            backgroundImage: "url('https://media.istockphoto.com/id/1211101154/photo/a-refugee-homeless-child-standing-in-a-dark-room-with-sad-expression.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Qz5QBt1lTLrsjAcMnJ5vTG0UGOx2jSL7NUYTEEbw0=')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="absolute inset-0 mt-[100px] mx-auto text-center items-center  w-1/2  justify-center">
                            <h1 className="text-white text-4xl font-bold">{university.name}</h1>
                            <p className="text-lg text-white mt-2">  {university.country}</p>
                            <a
                                href={`http://${university.domains[0]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-1 block"
                            >
                                Visit University Website
                            </a>
                        </div>
                    </div>


                    <div className="flex-grow  mt-[-100px]   relative flex items-center justify-center p-4">
                        <div className="main-div   overflow-hidden flex gap-4 flex-col md:flex-row max-w-5xl w-full">
                            <AboutSection />
                            <SupportSection />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UniversityDetails;
