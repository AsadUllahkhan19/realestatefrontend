import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { RiPhoneLockLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import swal from "sweetalert";

function Otp({ onClose }) {
  const [otp, setOtp] = useState("");
  const userId = localStorage.getItem("userId");
  // Retrieve user ID from localStorage
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  console.log(userId);

  // Function to handle changes in individual input fields
  const handleInputChange = (e, index) => {
    const newValue = e.target.value;
    let newOtp = otp;
    newOtp =
      newOtp.substring(0, index) + newValue + newOtp.substring(index + 1);
    console.log(newOtp);
    setOtp(newOtp);
  };

  // Function to send OTP and user ID to your API and fetch data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVERURL}/users/verify-otp?otp=${otp}&userId=${userId}`
      );

      console.log("OTP Verification Successful", response.data);
      // Handle the success response from your API here
      setUserData(response.data); // Store the fetched user data in state
      navigate(`/login`);
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      swal({
        title: "Error",
        text: errorMsg,
        icon: "error",
      });
      console.error("OTP Verification Failed", error.response.data, errorMsg);
      // Handle the error response from your API here
    }
  };

  return (
    <div>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed backdrop-blur-sm backdrop-brightness-50   inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto shadow- "
      >
        <form onSubmit={handleSubmit}>
          <div>
            <div className=" relative w-auto h-auto rounded-lg   mx-auto shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white flex flex-col items-center justify-center p-4">
              <div className=" w-full">
                <button
                  className="float-right text-lg"
                  onClick={() => {
                    if (!otp) {
                      onClose();
                    } else {
                      onClose();
                      navigate(`/register`);
                    }
                  }}
                >
                  <ImCross />
                </button>
              </div>
              <div className="  flex justify-center items-center mx-8   ">
                <RiPhoneLockLine className="text-6xl text-footer" />
              </div>
              <h1 className="text-2xl text-footer font-bold p-6 pt-0 pb-8">
                OTP Verification
              </h1>
              <div className="flex gap-2 mx-8">
                <div className="">
                  <input
                    className="h-[65px] w-[60px] text-center text-xl font-bold  bg-slate-200 border-2 border-yellow-900"
                    type="number"
                    value={otp[0] || ""}
                    onChange={(e) => handleInputChange(e, 0)}
                  />
                </div>
                <div className="">
                  <input
                    className="h-[65px] w-[60px] text-center text-xl font-bold bg-slate-200 "
                    type="number"
                    value={otp[1] || ""}
                    onChange={(e) => handleInputChange(e, 1)}
                  />
                </div>
                <div className="">
                  <input
                    className="h-[65px] w-[60px] text-center text-xl font-bold bg-slate-200"
                    type="number"
                    value={otp[2] || ""}
                    onChange={(e) => handleInputChange(e, 2)}
                  />
                </div>
                <div className="">
                  <input
                    className="h-[65px] w-[60px] text-center text-xl font-bold bg-slate-200"
                    type="number"
                    value={otp[3] || ""}
                    onChange={(e) => handleInputChange(e, 3)}
                  />
                </div>
                <div className="">
                  <input
                    className="h-[65px] w-[60px] text-center text-xl font-bold bg-slate-200"
                    type="number"
                    value={otp[4] || ""}
                    onChange={(e) => handleInputChange(e, 4)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full hover:bg-yellow-400 btn mt-8  mb-8 bg-yellow-500 sm:w-fit text-white font-semibold "
              >
                Verify OTP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otp;
