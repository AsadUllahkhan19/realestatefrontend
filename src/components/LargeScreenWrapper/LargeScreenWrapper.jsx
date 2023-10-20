import React from "react";

const LargeScreenWrapper = ({ children }) => {
  return (
    <div className="  w-screen flex justify-center" style={{marginTop: '80px'}}>
      <div className="max-w-screen-2xl relative w-full flex justify-center px-5">
        {children}
      </div>
    </div>
  );
};

export default LargeScreenWrapper;
