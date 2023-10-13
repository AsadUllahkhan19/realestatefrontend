import React from 'react'

const AgentInformation = () => {
    return (
        <div className='bg-ordinary flex flex-col gap-3 mt-[2rem]'>
            {/* FIRST DIV */}
            <div className='mt-[3rem] bg-white mb-[2rem] py-5 grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 grid-cols-1 gap-3 md:mx-[3rem] sm:mx-[0.5rem] '>
                <div className='md:col-span-1 sm:row-span-1'>
                    <img className='w-80 h-80 ' src="/images/msglogo.png" />
                </div>
                <div className='col-span-2 flex flex-col gap-2 sm:pl-6'>
                    <h1 className='text-[1.5rem] font-light'>Afrin@Macworldgroup.Com</h1>
                    <p>See all reviews</p>
                    <p>manager</p>
                    <hr className='mr-[2rem] my-[1rem]'/>
                    <p className='mb-[0.2rem]'><span className='font-bold text-black'>Agent License:</span> 0988776</p>
                    <p className='mb-[0.2rem]'><span className='font-bold text-black'>Tax Number:</span> 34322</p>  <button type="button" data-te-ripple-init data-te-ripple-color="light"
                    class="mb-6 inline-block w-[10rem] rounded bg-primary px-6 pt-2.5 pb-2 text-lg font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  lg:mb-0">
                    Send Email
                  </button>
                </div>
            </div>
            {/* SECOND DIV */}
            <div className='mt-[3rem] bg-white mb-[2rem] py-5 grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 grid-cols-1 gap-3 md:mx-[3rem] sm:mx-[0.5rem] '>

            </div>

        </div>
    )
}

export default AgentInformation