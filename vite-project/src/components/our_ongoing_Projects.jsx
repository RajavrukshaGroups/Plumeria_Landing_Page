// import Image from "next/image"
import { MapPin } from "lucide-react"

export default function OngoingProjects() {
  return (
    <div className="relative w-full bg-[#004236] min-h-screen p-8">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32">
        {/* <img src="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Decorative leaf" width={128} height={128} className="opacity-50" /> */}
       </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-center font-serif text-[#004236] mb-12 bg-white/90 py-6 rounded-lg">
          Our Ongoing Projects
        </h2>

        {/* Projects grid */}
        <div className="relative border-4 border-[#B8860B] p-8 bg-[#004236] bg-opacity-95 bg-[url('/placeholder.svg')] bg-repeat">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="space-y-4">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <img
                  src="https://img.freepik.com/free-photo/aerial-view-various-sizes-green-fields_1268-15590.jpg?t=st=1739188558~exp=1739192158~hmac=ec09acb9c71e225f980377d6ab53a7478bbb0856f5415e27990e5b8ed45c71c4&w=1380"
                  alt="Sylvan Retreat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif italic text-4xl text-white">Sylvan Retreat</h3>
                <p className="text-white/80">Experience the Nature's Embrace</p>
                <div className="flex items-center gap-2 text-[#B8860B]">
                  <MapPin className="h-5 w-5" />
                  <span className="text-white">North Bangalore, Doddaballapura</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="space-y-4">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <img
                  src="https://img.freepik.com/free-photo/aerial-view-various-sizes-green-fields_1268-15590.jpg?t=st=1739188558~exp=1739192158~hmac=ec09acb9c71e225f980377d6ab53a7478bbb0856f5415e27990e5b8ed45c71c4&w=1380"
                  alt="ecoNest"
                  fill
                  className="object-cover"/>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif italic text-4xl text-white">ecoNest</h3>
                <div className="flex items-center gap-2 text-[#B8860B]">
                  <MapPin className="h-5 w-5" />
                  <span className="text-white">Coorg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

