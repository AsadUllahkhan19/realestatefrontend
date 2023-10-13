import { useState, useEffect } from "react";
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import axios from "axios";
import Dropdown from "../../common/Dropdown";
import Example from "../../common/Dropdown";
import Input from "../../Dashboard/Input";

const Filters = () => {
  const [catOptions, setcatOptions] = useState([]);
  const [catvalue, setCatvalue] = useState("");
  const [subcatOptions, setsubcatOptions] = useState([]);
  const [subcatvalue, setsubcatvalue] = useState("");
  const [purpOptions, setpurpOptions] = useState([]);
  const [purpValue, setpurpValue] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVERURL}/lov/category`)
      .then((res) => setcatOptions(res.data.data));

    axios
      .get(`${process.env.REACT_APP_SERVERURL}/lov/purpose`)
      .then((res) => setpurpOptions(res.data.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVERURL}/lov/sub-category/${catvalue}`
      )
      .then((res) => setsubcatOptions(res.data.data));
  }, [catvalue]);

  return (
    <div className="md:max-w-[80%] w-full mx-auto relative -mt-8 sm:-mt-20 ">
      <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none sma2:m-6 lg:w-[100%]  ">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit md:flex-wrap md:gap-y-6 sm:flex-row gap-y-4 sm:gap-y-0 ">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold 2xla:text-2xl">Category</h1>
            <div className="flex-align-center gap-x-2 2xla:text-2xl">
              <BiBuildings />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70 2xla:h-[50px]"
                onChange={(e) => setCatvalue(e.target.value)}
              >
                {catOptions.map((opt, i) => (
                  <option key={i} name={opt.key} value={opt.value}>
                    {opt.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold 2xla:text-2xl">Sub Category</h1>
            <div className="flex-align-center gap-x-2 2xla:text-2xl">
              <BiBuildings />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70 md:w-[100px] 2xla:h-[50px]"
                onChange={(e) => setsubcatvalue(e.target.value)}
              >
                {subcatOptions.map((opt, i) => (
                  <option key={i} name={opt.key} value={opt.value}>
                    {opt.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0"> */}
          {/* <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered "> */}
          {/* <Example /> */}
          {/* <h1 className="font-bold">Property Size</h1>
            <div className="flex-align-center gap-x-2">
            <BiMoney />
            <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                >
                <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                <option value="$500,000 - $1000,000">
                  $500,000 - $1000,000
                  </option>
              </select>
            </div> */}
          {/* </div> */}
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold 2xla:text-2xl">Purpose</h1>
            <div className="flex-align-center gap-x-2 2xla:text-2xl">
              <BiBriefcase />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark 2xla:h-[50px]"
                onChange={(e) => setpurpValue(e.target.value)}
              >
                {purpOptions.map((opt, i) => (
                  <option key={i} name={opt.key} value={opt.value}>
                    {opt.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* </div> */}
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold 2xla:text-2xl">Area</h1>
            <div className="flex-align-center gap-x-2 2xla:text-2xl">
              <BiMoney />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70 2xla:h-[50px]"
              >
                <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                <option value="$500,000 - $1000,000">
                  $500,000 - $1000,000
                </option>
              </select>
            </div>
          </div>
          <input
            type="text"
            name="location"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Please enter your location"
            // ref={ref}
            className={`border-2 border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  rounded-lg p-6 bg-transparent hover:border-green-500 placeholder-footer h-7 w-full bg-white`}
          />

          <button className="w-full hover:bg-yellow-400 btn bg-yellow-500 sm:w-fit text-white font-semibold">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
