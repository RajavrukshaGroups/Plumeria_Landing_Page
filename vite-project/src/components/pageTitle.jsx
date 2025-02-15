
import React, { useState, useEffect } from 'react';
//two accres 10 amenities icons
function PageTitle() {
  const backgroundImages = [
    "https://rajavrukshagroup.in/static/media/plumeria3.d3e30498455e6345f641.webp",
    "https://rajavrukshagroup.in/static/media/plumeria1.97cb4630d67f86305533.webp"
  ];

  const logoImages = [
    "https://rajavrukshagroup.in/static/media/Plumeria_Kannada_Logo.33c6f842193afe8ac5b9.png",
    "https://rajavrukshagroup.in/static/media/Plumeria_upd_new_logo.678a48f9727f1b10f238.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className='w-full h-[450px] flex justify-center items-center mt-auto bg-cover bg-center transition-all duration-1000'
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
      >
        <img
          className='w-[30rem] flex p-16 pb-2 mb-11 justify-center m-auto'
          src={logoImages[currentIndex]}
          alt="Plumeria Logo"
        />
      </div>
    </div>
  );
}

export default PageTitle;
