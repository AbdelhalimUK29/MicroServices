import React from 'react'

const SearchBar = ({change,filter}) => {
    
    
  return (
    <div className="mb-10 w-screen max-w-screen-md">

  <div className="flex flex-col">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <form className="">
        <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
          <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input type="name" name="name" className="h-12 w-full cursor-text rounded-md border
           border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm 
           outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
           placeholder="Search by name ...." onChange={change}/>
        </div>
         <div className='md:flex items-center '>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col ">
            <label htmlFor="manufacturer" className="text-sm font-medium text-stone-600">Price</label>

            <select id="manufacturer" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm
             outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
             onChange={change} name='price' placeholder="Select Price">
              <option value=""></option>
              <option value="200">200$</option>
              <option value="300">300$</option>
              <option value="500">500$</option>
            </select>
          </div> 

          <div className="flex flex-col ">
            <label htmlFor="manufacturer" className="text-sm font-medium text-stone-600">Category</label>

            <select id="manufacturer" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Select Category">
              <option >{null}</option>
              <option >Fantasy</option>
              <option>Classic</option>
              <option>Modern</option>
            </select>
          </div> 
        </div>
        <div className="mt-6">
          <button type="button" className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
          onClick={filter}>Search</button>
        </div>
        </div>
      </form>
    </div>
  </div>
  
</div>

  )
}

export default SearchBar