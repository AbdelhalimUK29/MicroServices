import React from 'react'

const Banner = () => {
  return (
    


<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mb-10">
   <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road"/>
    </div>
    
    <div
        className="max-w-lg bg-white lg:max-w-xl lg:z-10 lg:shadow-lg lg:absolute md:-top-12 md:mt-10 lg:w-3/9 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-[#193BAA] lg:text-4xl">Winding Mountain Road</h2>
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            
            <div className="mt-8">
                <a href="#"
                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-[#007bff] border-solid border-2 border-gray-600 py-4 px-10 hover:bg-[#193BAA] hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
        
    </div>
    

</div>
  )
}

export default Banner