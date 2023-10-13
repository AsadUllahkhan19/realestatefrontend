import React from 'react';
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { property } from '../../data/dummyData';

const SearchBar = () => {
    console.log(property);
  return (
    <div className="md:max-w-[90%] w-full mx-auto relative">
      <div className="flex-col bg-white gap-x-4 flex-center-between md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        {/* <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0"> */}
        <div className="flex flex-1 w-auto gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter location of the property"
              />
            </div>
        <button className="w-full hover:bg-yellow-400 btn bg-yellow-500 sm:w-fit text-white font-semibold">search</button>
    </div>
    </div>
  )
}

export default SearchBar