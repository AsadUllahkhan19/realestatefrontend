import React from "react";
import Layout from "../components/Layout";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Portfolio = () => {
  const [impressions, setImpressions] = useState(0);
  const [clicks, setClicks] = useState(0);

  const getTotalCounts = async () => {
    const email = localStorage.getItem("userData");
    const data = await JSON.parse(email);
    const userEmail = data.email;
    const res = await axios.get(
      `${process.env.REACT_APP_SERVERURL}/property/get-impressions-count/${userEmail}`
    );
    const dataobject = res.data.data[0];
    setImpressions(dataobject.impressions);
    setClicks(dataobject.clicks);

    console.log("Clicks?", clicks);
    console.log("impressions?", impressions);
  };
  useEffect(() => {
    getTotalCounts();
  });
  return (
    <Layout>
      <div className="relative h-screen overflow-x-hidden bg-ordinary px-6 py-10">
        <div className="bg-white relative rounded-[10px] px-6 pt-4 pb-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex flex-col gap-5">
          <div className="mt-5 px-10">
            <h1 className="font-semibold text-[24px] mb-2">
              Listing Performance
            </h1>
            <hr />
          </div>
          <div className="flex flex-row flex-wrap justify-between px-10 mb-8">
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] p-3 bg-transparent w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[320px] xla:w-[400px] h-20 flex flex-col py-2 px-4 hover:border-yellow-400 mb-8">
              <h1 className="text-lg font-light">Impressions</h1>
              <h1 className="text-xl font-bold">{impressions}</h1>
            </div>
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] p-3 bg-transparent w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[320px] xla:w-[400px] h-20 flex flex-col py-2 px-4 hover:border-yellow-400 mb-8">
              <h1 className="text-lg font-light">Clicks</h1>
              <h1 className="text-xl font-bold">{clicks}</h1>
            </div>
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] p-3 bg-transparent w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[320px] xla:w-[400px] h-20 flex flex-col py-2 px-4 hover:border-yellow-400">
              <h1 className="text-lg font-light">Leads</h1>
              <h1 className="text-xl font-bold">0</h1>
            </div>
          </div>
          <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] mx-10 h-[500px] mb-5 flex flex-col items-center justify-center hover:border-yellow-400">
            <img src="/images/notfound.png" className="h-25 w-25 mb-5"></img>
            <p className="text-sm text-footer3 sm:mx-10 text-center">
              We could not find any data to display. Try selecting wider date
              range or use the Add Property option to share you properties
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-between px-10 mb-5">
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] p-3 bg-transparent w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[320px] xla:w-[400px] h-20 flex flex-col py-2 px-4 hover:border-yellow-400 mb-8">
              <h1 className="text-lg font-light">Sale Listings</h1>
              <h1 className="text-xl font-bold">0</h1>
            </div>
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] p-3 bg-transparent w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[320px] xla:w-[400px] h-20 flex flex-col py-2 px-4 hover:border-yellow-400 mb-8">
              <h1 className="text-lg font-light">Rent Listings</h1>
              <h1 className="text-xl font-bold">0</h1>
            </div>
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] p-3 bg-transparent w-[200px] sm:w-[280px] lg:w-[320px] xl:w-[320px] xla:w-[400px] h-20 flex flex-col py-2 px-4 hover:border-yellow-400">
              <h1 className="text-lg font-light">Active Properties</h1>
              <h1 className="text-xl font-bold">0</h1>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between px-10 mb-5">
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] w-[700px] h-[500px] mb-5 flex flex-col items-center justify-center hover:border-yellow-400">
              <img src="/images/notfound.png" className="h-25 w-25 mb-5"></img>
              <p className="text-sm text-footer3 sm:mx-10 text-center">
                We could not find any data to display. Try selecting wider date
                range or use the Add Property option to share you properties
              </p>
            </div>
            <div className="border-2 bg-white border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-[15px] w-[700px] h-[500px] mb-5 flex flex-col items-center justify-center hover:border-yellow-400">
              <img src="/images/notfound.png" className="h-25 w-25 mb-5"></img>
              <p className="text-sm text-footer3 sm:mx-10 text-center">
                We could not find any data to display. Try selecting wider date
                range or use the Add Property option to share you properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
