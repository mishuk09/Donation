import React from 'react';
import AboutSection from './components/AboutSection';
import SupportSection from './components/SupportSection';

function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image with Fixed Height */}
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1211101154/photo/a-refugee-homeless-child-standing-in-a-dark-room-with-sad-expression.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Qz5QBt1lTLrsjAcMnJ5vTG0UGOx2jSL7NUYTEEbw0=')",
          backgroundSize: 'cover',  // Ensures the image covers the 500px height while maintaining aspect ratio
          backgroundPosition: 'center',  // Centers the image within the div
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="flex-grow mt-[-200px] relative flex items-center justify-center p-4">
        <div className="  main-div   shadow-lg overflow-hidden flex gap-4 flex-col md:flex-row max-w-6xl w-full">
          <AboutSection />
          <SupportSection />
        </div>
      </div>
    </div>
  );
}

export default App;
