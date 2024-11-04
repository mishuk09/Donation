// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_H-cLR-BDcOy2bDFtmPFifgzKI6TiAAg",
    authDomain: "donation-fd3dd.firebaseapp.com",
    projectId: "donation-fd3dd",
    storageBucket: "donation-fd3dd.firebasestorage.app",
    messagingSenderId: "865692038178",
    appId: "1:865692038178:web:7d99e8ec33fa89fd0f067b",
    measurementId: "G-4MX9HCGR2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function DisplayData() {
    const [data, setData] = useState([]); // State to hold the data

    // Function to fetch data from Firestore
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "your_collection_name")); // Replace with your collection name
            const documents = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(documents);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    // Fetch data when component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from Firestore</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <pre>{JSON.stringify(item, null, 2)}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayData;
