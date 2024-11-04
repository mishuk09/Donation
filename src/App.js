import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UniversityDetails from './components/UniversityDetails'; // Import the new component

import UniversitySelector from './components/University/UniversitySelector';
import UploadJSON from './components/UploadJSON';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative flex flex-col">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload-json" element={<UploadJSON />} />
          <Route path="/display-json" element={<DisplayData />} />
          <Route path="/university/:domain" element={<UniversityDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" university-sel h-full overflow-hidden flex gap-4 flex-col md:flex-row  w-full items-center justify-center">

        <UniversitySelector />
      </div>
    </div>


  );
}

export default App;

