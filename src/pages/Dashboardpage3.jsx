import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

import ProgressButton from "../components/Dashboard/progressButton";
import { Store } from "../context/store";
import Layout from "../components/Layout";
import Imageupload from "../components/common/Imageupload";
import Videoupload from "../components/common/Videoupload";
import Navbar from "../components/common/Navbar";
import { stubTrue } from "lodash";

const Dashboardpage3 = () => {
  const [stepcount, setStepcount] = useState(3);
  const [isChecked, setIsChecked] = useState(false);
  const [images, setImages] = useState([]);
  const [updateImage, setUpdateImage] = useState([]);
  const [videoLinks, setVideoLinks] = useState([]);

  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state?.updatePropertyToggle) {
      setImages(state?.updateProperty?.upload?.images);
      setVideoLinks(state?.updateProperty?.upload?.videos);
    } else {
      setImages(state?.form?.upload?.upload);
      setVideoLinks(state?.form?.upload?.videos);
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const NavigateTo = useNavigate();

  const submitForm = () => {
    setStepcount(stepcount + 1);
  };

  const prevPage = () => {
    dispatch({
      type: "ADD_MEDIA",
      payload: { images: images, videos: videoLinks },
    });
    setStepcount(stepcount - 1);
    NavigateTo("/dashboard");
  };

  const handleUpload = () => {
    dispatch({
      type: "ADD_MEDIA",
      payload: { images: images, videos: videoLinks },
    });
    const formData = new FormData();
    console.log("imagesss", images);
    for (let i = 0; i < images.length; i++) {
      formData.append("photos", images[i]);
    }
    formData.append("bodyOfData", JSON.stringify(state.form));
    axios
      .post(`${process.env.REACT_APP_SERVERURL}/property/upload`, formData)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Success",
          text: res?.data?.message,
          icon: "success",
        });
        dispatch({ type: "EMPTY_FORM" });
        setImages([]);
        setVideoLinks([]);
      });
  };

  const handleUpdateImage = async () => {
    const formData = new FormData();
    for (let i = 0; i < updateImage.length; i++) {
      formData.append("photos", updateImage[i]);
    }
    const res = await axios.post(
      `${process.env.REACT_APP_SERVERURL}/property/add-photos`,
      formData
    );
    setImages((state) => [...state, ...res.data.data]);
  };

  return (
    <Layout>
      {console.log("final_Page", state.form)}
      <div
        className="bg-gradient-to-r from-gradient via-ordinary to-ordinary h-screen overflow-x-hidden"
        // style={{
        //     backgroundImage: "url('/images/info1.jpg')",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        // }}
      >
        <div
          className="relative h-full inset-0 p-10"
          // style={{
          //     backgroundColor: "rgba(0, 0, 0, 0.1)",
          //     backdropFilter: "brightness(0.8)",
          // }}
        >
          <div className="relative block rounded-[25px] bg-white px-6 pt-4 pb-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <ProgressButton step={stepcount} />
          </div>

          <div className="bg-white m-10 rounded-md flex flex-col items-center justify-center">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center p-1 mt-10">
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
                Upload Images
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
                Upload Video
              </span>
            </label>
            {isChecked ? (
              <Videoupload
                videoLinks={videoLinks}
                setVideoLinks={setVideoLinks}
              />
            ) : (
              <Imageupload
                images={images || []}
                setImages={setImages}
                setUpdateImage={setUpdateImage}
                updateImage={updateImage}
              />
            )}

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={prevPage}
                class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
              >
                Previous
              </button>
              {state?.updatePropertyToggle ? (
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleUpdateImage}
                  class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleUpload}
                  class="mt-10 font-bold mb-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboardpage3;
