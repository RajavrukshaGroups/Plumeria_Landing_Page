import React from 'react'
import { Plane, MapPin, Building2, GraduationCap, Factory, LandPlot, Hospital, Mountain } from "lucide-react"

function Highlights() {
//   return (
    // <div>

{/* export default function KeyHighlights() { */}
  const highlights = [
    {
      icon: <Plane className="w-8 h-8 text-[#C5A572]" />,
      title: "Proximity to KIAL",
      description:
        "Doddaballapura is located close to the Kempegowda International Airport, which makes it an attractive location for real estate investors",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#C5A572]" />,
      title: "Good connectivity",
      description:
        "Doddaballapura is well connected to the rest of the city through STRR, upcoming Metro rail connectivity and Sub-Urban Railway network enhancing the value of the real estate in the region.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#C5A572]" />,
      title: "Growing ITIR/SEZ sector",
      description:
        "Doddaballapura is home to many IT-ITeS parks, SEZs, and business centers, which has led to a growing IT-ITES sector in the area. This provides employment opportunities and increases demand for residential properties in the region.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#C5A572]" />,
      title: "Educational Institutions",
      description:
        "Doddaballapura has several educational institutions, including prestigious engineering and management colleges, which attract students from across the country",
    },
    {
      icon: <Factory className="w-8 h-8 text-[#C5A572]" />,
      title: "Presence of KIADB industrial clusters",
      description:
        "Doddaballapura is home to several industrial clusters, including those related to automobile and Apparel park, etc.,",
    },
    {
      icon: <LandPlot className="w-8 h-8 text-[#C5A572]" />,
      title: "Government initiatives",
      description:
        "The Karnataka government has launched several initiatives to improve the infrastructure in North Bengaluru, especially in Doddaballapura region such as the development of the KHIR city project and the extension of the metro rail network",
    },
    {
      icon: <Hospital className="w-8 h-8 text-[#C5A572]" />,
      title: "Healthcare services are well-established.",
      description: "North Bengaluru is enriched with numerous multi-specialty hospitals providing excellent services.",
    },
    {
      icon: <Mountain className="w-8 h-8 text-[#C5A572]" />,
      title: "Tourism potential",
      description:
        "North Bengaluru has several tourist attractions, such as the historic Ghati Subramanya temple and the upcoming ropeway to Nandi Hills, which could be developed further to attract more tourists.",
    },
  ]

  return (
    <div className="p-8 bg-white bg-[url('')] bg-cover">
      <h2 className="text-center text-4xl font-bold mb-12">
        <span className="text-[#C5A572]">OTHER </span>
        <span className="text-[#1B4D3E]">KEY HIGHLIGHTS</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="p-6 border border-dashed border-gray-300 bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center mb-4">{item.icon}</div>
            <h3 className="text-[#1B4D3E] text-xl font-bold text-center mb-3">{item.title}</h3>
            <p className="text-gray-700 text-center text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    // </div>
  )
}

export default Highlights
