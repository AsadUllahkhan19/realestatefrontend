import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import LargeScreenWrapper from "../../LargeScreenWrapper/LargeScreenWrapper";
const Explore3 = () => {
  const [shopCount, setshopCount] = useState(0);
  const [officeCount, setofficeCount] = useState(0);
  const [warehouseCount, setwarehouseCount] = useState(0);
  const [residencyCount, setresidencyCount] = useState(0);
  const [villaCount, setvillaCount] = useState(0);
  const [penthouseCount, setpenthouseCount] = useState(0);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVERURL}/property/get-shops-count`)
      .then((res) => setshopCount(res.data.result));

    axios
      .get(`${process.env.REACT_APP_SERVERURL}/property/get-office-count`)
      .then((res) => setofficeCount(res.data.result));

    axios
      .get(`${process.env.REACT_APP_SERVERURL}/property/get-warehouse-count`)
      .then((res) => setwarehouseCount(res.data.result));

    axios
      .get(`${process.env.REACT_APP_SERVERURL}/property/get-warehouse-count`)
      .then((res) => setresidencyCount(res.data.result));

    axios
      .get(`${process.env.REACT_APP_SERVERURL}/property/get-villa-count`)
      .then((res) => setvillaCount(res.data.result));

    axios
      .get(`${process.env.REACT_APP_SERVERURL}/property/get-pentHouse-count`)
      .then((res) => setpenthouseCount(res.data.result));
  }, []);

  return (
    <div
      className="relative h-full w-screen min-h-screen overflow-hidden lg:h-auto 2xla:h-[700px] 2xla:w-screen mt-0 flex flex-col  p-4 items-center "
      style={{
        backgroundImage: "url('/images/Explore.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LargeScreenWrapper>
        <div className="grid gap-4 gap-y-6 xla:grid-cols-3 xla:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-1 lg:grid-flow-col md:mt-[5vh] h-[80%] lg:w-[97%] sma:w-screen sma2:w-screen sma3:w-screen sma2:p-6 md:w-[95%] md:mx-auto md:p-0 xla:w-[80%] 2xla:w-[100%]  p-4">
          <div className=" h-[260px] md:col-span-1   ">
            <div className="flex flex-col justify-center  ml-4 h-full sma2:items-start sma2:ml-0">
              <h1 className="text-black-500 text-2xl text-bold mb-4">
                Residential
              </h1>
              <p>
                Residential real estate consists of housing for individuals,
                families, or groups of people.
              </p>
            </div>
          </div>

          <div
            className="p-1 h-[260px] md:col-span-1   rounded-sm shadow-lg"
            style={{
              backgroundImage: "url('/images/shop.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">
                  {shopCount} Property
                </p>
                <h1 className="text-2xl text-white text-bold font-sans">
                  Shops
                </h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div className=" h-[260px] md:col-span-1 w-[90%]  ">
            <div className="flex flex-col justify-center  ml-4 h-full sma2:items-start sma2:ml-0">
              <h1 className="text-black-500 text-2xl text-bold mb-4">
                Commercial{" "}
              </h1>
              <p>
                Real estate that is used for commercial activities like offices
                of companies, large residential properties that are rented out,
                etc.
              </p>
            </div>
          </div>

          <div
            className="p-1 h-full md:col-span-1   rounded-sm shadow-lg row-span-2"
            style={{
              backgroundImage: "url('/images/Office.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">
                  {officeCount} Property
                </p>
                <h1 className="text-2xl text-white text-bold font-sans">
                  Office
                </h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>

          <div
            className="p-1 h-[260px] md:col-span-1   rounded-sm shadow-lg"
            style={{
              backgroundImage: "url('/images/Warehouse.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">
                  {warehouseCount} Property
                </p>
                <h1 className="text-2xl text-white text-bold font-sans">
                  WareHouse
                </h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div
            className="p-1 h-[260px] md:col-span-1 rounded-sm shadow-lg"
            style={{
              backgroundImage: "url('/images/Residency.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">
                  {residencyCount} Property
                </p>
                <h1 className="text-2xl text-white text-bold font-sans">
                  Residency
                </h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div
            className="p-1 h-[260px] md:col-span-1   rounded-sm shadow-lg"
            style={{
              backgroundImage: "url('/images/Villa.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">
                  {villaCount} Property
                </p>
                <h1 className="text-2xl text-white text-bold font-sans">
                  Villa
                </h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div
            className="p-1 h-[260px] md:col-span-1   rounded-sm shadow-lg"
            style={{
              backgroundImage: "url('/images/Penthouse.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">
                  {penthouseCount} Property
                </p>
                <h1 className="text-2xl text-white text-bold font-sans">
                  PentHouse
                </h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
        </div>
      </LargeScreenWrapper>
    </div>
  );
};
export default Explore3;
