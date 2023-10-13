import React from "react";
import { FiPlay } from "react-icons/fi";
import LargeScreenWrapper from "../../LargeScreenWrapper/LargeScreenWrapper";
const Explore2 = () => {
  return (
    <div
      className="relative  w-screen min-h-screen overflow-hidden lg:h-[400px]  p-4 "
      style={{
        backgroundImage: "url('/images/Explore.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <LargeScreenWrapper>
        <div className="grid gap-2 xla:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 lg:grid-flow-col md:mt-[10vh]     ">

          <div className=" h-full md:col-span-1 w-[90%] ">
            <div className="flex flex-col justify-center items-center ml-4 h-full sma3:items-start sma3:ml-0 ">
              <h1 className="text-black-500 text-2xl text-bold ">Explore Community</h1>
              <p >The UAE is a destination that has attracted people from all over the world, get to know what each emirate can offer you</p>
            </div>
          </div>

          <div className="p-1 lg:h-[500px] md:col-span-1 w-[90%] sma3:h-[300px] sma3:w-[100%]  transform hover:scale-95 duration-500 ease-in-out rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/images/explore1.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">0 Property</p>
                <h1 className="text-2xl text-white text-bold font-sans">Business Bay</h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div className="p-1 lg:h-[500px] md:col-span-1 w-[90%] sma3:h-[300px] sma3:w-[100%]   transform hover:scale-95 duration-500 ease-in-out rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/images/explore2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">1 Property</p>
                <h1 className="text-2xl text-white text-bold font-sans">Al Jaddaf</h1>
              </div>
              <div className="flex flex-row justify-between text-white pb-6  p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div className="p-1 lg:h-[500px] md:col-span-1 w-[90%] sma3:h-[300px] sma3:w-[100%]  transform hover:scale-95 duration-500 ease-in-out rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/images/explore3.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">0 Property</p>
                <h1 className="text-2xl text-white text-bold font-sans">Palm Jumeirah</h1>
              </div>
              <div className="flex flex-row justify-between text-white p-4 ">
                <a>More Details</a>
                <FiPlay />
              </div>
            </div>
            {/* <img src="/images/explore1.jpg" className="h-full object-cover"/> */}
          </div>
          <div className="p-1 lg:h-[500px] md:col-span-1 w-[90%] sma3:h-[300px] sma3:w-[100%] transform hover:scale-95 duration-500 ease-in-out rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/images/explore4.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <div className="flex flex-col  h-[100%]  justify-between">
              <div className="p-4 ">
                <p className="text-white text-md text-bold font-sans">0 Property</p>
                <h1 className="text-2xl text-white text-bold font-sans">DIP </h1>
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
export default Explore2;
