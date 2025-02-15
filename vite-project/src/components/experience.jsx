// import Image from "next/image"
import { Users, Award, HandCoins } from "lucide-react";
import Logo from '../assets/Plumeria Logoblack.png';
import Group from '../assets/Group 4wf.png';
  function LandingPage () {

  return (
    <div className="min-h h-[770px] bg-gradient-to-br from-white to-gray-50 overflow-x-hidden  overflow-hidden">
      <div>
        <h1 className="pt-6 text-5xl font-bold text-black flex m-auto justify-center">Exclusive Premium Plots</h1>
        <p className="p-10 pl-[140px] pr-[140px] text-xl">Plumeria is a thoughtfully designed residential project that blends modern comfort with natural serenity. Nestled in a prime location, it offers residential plots, lush green surroundings, and amenities. Whether you're looking for a peaceful retreat or a vibrant community, Plumeria provides the perfect balance of luxury and tranquility, making it an ideal place to call home.</p>
      </div>
      {/* Main container */}
      <  div className="relative container mx-auto px-2 py-8 ">
        {/* Logo section */}
        <div className="absolute  right-16 md:top-16 md:right-60 w-40 md:w-72">
          <img style={{width:'240px',height:'98px', marginTop:'100px'}}
          src={Logo} 
            // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20094550-aygjxmvz2xshy0zZuZq7RBYZg1MnMq.png"
            // alt="Rajavruksha Realtors Logo"
            width={110}
            height={150}
            // className="w-full h-auto"
          />
        </div>
        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center pt-38">
          {/* Left side with image */}
          <div className="relative w-full h-[300px] md:h-[674px] rounded-2xl overflow-hidden">
            <img
              src={'https://norman-spencer.com/wp-content/uploads/2019/06/houseflip.jpg'}
              alt="Luxury Home"
              
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Right side content */}
          <div className="space-y-8">
            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center border-r-4 border-black">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-[#C4A052]" />
                </div>
                <div className="text-3xl font-bold text-[#1E4D3A]">
                  06<span className="text-[#C4A052]">+</span>
                </div>
                <p className="text-sm text-[#1E4D3A]">Years of Excellence</p>
              </div>

              <div className="text-center border-r-4 border-black">
                <div className="flex justify-center mb-2">
                  <HandCoins className="w-8 h-8 text-[#C4A052]" />
                </div>
                <div className="text-3xl font-bold text-[#1E4D3A]">
                  1000<span className="text-[#C4A052]">+</span>
                </div>
                <p className="text-sm text-[#1E4D3A]">Happy Customers</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-[#C4A052]" />
                </div>
                <div className="text-2xl font-bold text-[#1E4D3A]">Best</div>
                <p className="text-sm text-[#1E4D3A]">Quality Services</p>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              {/* <h1 className="text-4xl md:text-5xl font-bold text-[#1E4D3A]">Exclusive Premium Plots</h1> */}
              {/* <p className="text-xl md:text-2xl text-[#1E4D3A]">
                Explore Rajavruksha for Premium Residential Plots in North Bangalore.
              </p> */}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-32 h-32 bg-[#C4A052]/10 -z-10 transform -rotate-45"></div>
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#1E4D3A]/10 -z-10 transform rotate-45"></div>
      </div>
    </div>
  )
}

export default LandingPage