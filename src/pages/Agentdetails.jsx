import { AiFillStar } from "react-icons/ai";
import Layout from "../components/Layout";
const Agentdetails = () => {
  const agentdetails={
    name:"Abdullah",
    reviewno:5,
    detail:" Company Agent at Modern House Real Estate ",
    agentLicense:"090-0348-8346",
    taxNumber:"HGT-92384-3434",
    serviceArea:"Dubai",
    specialities:"Property management, Real estate development, Real estate appraising, Retail leasing, Apartment brokerage ",
    about:"Lorem ipsum dolor sit amet consectetur adipisicing elitPerferendis, nemo. lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, perferendis lorem",
    office:"34864534590",
    mobile:"34864534590",
    FAX:"34864534590",
    email:"macworld@technology.com",
    website:"macworld@technology.com"

  }
  return (
    <Layout>
      <div className=" w-full h-auto flex justify-center item-center bg-slate-100">
        <div className="w-[80%]  h-auto sm3:w-[70%] bg-slate-100 mt-20 ">
          <div className="w-full bg-white h-[50rem] flex flex-col   sm3:flex-row   sm3:h-[33rem]   rounded-2xl                ">
            <div className="w-full mdrr:w-[50%] h-[85%] sm2:h-[67%]  justify-center items-center">
              <img
                className="w-full h-full object-cover   "
                src="./images/img11.png"
                alt="ooo"
              />
            </div>

            <div className="w-full p-6">
              <div className="w-full flex flex-col bg-white border-b border-gray-500">
                <h4 className="m-1 font-bold text-2xl">{agentdetails.name}</h4>
                <div className="flex justify-between w-full m-1">
                  <span> {agentdetails.reviewno}</span>

                  <span className="flex m-1">
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                    <AiFillStar color="orange" />
                  </span>
                  <span>See all reviews</span>
                </div>
                <span className="m-1">
                  {agentdetails.detail}
                 
                </span>
              </div>

              <div className="flex flex-col bg-white mt-2">
                <div className="my-1">
                  <span className="font-bold my-1">Agent License:</span>
                  <span>{agentdetails.agentLicense}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold my-1">Tax Number:</span>
                  <span>{agentdetails.taxNumber}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold">Service Areas:</span>
                  <span>{agentdetails.serviceArea}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold">Specialties: </span>
                  <span>
                    {agentdetails.specialities}
                  </span>
                </div>
              </div>
              <div>
                <button className="bg-yellow-500 h-10 w-full my-3 py-2">
                  <h4 className="text-white  font-bold ">Send Message</h4>
                </button>
                <button className="bg-white-500 h-10flex w-full my-2 py-2 hover:bg-yellow-500 border-2 border-yellow-500">
                  <h4 className="text-yellow-500 hover:text-white font-bold mx-auto ">Whatsapp</h4>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col mdrr:flex-row bg-white my-5 ">
            <div className="left  w-full mdr:w-[70%] bg-slate-100">
              <div className="w-full mdr:w-[90%] flex flex-col gap-8 bg-slate-100">
                <div className="flex flex-col  p-7 bg-white  rounded-2xl">
                  <h3 className="font-bold my-2">About {agentdetails.name}</h3>
                  <span>
                    {agentdetails.about}
                  </span>
                </div>
                <div className=" flex justify-center h-10 bg-slate-600  items-center text-white font-semibold py-4 rounded-[.5rem] ">
                  <span>Reviews(0)</span>
                </div>
              </div>

              <div className="w-full mdr:w-[90%] flex  sm3:justify-between   flex-col sm3:flex-row justify-center item-center bg-slate-100 py-5">
                <span className="mx-auto sm3:mx-0 flex items-center">
                  0 Reviews
                </span>

                <span className="flex m-1 mx-auto sm3:mx-0 items-center">
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                </span>
                <button className=" flex w-[8rem] my-2 py-2  bg-gray-500  sm3:mx-0 items-center rounded-[0.5rem]">
                  <h4 className="text-white  font-bold mx-auto  ">
                    Leave a review
                  </h4>
                </button>
              </div>

              <div
                className="w-full mdr:w-[90%] bg-white p-6 mb-8
              
              
              "
              >
                <div className="flex flex-col">
                  <h3 className="font-bold mb-3 text-2xl">Leave a Review</h3>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block  py-2.5 px-0 w-full mdr:w-[90%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group ">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full mdr:w-[90%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Title
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      name="floating_title"
                      id="floating_title"
                      class="block py-2.5 px-0 w-full mdr:w-[90%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      required
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="Mr.">1 Star-Poor </option>
                      <option value="Ms.">2 star-Fair</option>
                      <option value="Mrs.">3 star-Average</option>
                      <option value="Mrs.">4 star-Good</option>
                      <option value="Mrs.">5 star-Excellent</option>
                    </select>
                    <label
                      for="floating_title"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Rating
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <textarea
                      name="floating_text"
                      id="floating_text"
                      className="block py-2.5 px-0 w-full mdr:w-[90%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      for="floating_text"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Reviews
                    </label>
                  </div>
                  <div className="w-full mdr:w-[90%] flex justify-center ">
                    <button className="bg-yellow-500 h-10 w-full my-2 py-2">
                      <h4 className="text-white  font-bold ">Submit Review </h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right w-full mdr:w-[30%] bg-slate-100 flex flex-col gap-16 ">
              <div className="h-[20rem] bg-white rounded-sm p-6">
                <h3 className="font-extrabold my-2">Contact</h3>
                <div className="flex justify-between border-b-2 border-gray-500 my-2">
                  <span>Office</span>
                  <span>{agentdetails.office}</span>
                </div>
                <div className="flex justify-between  border-b-2 border-gray-500 my-2">
                  <span>Mobile</span>
                  <span>{agentdetails.mobile}</span>
                </div>
                <div className="flex justify-between  border-b-2 border-gray-500 my-2">
                  <span>Fax</span>
                  <span>{agentdetails.FAX}</span>
                </div>
                <div className="flex justify-between  border-b-2 border-gray-500 my-2 ">
                  <span>Email</span>
                  <span>{agentdetails.email}</span>
                </div>
                <div className="flex justify-between  border-b-2 border-gray-500 my-2 ">
                  <span>website</span>
                  <span>{agentdetails.website}</span>
                </div>
              </div>

              <div className="w-full  flex flex-col  bg-white h-[20rem] p-6 ">
                <h2 className="my-2  font-bold text-2xl">Find Agent</h2>
                <input
                  class="border border-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 px-2 py-2 rounded-2xl hover:border-black"
                  placeholder="Enter agent name"
                />

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
                <button className="bg-yellow-500 text-white my-2 py-2 cursor-pointer ">
                  <h4 className="text-white  font-bold ">Search Agent</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Agentdetails;