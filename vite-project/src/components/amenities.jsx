import React from "react";
import Road from "../assets/road-marking (2).gif";
import StreetLigh from "../assets/street-light_8727485.gif";
import Arch from "../assets/arch_9284523.gif";
import UndergroundElectricity from "../assets/geothermal_18454477.gif";

function Amenities() {
  return (
    <>
      <div className="pt-0">
        <h1 className="font-bold pb-14 text-4xl md:text-5xl text-black drop-shadow-lg text-center w-full">
          Amenities
        </h1>
        <div className="  bg-gradient-to-r justify-center from-[#ffffff] to-[#ffffff] w-full min-h- flex flex-col md:flex-row p-0">

          <div className="pb-10 card-container bg-[#ffffff] w-full md:w-[67%] flex justify-center items-center rounded-xl ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full m">
              {[
                { name: "A Wide Black Top Road", image: Road },
                {
                  name: "Individual Water Connection",
                  image:
                    "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/sink.gif",
                },
                {
                  name: "CCTV Surveillance",
                  image:
                    "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/camera.gif",
                },
                {
                  name: "Play Area",
                  image:
                    "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/seesaw_13936783.gif",
                },
                {
                  name: "Park",
                  image:
                    "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/prairie_14263799.gif",
                },
                { name: "Street Lights", image: StreetLigh },
                {
                  name: "Sewage Line",
                  image:
                    "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/waste.gif",
                },
                { name: "Arch", image: Arch },
                {
                  name: "Electrical Supply Lines ",
                  image:
                    "https://defencehabitat-tapasihalli.defencehousingsociety.com/assets/img/animationIcons/electric-tower.gif",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-7 shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 justify-center flex m-auto h-24 object-cover rounded-t-xl"
                  />
                  <h4 className="text-center text-black text-lg md:text-xl py-3 font-semibold">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amenities;

