
import React from "react";

function Amenities() {
  return (
    <div className="bg-gradient-to-r from-[#004236] to-[#004236] w-full min-h-screen flex flex-col md:flex-row p-6">
      {/* Left Section - Amenities Count */}
      <div className="amenities-count border-4 mt-5 mb-5 bg-white w-full md:w-[40%] flex flex-col justify-center items-center py-10 rounded-xl shadow-2xl">
        <div className=" border-l-9 border-r-0 padding-l  flex flex-col justify-center items-center w-full h-96 p-6 text-center rounded-lg">
          <h1 className="font-extrabold text-6xl md:text-8xl text-[#004236] drop-shadow-lg">10+</h1>
          <h3 className="font-bold text-3xl md:text-5xl text-gray-700">Premium</h3>
          <h3 className="font-bold text-3xl md:text-5xl text-gray-700">Amenities</h3>
        </div>
      </div>

      {/* Right Section - Amenities Cards */}
      <div className="card-container bg-[#004236] w-full md:w-[60%] flex justify-center items-center p-6 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {[
            { name: "A Wide Black Top Road", image: "https://cdn-icons-png.flaticon.com/512/2554/2554922.png" },
            { name: "Individual Water Connection", image: "https://cdn-icons-png.flaticon.com/512/12029/12029553.png" },
            { name: "CCTV Surveillance", image: "https://cdn-icons-png.flaticon.com/512/2642/2642715.png" },
            { name: "Play Area", image: "https://cdn-icons-png.flaticon.com/512/6429/6429547.png" },
            { name: "Park", image: "https://cdn-icons-png.flaticon.com/512/2169/2169407.png" },
            { name: "Street Lights", image: "https://cdn-icons-png.flaticon.com/512/829/829252.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={item.image} alt={item.name} className="w-30 justify-center flex m-auto h-36 object-cover rounded-t-xl" />
              <h4 className="bg-orange-300 text-center text-white text-lg md:text-xl py-3 font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;
