import React from "react";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const ListPropertyCard = ({
  name,
  location,
  propIds,
  price,
  status,
  number_of_beds,
  number_of_bathrooms,
  desc,
  area,
  image,
  category,
}) => {
  return (
    <div className="relative grid grid-cols-1 gap-3 mt-3 overflow-hidden border rounded-lg shadow-light sm:grid-cols-3 group">
      <div className="sm:col-span-1">
        <div className="group !opacity-100 overflow-hidden relative h-[300px]">
          <Link
            to={`/property-information/${propIds}`}
            className="!opacity-100"
          >
            <img
              src={`${process.env.REACT_APP_SERVERURL}/static/${image}`}
              alt={name}
              className="object-cover w-full h-full group-hover:scale-125 transition-a"
            />
          </Link>
          <CardHoverIcons />
          <CardLabels status={status} price={price} />
        </div>
      </div>
      <div className="sm:col-span-2 ">
        <div className="p-3">
          <Link to="/" className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">{name}</h1>
          </Link>

          <div className="mt-2 flex-align-center gap-x-2">
            <BiMap />
            <p>{location.address}</p>
          </div>
          <p className="mt-2">{desc}</p>
          <div className="flex justify-between mt-3">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiBed />
              </div>
              <p className="text-sm">{number_of_beds} Beds</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiTab />
              </div>
              <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiMapAlt />
              </div>
              <p className="text-sm">{category}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[2rem] col-span-3 mt-10 mb-5">
            <button className="btn !rounded-[2px] text-white bg-footer3 !py-2">
              Payment Plan
            </button>
            <button className="btn !rounded-[2px] text-white bg-footer3">
              Enquire
            </button>
            <button className="btn !rounded-[2px] text-white bg-green-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPropertyCard;
