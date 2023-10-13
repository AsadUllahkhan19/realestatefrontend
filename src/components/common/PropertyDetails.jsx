import React, { useState, useEffect } from "react";
import Message from "./Message";
import marker from "../../assets/icons/mapIcon.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import { IoIosCalendar } from "react-icons/io";
import PieChart from "./PieChart";
import ScheduleTour from "./ScheduleTour";

import {
  FaBed,
  FaBath,
  FaCheck,
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaBuilding,
  FaParking,
  FaSchool,
  FaBug,
  FaBaby,
  FaDog,
  FaHotel,
  FaPray,
  FaCamera,
  FaAddressBook,
  FaHandsWash,
  FaBatteryQuarter,
} from "react-icons/fa";

const featureIcons = {
  Garden: FaSwimmingPool,
  Jacuzzi: FaWifi,
  "Laundry Facility": FaWifi,
  completionYear: FaCar,
  totalFloors: FaSwimmingPool,
  mainFeatures: FaBath,
  landArea: FaSwimmingPool,
  nearbyHospitals: FaBed,
  distance: FaCar,
  otherNearbyPlaces: FaBath,
  view: FaWifi,
  petPolicy: FaDog,
  Furnished: FaBath,
  elevatorBuilding: FaBed,
  otherRooms: FaBed,
  facilities: FaCar,
  nearbySchool: FaBuilding,
  nearbyMalls: FaParking,
  nearbyTransport: FaCar,
  parkingSpaces: FaBuilding,
  floor: FaSwimmingPool,
  "Lanudry Room": FaSchool,
  "Business Center": FaBug,
  "Storage Areas": FaBaby,
  "Cafeteria or Canteen": FaHotel,
  "Prayer Room": FaPray,
  Intercom: FaCamera,
  "Cleaning Services": FaAddressBook,
  Sauna: FaHandsWash,
  "Balcony or Terrace": FaBatteryQuarter,
};

