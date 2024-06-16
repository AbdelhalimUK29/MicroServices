import React from 'react'
import HeroImage from "../Assets/Hero.jpg"

const Hero = () => {
  return (
    <div className='relative '>
  
    <section style={{backgroundImage:`url(${HeroImage})`}}
      className={` relative 
      bg-cover bg-center bg-no-repeat`}
    >
      <div
        className="absolute inset-0  sm:bg-transparent sm:from-white/95
        sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>
    
      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6
         lg:flex lg:h-screen lg:items-center lg:px-8 text-white"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-white font-mono font-extrabold sm:text-5xl"
          data-aos='zoom-out'
          data-aos-duration='500'
          data-aos-once='true'>
            Let us find your
            <span className="block font-extrabold text-[#193BAA] "> Perfect Book. </span>
          </h1>
    
          <p className="mt-4 max-w-lg sm:text-xl/relaxed"
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='100'>
            with us you will find your perfect choice just try you will never regret   
          </p>
    
          <div className="mt-8 flex justify-center gap-4 text-center "
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='300'
          >
            <button
              
              className=" w-full  rounded-full bg-gradient-to-r
              from-gray-500 to-gray-700
               px-12 py-3 text-sm font-medium text-black 
               sm:scale-105
                shadow  sm:w-auto hover:from-[#193BAA]/40 hover:to-[#193BAA]"
                
            >
              Get Started
            </button>
            
          </div>
        </div>
      </div>
    </section>
    
           
      </div>
  )
}

export default Hero