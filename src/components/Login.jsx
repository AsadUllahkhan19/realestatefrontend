import React, { useState, useContext } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io";

import { Store } from "../context/store";

function Admin({ setIsloggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(Store);

  const handleUserName = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form");
    axios

      .post(`${process.env.REACT_APP_SERVERURL}/users/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.data.token);

        swal({
          title: "Success!",
          text: "You are logged In Sucessfully",
          icon: "success",
        });
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.data.userData)
        );
        setIsloggedIn(true);
        dispatch({ type: "AUTHORIZE_USER", payload: true });
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
        console.log(err.response);

        swal({
          title: "Error",
          text: "Invalid Credentials",
          icon: "error",
          dangerMode: true,
        });
      });
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div
          class="w-screen min-h-screen py-32"
          style={{
            backgroundImage: "url('/images/loginbg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center items-center">
            <img src="/images/logo1.png" className="w-36 h-12 mb-5"></img>
          </div>
          <hr className="w-[50%] mx-auto mb-10" />
          <div className=" w-[50%] mx-auto bg-bgdrop rounded-[25px] shadow-lg bg-opacity-25 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center p-10">
            <h1 className="text-white uppercase text-[30px] font-bold mb-5">
              Welcome
            </h1>
            <hr className="w-[75%] mx-auto mb-5" />

            <div className="md:w-[50%] mb-10 ">
              <input
                className="bg-bgdrop appearance-none rounded-[15px] border-2 border-bgdrop w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-gray focus:border-yellow-500 placeholder:text-black"
                id="inline-full-name"
                type="text"
                placeholder="User ID"
                value={email}
                onChange={handleUserName}
              />
            </div>
            <div className="md:w-[50%] mb-10">
              <input
                className="bg-bgdrop appearance-none rounded-[15px] border-2 border-bgdrop w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-gray focus:border-yellow-500 placeholder:text-black"
                id="inline-full-name"
                type="text"
                placeholder=" Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="md:w-[50%] mb-10 flex justify-center items-center">
              <button
                className="w-full mx-auto hover:bg-yellow-400 btn !rounded-[25px] bg-yellow-500 sm:w-fit uppercase text-black 
    !px-10 !py-2 !font-bold"
                type="submit"
                value="Login"
              >
                continue
              </button>
            </div>

            <div className="flex flex-column justify-center items-center mx-auto gap-2 w-[400px] mb-2">
              <hr className="text-white w-[25%] mt-3" />
              <h5 className="text-white">Or continue with</h5>
              <hr className="text-white w-[25%] mt-3" />
            </div>

            <div className="flex flex-column justify-center items-center gap-2 w-[300px]">
              <FaFacebook size={35} color="white" />
              <FaGoogle size={35} color="white" />
              <FaApple size={35} color="white" />
            </div>
          </div>

          <div className="w-[50%] mx-auto flex flex-row gap-2 justify-center items-center p-10">
            <hr className="text-white w-[20%] mt-3" />
            <Link to="/signup">
              <div className=" rounded-[20px]  bg-bgdrop shadow-lg bg-opacity-25 backdrop-filter backdrop-blur-lg text-white px-5 py-2">
                Register
              </div>
            </Link>
            <hr className="text-white w-[20%] mt-3" />
          </div>

          <div className="w-[50%] mx-auto flex justify-center items-center py-2 px-[30px]">
            <p className="text-lg text-white">
              A house is made of bricks & beams. A home is made of hopes and
              dreams. We’ll help you find your home.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Admin;
