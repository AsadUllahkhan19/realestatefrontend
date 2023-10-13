import React from "react";

const Explore = () => {
  return (
    <div
      className="relative h-full w-screen min-h-screen overflow-hidden lg:h-[400px]"
      style={{
        backgroundImage: "url('/images/Explore.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid lg:cols-5 md:cols-5 sm:grid-cols-1 gap-4 p-4 lg:grid-flow-col md:mt-[10vh]">
        <div className="p-4 h-full md:col-span-1">
            <h1>Explore Community</h1>
            </div>
        <div className="p-4 h-full md:col-span-1">
        <img src="/images/explore1.jpg" className="h-full object-cover"/>
        </div>

        <div className="p-4 h-full md:col-span-1">
        <img src="/images/explore2.png" className="h-full object-cover"/>
        </div>

        <div className="p-4 h-full md:col-span-1">
        <img src="/images/explore3.jpg" className="h-full object-cover"/>
        </div>

        <div className="p-4 h-full md:col-span-1">
        <img src="/images/explore4.png" className="h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Explore;
