import React from 'react'

function ThisIsWhatWeDo() {
      // Define this at the top of your component or import from a file
    const technologiesMobile = [
      {
        title: "IT Infrastructure & Networking",
        desc: "Reliable, secure, and high-performing IT setups.",
        bg: "#7DBB42",
        number: "01"
      },
      {
        title: "AI Based Automation",
        desc: "Optimizing business processes with AI-driven automation.",
        bg: "#2DA0D9",
        number: "02"
      },
      {
        title: "Cloud Solutions",
        desc: "Migration, deployment, and cloud management on AWS, Azure, and hybrid platforms.",
        bg: "#F04F24",
        number: "03"
      },
      {
        title: "Cybersecurity & Compliance",
        desc: "Advanced firewall security, data protection, and threat detection.",
        bg: "#2DA0D9",
        number: "04"
      },
      {
        title: "IT Consulting & Support",
        desc: "Strategic IT guidance and 24/7 enterprise support.",
        bg: "#F04F24",
        number: "05"
      },
      {
        title: "Software Development & Integration",
        desc: "Custom-built business applications & seamless software integration.",
        bg: "#2DA0D9",
        number: "06"
      },
      {
        title: "Branding Design",
        desc: "Extraordinary Branding design for an extraordinary Brand value.",
        bg: "#7DBB42",
        number: "07"
      },
    ];
    
  return (
   <>
   <div className="w-full  hidden gap-0 lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 sm:mt-12  text-white">

  <div className="h-auto sm:h-[25vh] md:h-[30vh] lg:h-[45vh] text-[#464646] rounded-br-3xl text-center font-bold sm:font-semibold text-[2rem] sm:text-6xl flex items-center justify-center p-6">
    This is What we do?
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] pl-3.5 pr-2 py-4 rounded-tl-2xl font-semibold text-start relative">
    <div className="bg-[#7DBB42] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold">01.</h3>
      <div>
        <p className=" text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">IT Infrastructure & Networking</p>
        <p className="text-sm xl:text-lg md:text-2xl lg:text-sm font-normal mt-1.5 mb-3">Reliable, secure, and high-performing IT setups.</p>
      </div>
       {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#2DA0D9] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">02.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">AI Based Automation</p>
        <p className="text-sm xl:text-lg font-normal mt-1.5 mb-4">Optimizing business processes with AI-driven automation.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 rounded-tr-2xl font-semibold text-start relative">
    <div className="bg-[#F04F24] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">03.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">Cloud Solutions</p>
        <p className="text-sm xl:text-lg font-normal mt-1.5 mb-4">Migration, deployment, and cloud management on AWS, Azure, and hybrid platforms.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 rounded-tl-2xl rounded-bl-2xl  font-semibold text-start relative">
    <div className="bg-[#2DA0D9] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">04.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-2.5">Cybersecurity & Compliance</p>
        <p className="text-sm xl:text-lg font-normal mt-1 mb-2">Advanced firewall security, data protection, and threat detection.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#F04F24] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">05.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">IT Consulting & Support</p>
        <p className="text-sm xl:text-lg font-normal mt-1.5 mb-2">Strategic IT guidance and 24/7 enterprise support.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#2DA0D9] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">06.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">Software Development & Integration</p>
        <p className="text-sm xl:text-lg font-normal relative bottom-0 mb-2">Custom-built business applications & seamless software integration.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

  <div className="bg-[#464646] h-auto sm:h-[25vh] lg:rounded-br-2xl md:h-[30vh] lg:h-[50vh] xl:h-[45vh] px-2 py-4 font-semibold text-start relative">
    <div className="bg-[#7DBB42] rounded-3xl p-4 h-full flex flex-col justify-between">
      <h3 className="text-2xl sm:text-3xl xl:text-4xl  font-bold">07.</h3>
      <div>
        <p className="text-lg md:text-3xl lg:text-lg xl:text-3xl font-semibold mt-3.5">Branding Design</p>
        <p className="text-sm xl:text-lg font-normal relative bottom-0 mb-3">Extraordinary Branding design for an extraordinary Brand value.</p>
      </div>
          {/* Small "Know More" btn */}
      <a
        href="#"
        className="absolute bottom-6 right-8 flex items-center group text-[.8rem] font-light hover:font-extrabold "
      >
        <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
        <span className="transition-all duration-300 group-hover:translate-x-2">
          Know More
        </span>
      </a>
    </div>
  </div>

</div>
{/* Mobile Layout Carousel */}
<div className="w-full mt-24 lg:hidden">
  {/* Heading */}
  <div className="text-3xl font-bold text-[#464646] text-center mb-6">
    This is What we do?
  </div>

  {/* Horizontal scroll container */}
  <div className="flex overflow-x-auto space-x-4 pr-4  snap-x snap-mandatory scroll-smooth">
    {technologiesMobile.map((tech, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 w-[80%] sm:w-[70%] sm:min-h-[25vh] lg:hidden bg-[#464646] text-white rounded-3xl p-4 snap-start"
      >
        <div className={`rounded-3xl p-4 h-full flex flex-col justify-between bg-[${tech.bg}]`}>
          <h3 className="text-2xl font-bold">{`0${idx + 1}.`}</h3>
          <div>
            <p className="text-lg font-semibold mt-3.5">{tech.title}</p>
            <p className="text-sm font-normal mt-1.5">{tech.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div></>
  )
}

export default ThisIsWhatWeDo;