const PropertyDetails = ({
  location,
  title,
  updatedAt,
  price,
  status,
  number_of_beds,
  number_of_bathrooms,
  number_of_garage,
  area,
  aracbiDescription,
  description,
  category,
  parkingSpace,
  features,
  listingOwner,
  contactPerson,
  email,
  phone,
}) => {
  const position = [location?.longitude || 51.505, location?.latitude || -0.09];
  const [language, setLanguage] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const chartData = {
    width: 500,
    height: 400,
    labels: [
      "Principal & Interest   --- AED-166,88.00",
      "Property Tax  --- AED250.00",
      "Home Insurance --- AED83.33",
      "PMI --- AED1,000.00",
    ],
    series: [99, 10, 4, 5],
  };

  // Map Custom Icon
  const iconPerson = new L.Icon({
    iconUrl: marker,
    iconSize: [64, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  // Map Recenter Function
  const RecenterAutomatically = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(position);
    }, position);
    return null;
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className=" px-[3%] md:px-[6%] mt-[2vh] bg-ordinary grid lg:grid-cols-4 gap-3 sm:grid-row-2">
      <div className="bg-ordinary sm:row-span-1 lg:col-span-3 flex flex-col overflow-hidden overflow-y-scroll">
        <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
          <div className="flex justify-between mb-[1vh] h-full items-center">
            {language ? (
              <h1 className="text-lg font-bold ">Description</h1>
            ) : (
              <h1 className="text-lg font-bold ">وصف</h1>
            )}
            <div className="h-10 flex w-32 text-sm items-center justify-center rounded-md border-2 border-primary ">
              <button
                className={
                  language
                    ? `h-full w-full text-white bg-primary p-1`
                    : `h-full  w-full  p-1`
                }
                onClick={() => setLanguage(true)}
              >
                English
              </button>
              <button
                className={
                  !language
                    ? `h-full  w-full text-white bg-primary  p-1`
                    : `h-full  w-full   p-1`
                }
                onClick={() => setLanguage(false)}
              >
                Arabic
              </button>
            </div>
          </div>

          <hr className="mb-[2vh]" />
          {language ? <p>{description}</p> : <p>{aracbiDescription}</p>}
        </div>
        <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh]  backdrop-blur-[30px] flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Address</h1>
          </div>
          <hr className="mt-5" />
          <div className="grid lg:grid-cols-2 sm:grid-rows-3 gap-3 mt-5">
            <div className="lg:cols-span-1 sm:row-span-1 flex flex-col">
              <div className="flex justify-between">
                <h3>Street Address</h3>
                <p>{location?.address}</p>
              </div>
              <div>
                <hr />
              </div>
            </div>
            <div className="lg:cols-span-1 sm:row-span-1 flex flex-col">
              <div className="flex justify-between">
                <h3>City</h3>
                <p>{location?.location.split(",")[0]}</p>
              </div>
              <div>
                <hr />
              </div>
            </div>
            <div className="lg:cols-span-1 sm:row-span-1 flex flex-col">
              <div className="flex justify-between">
                <h3>Country</h3>
                <p>{location?.location.split(",")[1]}</p>
              </div>
              <div>
                <hr />
              </div>
            </div>
          </div>
          <div className="px-auto lg:h-[400px]">
            <MapContainer
              center={position}
              zoom={12}
              attributionControl={true}
              zoomControl={false}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker icon={iconPerson} position={position}>
                <Popup>{title}</Popup>
              </Marker>
              <RecenterAutomatically position={position} />
            </MapContainer>
          </div>
        </div>
        <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold mb-[2vh]">Details</h1>
            <div className="flex flex-row">
              <IoIosCalendar size={20} color="gray" />
              <p>Updated on {updatedAt}</p>
            </div>
          </div>
          <hr className="mb-[15px]" />
          <div className="rounded-lg bg-slate-200 bg-[#c8e1f0] border-2 border-gray-300 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="grid grid-rows-3 gap-3 lg:cols-span-1 sm:rows-span-1">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Price:</h3>
                    <p>{price}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Property Size:</h3>
                    <p>{area}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Bedrooms:</h3>
                    <p>{number_of_beds}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Parking Space</h3>
                    <p>{parkingSpace}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
              </div>
              <div className="grid grid-rows-3 gap-3 lg:cols-span-1 sm:rows-span-1">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Bathrooms:</h3>
                    <p>{number_of_bathrooms}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Garage:</h3>
                    <p>{number_of_garage}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Property Type:</h3>
                    <p>{category}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Property Status:</h3>
                    <p>{status}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
          <h1 className="text-lg font-bold mb-[2vh]">Features</h1>
          <hr className="mb-[5vh]" />
          <div className="flex gap-12 flex-wrap">
            {features?.map((e, i) => {
              if (e.name !== "bathRooms" && e.name !== "bedRooms") {
                const displayText = e.value && !isNaN(e.value) ? `${e.name} : ${e.value}` : e.name;
                return (
                  <div
                    className="h-20 w-32 flex justify-center items-center p-4"
                    key={i}
                  >
                    {displayText}
                  </div>
                );
              }
            })}
          </div>
        </div> */}
        <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
          <h1 className="text-lg font-bold mb-[2vh]">Features</h1>
          <hr className="mb-[5vh]" />
          <div className="flex flex-wrap justify-between">
            {features?.map((e, i) => {
              if (e.name !== "bathRooms" && e.name !== "bedRooms") {
                const Icon = featureIcons[e.name];
                const displayText =
                  e.value && !isNaN(e.value)
                    ? `${e.name} : ${e.value}`
                    : e.name;
                return (
                  <li
                    style={{ listStyle: "none" }}
                    key={i}
                    className="flex flex-row gap-2 w-[50%] md:w-1/3 xl:w-[25%] mb-6"
                  >
                    {Icon && <Icon color="green" />}
                    {displayText}
                  </li>
                );
              }
            })}
          </div>
        </div>

        <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
          <h1 className="text-lg font-semibold mb-[2vh]">
            Mortgage Calculator
          </h1>
          <hr className="mb-[5vh]" />
          <div className="flex justify-center mb-[4vh] w-full items-center">
            <PieChart {...chartData} />
          </div>
          <div className="grid grid-cols-3  gap-x-10">
            <div className="cols-span-1 mb-5 w-full">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="Total Amount"
              >
                Total Amount
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="14000 AED"
              />
            </div>
            <div className="cols-span-1 mb-5">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="DownPayment"
              >
                Down Payment{" "}
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="2100000 AED"
              />
            </div>
            <div className="cols-span-1 mb-5">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="InterestRate"
              >
                Interest Rate
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="3.5%"
              />
            </div>
            <div className="cols-span-1 mb-5">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="LoanTerms"
              >
                Loan Terms - Years
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="12"
              />
            </div>
            <div className="cols-span-1 mb-5">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="PropertyTax"
              >
                Property Tax
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="3000"
              />
            </div>
            <div className="cols-span-1 mb-5">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="LoanTerms"
              >
                Home Insurance
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="AED 1000"
              />
            </div>
            <div className="cols-span-1 mb-5">
              <label
                class="block  text-gray-700 text-sm font-bold mb-2"
                for="PMI"
              >
                PMI
              </label>
              <input
                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="AED 1000"
              />
            </div>
          </div>
          <div className="mb-5 mt-5 mx-auto">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="mb-[10vh] inline-block  rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold mb-[2vh]">
              Property Owner Details
            </h1>
          </div>
          <hr className="mb-[15px]" />
          <div className="rounded-lg bg-[#d3d7da] border-2 border-gray-300 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-[2vh] backdrop-blur-[30px] flex flex-col">
            <div className="grid">
              <div className="grid grid-rows-3 gap-3 lg:cols-span-1 sm:rows-span-1">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Listing Owner</h3>
                    <p>{listingOwner}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Contact Person</h3>
                    <p>{contactPerson}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Email</h3>
                    <p>{email}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Phone Number</h3>
                    <p>{phone}</p>
                  </div>
                  <hr className="border-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:row-span-1 lg:col-span-1 flex flex-col justify-center h-fit md:sticky top-11 mt-[25px]">
        <div className="px-auto lg:w-full lg:mb-[30vh] mb-[40vh]">
          <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center bg-ordinary p-1">
            <input
              type="checkbox"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                !isChecked ? "text-primary bg-white" : "text-body-color"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mr-[6px] fill-current"
              >
                <g clipPath="url(#clip0_3122_652)">
                  <path fillRule="evenodd" clipRule="evenodd"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3122_652">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Schedule a Tour
            </span>
            <span
              className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
                isChecked ? "text-primary bg-white" : "text-body-color"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mr-[6px] fill-current"
              >
                <path fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              Request Info
            </span>
          </label>
        </div>
        {isChecked ? <Message /> : <ScheduleTour />}
      </div>
    </div>
  );
};

export default PropertyDetails;
