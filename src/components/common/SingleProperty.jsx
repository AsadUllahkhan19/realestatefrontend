import React from "react";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { BiPrinter } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

const SingleProperty = ({
  featured,
  name,
  location,
  price,
  status,
  number_of_beds,
  number_of_bathrooms,
  number_of_garage,
  area,
  image,
  arabicName,
  subCategory,
  category,
}) => {
  const images = [
    { path: "/images/property1.png" },
    { path: "/images/property2.png" },
    { path: "/images/property3.png" },
    { path: "/images/property4.png" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentImg, setCurrentImg] = useState(imgarr[0].path);
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [showCarousel, setShowCarousel] = useState(false);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <>
      <div>
        {isModalOpen && (
          <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden="true"
            className="z-50 fixed p-10 backdrop-blur-sm overflow-x-hidden overflow-y-auto shadow-2xl flex justify-center items-center h-screen w-screen"
          >
            <div className="relative w-full max-w-3xl max-h-full mb-5 xsm:w-[800px]">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex justify-between p-4 border-b rounded-t bg-black dark:border-gray-600">
                  <img
                    className=" w-[25%]"
                    src="./images/logo1.png"
                    alt="img"
                  />
                  <div className="flex gap-2">
                    <span className="flex gap-1 text-white hover:text-gray-500">
                      <AiOutlineHeart className="m-1" />
                      Favorite
                    </span>
                    <span className="flex gap-1 text-white hover:text-gray-500">
                      <BiShareAlt className="m-1" />
                      Share
                    </span>

                    <button
                      onClick={toggleModal}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                </div>
                {/* Modal body */}
                <div className="p-1">
                  <div className=" mx-auto md:h-[18rem] lg:h-[30rem] grid grid-cols-8 grid-rows-6 p-6 gap-2">
                    <div className="relative grid col-span-8 sm:col-span-5 row-span-6 bg-black ">
                      {/* <img className="h-full" src={currentImg} alt="xxx" /> */}
                      <div className="absolute inset-0 z-50 bg-black">
                        <div className="container mx-auto h-screen p-4">
                          <Gallery
                            items={image.map((element) => ({
                              original: `${process.env.REACT_APP_SERVERURL}/static/${element}`,
                              thumbnail: `${process.env.REACT_APP_SERVERURL}/static/${element}`,
                            }))}
                          />

                          {/* <Gallery items={image.map((element) => ({ original: element, 
            thumbnail: element }))} /> */}
                        </div>
                        <button
                          className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                          onClick={toggleCarousel}
                        >
                          &times;
                        </button>
                      </div>
                    </div>

                    <div className="hidden sm:grid col-span-3 row-span-6">
                      <input
                        class="border mb-2 h-9 border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 hover:border-black"
                        placeholder="Name"
                      />
                      <input
                        class="border mb-2 h-9 border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2  hover:border-black"
                        placeholder="Phone"
                      />
                      <input
                        class="border mb-1 h-9 border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 hover:border-black"
                        placeholder="Email"
                      />

                      <textarea
                        id="message"
                        name="message"
                        className="resize-none mb-2 h-28 border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Hello, I am interested in [Canal Cove Frond G, Canal Cove, Palm Jumeirah, Dubai]"
                        value={message}
                        onChange={handleChange}
                      ></textarea>
                      <select className="block mb-2 appearance-none w-full bg-white h-12 border border-gray-300 hover:border-gray-800 px-4  pr-8  shadow leading-tight focus:outline-none focus:shadow-outline ">
                        <option>All Cities..</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 form-checkbox h-5 w-5 text-blue-600"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor="agree"
                          className="text-gray-700 text-sm"
                        >
                          By submitting this form I agree to term of use
                        </label>
                      </div>
                      <button className="bg-yellow-500 h-10  my-2 py-2">
                        <h4 className="text-white  font-bold ">Send Message</h4>
                      </button>
                      <button className="bg-white-500 h-10flex my-2 py-2 hover:bg-yellow-500 border-2 hover:text-white border-yellow-500">
                        {/* <AiOutlineWhatsApp color="yellow" /> */}
                        <h4 className="text-yellow-500  font-bold ">
                          Whatsapp
                        </h4>
                      </button>
                    </div>

                    {/* {imgarr.map((item, index) => (
                    <div
                      key={index}
                      className="grid bg-white col-span-2 sm:col-span-1  md:w-[5rem] "
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={item.path}
                        alt=""
                        onClick={() => {
                          setCurrentImg(item.path);
                        }}
                      />
                    </div>
                  ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="pt-[5%] bg-white px-[3%] md:px-[6%]">
        <div className="flex justify-between mb-2">
          <div className="flex flex-row">
            <Link className="hover:cursor-pointer" to="/">
              <p>Home</p>
            </Link>
            <IoIosArrowForward className="w-4 h-4 mt-1" />
            <Link className="hover:cursor-pointer" to="/buy">
              <p>{status}</p>
            </Link>
            <IoIosArrowForward className="w-4 h-4 mt-1" />
            <p>{name}</p>
          </div>
          <div className="flex flex-row">
            <div className="icon-box !w-5 !h-5 bg-white hover:bg-yellow-300 !opacity-100">
              <BiHeart />
            </div>
            <div className="icon-box !w-5 !h-5 bg-white hover:bg-yellow-300 !opacity-100">
              <BiShare />
            </div>
            <div className="icon-box !w-5 !h-5 bg-white hover:bg-yellow-300 !opacity-100">
              <BiPrinter />
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-1">
          <h1 className="text-[30px] font-light">
            {name} ({arabicName && arabicName})
          </h1>
          <h1 className="text-[34px] font-bold">{price} AED</h1>
        </div>
        <div className="mb-3 flex gap-3">
          {featured === "true" && (
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="flex flex-row gap-2 rounded bg-primary px-2 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
            >
              Featured
            </button>
          )}
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="flex flex-row gap-2 rounded bg-ordinary px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-footer shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
          >
            {status}
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="flex flex-row gap-2 rounded bg-ordinary px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-footer shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
          >
            {category}
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="flex flex-row gap-2 rounded bg-ordinary px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-footer shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
          >
            {subCategory}
          </button>
        </div>
        <div className="mb-3 flex gap-3">
          <BiMap />
          <p>{location}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full h-500">
          <div className="col-span-2" onClick={toggleModal}>
            <img
              className="w-full h-full object-cover"
              src={`${process.env.REACT_APP_SERVERURL}/static/${image[0]}`}
            ></img>
            {/* <img className='w-full h-full object-cover' src={image[0]}></img> */}
          </div>
          <div className="grid col-span-1 grid-rows-2 gap-3">
            <div className="row-span-1" onClick={toggleModal}>
              <img
                className="w-full h-full object-cover"
                src={`${process.env.REACT_APP_SERVERURL}/static/${image[1]}`}
              ></img>
            </div>

            <div className="relative row-span-1" onClick={toggleModal}>
              <img
                className="w-full h-full object-cover"
                src={`${process.env.REACT_APP_SERVERURL}/static/${image[2]}`}
              ></img>
              <div className="absolute inset-0 bg-black opacity-75 text-white flex justify-center items-center cursor-pointer">
                <p className="text-4xl">{`+${image.length - 3} images`}</p>
              </div>
            </div>
            {/* <div className="row-span-1 bg-black opacity-75 text-white flex justify-center items-center cursor-pointer">
              <p className="text-4xl">{`+${image.length - 3} images`}</p>
            </div> */}
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-7 pb-7">
          <div className="flex-align-center sm:gap-y-4 gap-x-2 w-full sm:w-auto border-l border-r px-10">
            <p className="text-sm font-bold">{status}</p>
            <div className="flex flex-col">
              <p className="text-sm">Property</p>
            </div>
          </div>
          {/* Bedrooms */}
          <div className="flex-align-center sm:gap-y-4 gap-x-2 w-full sm:w-auto border-l border-r px-10">
            <div className="flex icon-box !w-10 !h-10 bg-gray/20 hover:!bg-primary/40 text-black">
              <BiBed />
            </div>
            <p className="text-sm font-bold">{number_of_beds}</p>
            <div className="flex flex-col">
              <p className="text-sm">Bedrooms</p>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="flex-align-center sm:gap-y-4 gap-x-2 w-full sm:w-auto border-l border-r px-10">
            <div className="icon-box !w-10 !h-10 bg-gray/20 hover:!bg-primary/40 text-black">
              <FaShower />
            </div>
            <p className="text-sm font-bold">{number_of_bathrooms}</p>
            <div className="flex flex-col">
              <p className="text-sm">Bathrooms</p>
            </div>
          </div>

          {/* Garage */}
          <div className="flex-align-center sm:gap-y-4 gap-x-2 w-full sm:w-auto border-l border-r px-10">
            <div className="icon-box !w-10 !h-10 bg-gray/20 hover:!bg-primary/40 text-black">
              <FaCar />
            </div>
            <p className="text-sm font-bold">{number_of_garage}</p>
            <div className="flex flex-col">
              <p className="text-sm">Parking space</p>
            </div>
          </div>

          {/* Sqft */}
          <div className="flex-align-center sm:gap-y-4 gap-x-2 w-full sm:w-auto border-l border-r px-10">
            <div className="icon-box !w-10 !h-10 bg-gray/20 hover:!bg-primary/40 text-black">
              <BiMapAlt />
            </div>
            <p className="text-sm font-bold">{area}</p>
            <div className="flex flex-col">
              <p className="text-sm">Sqft</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
