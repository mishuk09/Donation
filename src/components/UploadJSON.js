// Import necessary libraries
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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

function UploadJSON() {
    // Function to handle file upload
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/json') {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const jsonData = JSON.parse(e.target.result);
                await storeDataInFirestore(jsonData);
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid JSON file.');
        }
    };

    // Function to store JSON data in Firestore
    const storeDataInFirestore = async (data) => {
        try {
            const collectionRef = collection(db, "university-list"); // Change to your desired collection name

            // Assuming `data` is an array of objects
            for (const item of data) {
                const docRef = await addDoc(collectionRef, item);
                console.log("Document written with ID: ", docRef.id);
            }
            alert("Data uploaded successfully!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error adding document: " + error);
        }
    };

    return (
        <div>
            <h1>Upload JSON to Firestore</h1>
            <input type="file" accept=".json" onChange={handleFileUpload} />
        </div>
    );
}

export default UploadJSON;
