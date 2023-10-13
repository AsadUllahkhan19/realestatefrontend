import { FaCheckCircle, FaCircleCheck } from 'react-icons/fa'
const ProgressButton = ({ step }) => {

  return (
    <>



      <div className="flex justify-center items-center mt-4">
        <ol class="flex items-center justify-center w-[90%] text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          <li class="flex md:w-full items-center text-gray-500 dark:text-gray-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            {step === 1 &&
              <span class="flex items-center font-bold text-xl mt-2 after:content-['/'] sm:after:hidden after:mx-2 text-black">
                <span class="mr-2 w-7 h-7 rounded-full bg-yellow-500 text-black text-[20px] font-bold pt-[1px]">1</span>
                Details
              </span>
            }

            {(step > 1) &&
              <span class="flex items-center text-md font-semibold after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-900">

                <span> <FaCheckCircle className=' h-6 w-6 text-yellow-500 mr-2' /></span>
                Details


              </span>
            }
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
            {(step === 2 || step === 1) &&
              <span class="flex items-center font-bold text-xl mt-2 after:content-['/'] sm:after:hidden after:mx-2 text-black">
                <span class="mr-2 w-7 h-7 rounded-full bg-yellow-500 text-black text-[20px] font-bold pt-[1px]">2</span>
                Ameneties
              </span>
            }

            {step > 2 &&
              <span class="flex items-center text-md font-semibold after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-900">

                <span> <FaCheckCircle className=' h-6 w-6 text-yellow-500 mr-2' /></span>
                Ameneties


              </span>
            }
          </li>
          <li class="flex items-center">
            {(step === 3 || step === 2 || step === 1) &&
              <span class="flex items-center font-bold text-xl mt-2 after:content-['/'] sm:after:hidden after:mx-2 text-black">
                <span class="mr-2 w-7 h-7 rounded-full bg-yellow-500 text-black text-[20px] font-bold pt-[1px]">3</span>
                Upload
              </span>
            }

            {step > 3 &&
              <span class="flex items-center text-md font-semibold after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-900">

                <span> <FaCheckCircle className=' h-6 w-6 text-yellow-500 mr-2' /></span>
                Upload


              </span>
            }
          </li>
        </ol>
      </div>




    </>

  )
}

export default ProgressButton;