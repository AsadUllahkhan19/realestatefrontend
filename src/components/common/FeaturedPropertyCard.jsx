import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";
import { FaUser } from "react-icons/fa";

import React from "react";

const FeaturedPropertyCard = ({
  propIds,
  name,
  location,
  ms,
  area,
  bedRoom,
  bathRoom,
  postedby,
  image,
}) => {
  console.log("checking...", propIds);
  return (
    <div
      className={`flex-1 shadow-light border rounded-lg  relative max-w-screen-sm sma3:h-auto  `}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <Link to={`/property-information/${propIds}`} className="!opacity-100">
          <img
            src={`${process.env.REACT_APP_SERVERURL}/static/${image[0]}`}
            alt={name}
            className="w-full h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a sma3:h-[50%]"
          />
        </Link>
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <Link
          to={`/property-information/${propIds}`}
          className=" transition-a justify-center"
        >
          <h1 className="text-sm font-bold capitalize ">{name}</h1>
        </Link>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{bedRoom} Beds</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{bathRoom} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{area} square ft</p>
          </div>
        </div>
        <div>
          {/* <h3 className="text-gray-500 font-light ml-[5px] mt-3 mb-3 uppercase">{category}</h3> */}
        </div>
        <hr className="mt-5" />
        <div className="flex flex-row gap-2 mt-2">
          <FaUser />
          <Link to="/agentinformation">
            <p className="text-sm font-light">{postedby}</p>
          </Link>
        </div>

        {/* <div className="mt-4 flex-center-between">
        <h1 className="text-lg font-semibold text-primary">${price}</h1>
        <button className="btn btn-secondary">details</button>
      </div> */}
      </div>
    </div>
  );
};

export default FeaturedPropertyCard;
