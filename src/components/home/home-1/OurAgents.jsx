import { agents } from "../../../data/dummyData";
import LargeScreenWrapper from "../../LargeScreenWrapper/LargeScreenWrapper";
const OurAgents = () => {
  return (
    <div className="relative w-screen h-auto p-8 flex flex-col gap-y-10 bg-zinc-100 mt-[4%] sma3:p-0  ">
      <LargeScreenWrapper>
        <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center mb-6 ">
      <h1 className="text-4xl mt-4 ">Meet Our Agents</h1>
          <p className="subheading-h1">
            Excellent Agents. Outstanding Results.
          </p>
          </div>

        <div className="grid grid-col-4 w-full justify-center items-center gap-2">
          
        </div>
        {/* <div class="container  bg-red-500  "> */}
        <div class=" flex md:flex-row md:flex-wrap sma3:w-screen sma3:flex-col md:w-full  sma3:justify-center items-center my-0  sma3:mx-1 gap-0  lg:w-full ">
          {/* <div class="lg:w- sm:w-1/2 md:w-1/2 xl:w-1/4 flex flex-row justify-center items-center bg-yellow-500 "> */}
          {agents.map((item) => (
            <div className="c-card col-span-1 mb-6 sma3:w-[80%] sma:w-[80%]  md:w-[40%] lg:w-[23%] xla:w-[20%] 2xla:w-[20%] lg:mx-2 md:mx-2 p-4 block bg-white shadow-md hover:shadow-xl hover:m-2 overflow-hidden transform transition duration-200 hover:scale-90  shadow-lg  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-50 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              <div className="relative pb-48 overflow-hidden h-[30%] sma3:h-[20%] sma3:pb-38">
                <img
                  className="absolute inset-0 h-full w-full object-contain"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="p-4  flex flex-col justify-center items-center">
                <h2 className="mt-2 font-bold text-3xl lg:text-2xl sma3:text-xl">
                  {item.name}
                </h2>
                <h3 className="mb-4 text-center text-xl lg:text-lg sma3:text-sm">
                  {item.title}
                </h3>

                {/* <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span> */}

                <p className="text-sm mb-2 text-center lg:text-sm sma3:text-sm">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center">
                  <a href="#" className="text-xl">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* </div> */}
        </div>
        {/* </div> */}
        </div>
      </LargeScreenWrapper>
    </div>
  );
};
export default OurAgents;
