import React from "react";

const LargeScreenWrapper = ({ children }) => {
  return (
    <div className="  w-screen flex justify-center ">
      <div className="max-w-screen-2xl relative w-full flex justify-center ">
        {children}
      </div>
    </div>
  );
};

export default LargeScreenWrapper;
