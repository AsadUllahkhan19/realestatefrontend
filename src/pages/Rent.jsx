import React, {useState} from 'react';
import { SinglePropertyCard } from '../components/common';
import { property } from "../data/dummyData";
import {BiMap} from "react-icons/bi";
import { useLocation, Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


const Rent = () => {
    const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const [filteredData, setFilteredData] = useState(property);

  const handleFilter = (event) =>{
    const selectedValue = event.target.value;

    let filteredProperty = property;

    if (selectedValue === '<14000000'){
      filteredProperty = property.filter((item)=>item.price < "14000000");
    }
    else if (selectedValue === '=14000000'){
      filteredProperty = property.filter((item)=>item.price === "14000000");
    }
    else if (selectedValue === '>14000000'){
       filteredProperty = property.filter((item)=>item.price > "14000000");
    }

    setFilteredData(filteredProperty);
  }

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
  }
  return (
    <div className='mt-[10vh]'>
      <div className="md:max-w-[90%] w-full mx-auto relative sm:mt-[25px] md:mt-[15px]">
      <div className="flex-col bg-white gap-x-4 flex-center-between md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex flex-1 w-auto gap-x-2">
              <BiMap />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                onChange={handleFilter}
              >
                <option value="<1400000">Less than 14,000,000 AED</option>
                <option value="=1400000">Equal to 14,000,000 AED</option>
                <option value=">14000000">Greater than 14,000,000 AED</option>
              </select>
            </div>
        <button className="w-full hover:bg-yellow-400 btn bg-yellow-500 sm:w-fit text-white font-semibold">search</button>
    </div>
    </div>
    <p className='sm:ml-[5px] lg:ml-[70px] mt-[20px]'>
      <Link to="/">Home/</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}>{name}</span>
        ) : (
          <>
            <span> &gt; </span>
            <Link key={name} to={routeTo}>
              {name}
            </Link>
          </>
        );
      })}
    </p>
    <h1 className='sm:ml-[5px] lg:ml-[70px] mt-[5px] text-lg font-bold'> {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}>{name}</span>
        ) : (
          <>
            <span> &gt; </span>
            <Link key={name} to={routeTo}>
              {name}
            </Link>
          </>
        );
      })}</h1>
    <div className='justify-center flex-align-center mt-5 mb-2'>
                    <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center p-1'>
                        <input
                            type='checkbox'
                            className='sr-only'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span
                            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] pr-[50px] text-lg font-medium ${!isChecked ? 'text-primary bg-ordinary' : 'text-body-color'
                                }`}
                        >
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                className='mr-[6px] fill-current'
                            >
                                <g clipPath='url(#clip0_3122_652)'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'

                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id='clip0_3122_652'>
                                        <rect width='16' height='16' fill='white'></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            All
                        </span>
                        <span
                            className={`flex items-center space-x-[6px] rounded py-2 px-[15px] pr-[50px] text-lg font-medium ${isChecked ? 'text-primary bg-ordinary' : 'text-body-color'
                                }`}
                        >
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                className='mr-[6px] fill-current'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                            Buy
                        </span>
                    </label>
                </div>
      <div className='grid lg:grid-cols-4 gap-4 mt-[2vh] md:ml-[10vh] md:mr-[10vh]'>
      <div className='grid lg:grid-cols-2 sm:row-span-1 lg:col-span-3'>
    {filteredData.map((item) => ( 
    <div className='lg:col-span-1 sm:row-span-1 md:w-4/5 pb-7'>
      <SinglePropertyCard key={item.id} name={item.name} location={item.location} price={item.price} distance={item.distance} purpose={item.purpose} number_of_bathrooms={item.number_of_beds} dimensions={item.dimensions} image={item.image} />
      </div>
    ))}
    </div>
    <div className='grid grid-rows-4 grid-flow-col gap-4 md:col-span-1 sm:row-span-1'>
      <div className='card card-shadow'>
              <h1 className='text-[20px] font-light text-black mb-5'>Property Type</h1>
              <div className='flex gap-2 mb-2'>
                <IoIosArrowForward/>
                <p>RESIDENTIAL</p>
              </div>
              <div className='flex gap-2 mb-2 ml-5'>
                <IoIosArrowForward/>
                <p>Appartment</p>
              </div>
              <div className='flex gap-2 mb-2 ml-5'>
                <IoIosArrowForward/>
                <p>Villa</p>
              </div>
      </div>
      <div className='card card-shadow'>
              <h1 className='text-[20px] font-light text-black mb-5'>Cities</h1>
              <div className='flex gap-2 mb-2'>
                <IoIosArrowForward/>
                <p>DIP</p>
              </div>
              <div className='flex gap-2 mb-2 ml-5'>
                <IoIosArrowForward/>
                <p>Marina</p>
              </div>
              <div className='flex gap-2 mb-2 ml-5'>
                <IoIosArrowForward/>
                <p>Al Jaddaf</p>
              </div>
              <div className='flex gap-2 mb-2 ml-5'>
                <IoIosArrowForward/>
                <p>Palm Jumeirah</p>
              </div>
              <div className='flex gap-2 mb-2 ml-5'>
                <IoIosArrowForward/>
                <p>Jumeirah Village Circle</p>
              </div>
      </div>
      <div></div>
    </div>
  </div> 
  </div> 
  )
}

export default Rent