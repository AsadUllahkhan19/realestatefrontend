import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
// import img3 from "3d-house-2.png"
import { AiFillStar } from "react-icons/ai";
import { agent } from "../../data/dummyData";
import { Link } from 'react-router-dom';



const Agents = () => {
  return (
    <div className="bg-zinc-200 pt-8">

    
      {/* ////////////////////////////////////////SEARCHBAR */}
      <div className="mdr:max-w-[90%] w-full mx-auto relative my-2">
        <div
          className="flex-col bg-white gap-x-4 flex-center-between mdr:gap-y-0 mdr:flex-row card card-shadow dark:shadow-none mt-6"
          style={{ marginTop: "4rem" }}
        >
          {/* <div className="flex-col flex-1 w-full flex-align-center gap-x-4 mdr:w-fit smr:flex-row gap-y-4 smr:gap-y-0"> */}
          <div className="flex flex-1 w-auto gap-x-2">
            <BiMap />
            <select
              name=""
              id=""
              className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
            >
              <option value="<45000">Less than 45,000</option>
              <option value="=45000">Equal to 45,000</option>
              <option value=">45000">Greater than 45,000</option>
            </select>
          </div>
          <button className="w-full hover:bg-yellow-400 btn bg-yellow-500 smr:w-fit text-white font-semibold">
            search
          </button>
        </div>
      </div>

      {/* ///////////////////////////////left side  */}

      <div className="w-full  bg-zinc-200 h-full ">
        <div className="w-4/5 mx-auto">
          <h2 className="font-bold text-5xl my-6 mx-2 ">Agents</h2>
        </div>
        <div className="w-4/5 mx-auto bg-zinc-200 flex flex-col xl:flex-row ">
          <div className="w-full bg-zinc-200 xl:w-3/4 ">
            {agent.map((item)=>(

             
              <Link to="/agentdetails" >
              <div className="p-3   shadow-gray-200 mdr:mb-0 mb-[15rem]">
              <div className=" w-full lg:w-full xs:flex lg:flex h-[17rem] rounded-[2rem]">
                <div
                  className="h-48 lg:h-auto lg:w-[14rem] flex-none bg-cover rounded-l-2xl text-center overflow-hidden"
                  style={{ backgroundImage: "url('/images/img11.png')" }}
                  />
                <div className=" bg-white rounded-b  lg:rounded-r p-4 flex flex-col justify-between  ">
                  <div className="">
                    <div className="text-gray-900 font-bold text-xl mb-1 w-45 flex gap-x-1 ">
                  
                      {item.name} <AiFillStar color="orange" />{" "}
                      <AiFillStar color="orange" />{" "}
                      <AiFillStar color="orange" />{" "}
                      <AiFillStar color="orange" />{" "}
                      <AiFillStar color="orange" />{" "}
                    </div>
                    <p className="text-black-700 text-base">
                     {item.task}
                    </p>
                    <div className="h-50 w-[18rem] smr:w-[33rem] mt-1">
                      <div className="flex w-full justify-between  border-b-2 border-gray-600 my-2">
                        <p className="font-bold text-1xl text-black">office</p>
                        <p className="font-bold text-1xl text-gray-700">
                          {item.Office}
                        </p>
                      </div>
                      <div className="flex w-full justify-between  border-b-2 border-gray-600 my-3">
                        <p className="font-bold text-1xl text-black">Mobile</p>
                        <p className="font-bold text-1xl text-gray-700 ">
                        {item.Mobile}
                        </p>
                      </div>
                      <div className="flex w-full justify-between  border-b-2 border-gray-600 my-3">
                        <p className="font-bold text-1xl text-black">Fax</p>
                        <p className="font-bold text-1xl  text-gray-700 ">
                        {item.Fax}
                        </p>
                      </div>
                      <div className="flex w-full justify-between my-3  ">
                        <p className="font-bold text-1xl text-black">Email</p>
                        <p className="font-bold text-1xl  text-gray-700 ">
                         {item.Email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>

            ))}
          </div>

          {/* right side************************ */}
          <div className="xl:w-1/4 bg-white p-4 border-4 border-gray-400 rounded-2xl smr:w-full   h-[20rem]        shadow-gray-100 smr:mx-auto         my-4">
            <div className="w-full  flex flex-col ">
              <h2 className="my-1 mdr:mx-auto font-bold">Find Agent</h2>
              <input class="border border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 rounded-2xl hover:border-black" placeholder="Enter agent name" />

              <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-800 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline my-2 rounded-2xl">
                <option>All Categories..</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-800 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline my-2 rounded-2xl">
                <option>All Cities..</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <button className="bg-yellow-600 text-black rounded-2xl my-2 py-2 hover:bg-yellow-300 border-2 border-gray-500">
                <h4 className="text-black  font-bold ">Search Agent</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
export default Agents;