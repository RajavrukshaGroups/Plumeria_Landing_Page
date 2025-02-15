
import React from "react";
import Road from "../assets/road-marking (2).gif"
import StreetLigh from "../assets/street-light_8727485.gif"
import Arch from "../assets/arch_9284523.gif"
import UndergroundElectricity from "../assets/geothermal_18454477.gif"
function Amenities() {
  return (
    <>
    <h1 className="font-extrabold text-4xl md:text-6xl text-[#004236] drop-shadow-lg text-center w-full">premium amenities</h1>
    <div className="bg-gradient-to-r justify-center from-[#ffffff] to-[#ffffff] w-full min-h-screen flex flex-col md:flex-row p-0">
      {/* Left Section - Amenities Count */}
      {/* <div className="amenities-count border-4 mt-5 mb-5 bg-white w-full md:w-[40%] flex flex-col justify-center items-center py-10 rounded-xl shadow-2xl">
        <div className=" border-l-9 border-r-0 padding-l  flex flex-col justify-center items-center w-full h-96 p-6 text-center rounded-lg">
        <h1 className="font-extrabold text-6xl md:text-8xl text-[#004236] drop-shadow-lg">10+</h1>
          <h3 className="font-bold text-3xl md:text-5xl text-gray-700">Premium</h3>
          <h3 className="font-bold text-3xl md:text-5xl text-gray-700">Amenities</h3>
          </div>
          </div> */}
      {/* Right Section - Amenities Cards */}
      <div className="card-container  bg-[#ffffff] w-full md:w-[80%] flex justify-center items-center p-10 rounded-xl shadow-xl ">
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 w-full m">
          {[
            { name: "A Wide Black Top Road", image:Road },
            { name: "Individual Water Connection", image: "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/sink.gif" },
            { name: "CCTV Surveillance", image: "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/camera.gif" },
            { name: "Play Area", image: "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/seesaw_13936783.gif" },
            { name: "Park", image: "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/prairie_14263799.gif" },
            { name: "Street Lights", image: StreetLigh },
            { name: "Sewage Line", image: "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/waste.gif" },
            { name: "Arch", image:Arch },
            { name: "Electrical Supply Lines ", image:'https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/electric-tower.gif' },
          ].map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-xl p-7 shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
              <img src={item.image} alt={item.name} className="w-30 justify-center flex m-auto h-36 object-cover rounded-t-xl" />
              <h4 className="bg-gray-700 text-center text-white text-lg md:text-xl py-3 font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>

     <img className="justify-center flex m-auto p-24 border-green-300" src="https://rajavrukshagroup.in/static/media/plumeria_map.92935af996b62064f6c7.jpg" alt="" />
          </>
  );
}

export default Amenities;
