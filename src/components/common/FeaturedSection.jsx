import React, { useContext } from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import { FeaturedProperty } from "../../data/dummyData";
import { Store } from "../../context/store";
import LargeScreenWrapper from "../LargeScreenWrapper/LargeScreenWrapper";

const FeaturedSection = () => {
  const { state, dispatch } = useContext(Store);
  const featuredProperties = state.featuredProperties;

  return (
    <div className="flex flex-col justify-between align-center mt-5 mb-5 sma3:pl-6">
      <h1 className="justify-center items-center mx-auto text-[30px] font-bold mb-2">
        Discover Our Featured Listings
      </h1>
      <p className="justify-center items-center mx-auto text-[15px] font-light mb-5 sma3:justify-between sma3:mx-0 md:mx-auto">
        We'll help you find your perfect home
      </p>
      {console.log(featuredProperties)}
      <div className="mt-5 mb-5 mx-5 flex flex-row gap-15 justify-center sma2:mx-0  xla:w-[94%] xla:mx-auto 2xla:w-[80%] 2xla:mx-auto">
        <div className="w-[80%] flex justify-center items-center gap-10 sma3:flex sma3:flex-col sma2:w-[100%] sma2:mr-6 md:flex-row md:w-[95%] md:mx-auto lg:w-[96%] xla:p-0 xla:mr-2 xla:w-[100%] ">
          {featuredProperties &&
            featuredProperties.map((item) => {
              return (
                <FeaturedPropertyCard
                  propIds={item._id}
                  location={item?.locationAndAddress?.location}
                  bedRoom={item?.propertyDetails?.bedRooms}
                  bathRoom={item.propertyDetails.bathRooms}
                  name={item.propertyDetails.title}
                  area={item.propertyDetails.areaSquare}
                  postedby={item.contactDetails?.email}
                  image={item.upload.images}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

// import React from 'react';
// import FeaturedPropertyCard from './FeaturedPropertyCard';
// import { FeaturedProperty } from '../../data/dummyData';
// import { useContext } from 'react';
// import { Store } from '../../context/store';

// const FeaturedSection = () => {

//   const {featuredProperties} = useContext(Store);
//   console.log(featuredProperties, "featuredddd??")
//   return (
//     <div className='flex flex-col justify-between align-center mt-5 mb-5'>
//       <h1 className='justify-center items-center mx-auto text-[30px] font-bold mb-2'>Discover Our Featured Listings</h1>
//       <p className='justify-center items-center mx-auto text-[15px] font-light mb-5'>We'll help you find your perfect home</p>
//     <div className='mt-5 mb-5 mx-5 flex flex-row gap-15 justify-center'>
//         <div className='w-[60%] flex justify-between gap-10'>
//     {FeaturedProperty.map((item)=>(<FeaturedPropertyCard key={item.id} name={item.name} location={item.location} price={item.price}
//     status={item.status} number_of_beds={item.number_of_beds} number_of_bathrooms={item.number_of_bathrooms} area = {item.area} image = {item.image} category={item.category} postedby={item.postedby}
//     />))}
//     </div>
//     </div>
//     </div>
//   )
// }

// export default FeaturedSection
