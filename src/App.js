// import React from 'react';
// import AboutSection from './components/AboutSection';
// import SupportSection from './components/SupportSection';

// function App() {
//   return (
//     <div className="min-h-screen relative flex flex-col">
//       <div
//         className="relative bg-cover bg-center h-[400px]"
//         style={{
//           backgroundImage: "url('https://media.istockphoto.com/id/1211101154/photo/a-refugee-homeless-child-standing-in-a-dark-room-with-sad-expression.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Qz5QBt1lTLrsjAcMnJ5vTG0UGOx2jSL7NUYTEEbw0=')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">University Name</h1> {/* Replace with dynamic university name */}
//         </div>
//       </div>

//       <div className="flex-grow mt-[-200px] relative flex items-center justify-center p-4">
//         <div className="main-div shadow-lg overflow-hidden flex gap-4 flex-col md:flex-row max-w-6xl w-full">
//           <AboutSection />
//           <SupportSection />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UniversityDetails from './components/UniversityDetails'; // Import the new component

import UniversitySelector from './components/University/UniversitySelector';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative flex flex-col">
        <Routes>
          <Route path="/" element={<MainPage />} />
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

