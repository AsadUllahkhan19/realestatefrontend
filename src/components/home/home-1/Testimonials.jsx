import { agents } from "../../../data/dummyData"
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../../../data/dummyData";
const Testimonials = () => {


    return (
        <div className="relative h-auto w-screen mb-4  p-8 flex flex-col gap-y-10  mt-[4%] sma3:p-0  ">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-4xl mt-4">Testimonials</h1>
                <p className="subheading-h1">Our Passion is People. What<span>'</span>s Yours?</p>
            </div>
            {/* <div class="container  bg-red-500  "> */}
            <div class=" flex md:flex-row md:flex-wrap sma3:w-screen sma3:flex-col md:w-screen  sma3:justify-center items-center my-0  sma3:mx-1 gap-4 ">
                {/* <div class="lg:w- sm:w-1/2 md:w-1/2 xl:w-1/4 flex flex-row justify-center items-center bg-yellow-500 "> */}
                {
                    testimonials.map((item) => (
                        <div class="c-card md:m-4 sma3:w-[80%] sma:w-[80%] md:w-[40%] lg:w-[30%] xla:w-[20%] 2xla:w-[20%] p-4 block bg-gray-600 ">
                            {/* <div class="relative pb-48 overflow-hidden h-[30%]">
                                <img class="absolute inset-0 h-full w-full object-contain" src="./images/ouragent1.png" alt="" />
                            </div> */}
                            <div class="p-4  flex flex-col ">
                                <FaQuoteLeft className="text-white"/>
                                <h2 class="mt-2  text-lg text-white">{item.reviewText}</h2>

                                {/* <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span> */}

                                {/* <p class="text-sm mb-2 text-center text-lg">{item.desc}</p> */}
                                
                            </div>
                            <div class="mt-3 flex flex-row justify-center items-center gap-4 ">
                                    <div className="rounded-full h-[80px] w-[80px] bg-pink-500"> <img class="inset-0 h-full w-full object-cover rounded-full" src="./images/ouragent1.png" alt="" /></div>
                                    <p className="text-md text-white">by <span className="text-md  text-white">{item.name}</span></p>
                            </div>

                        </div>

                    ))
                }

                {/* </div> */}


            </div>
            {/* </div> */}



        </div>
    )
}
export default Testimonials