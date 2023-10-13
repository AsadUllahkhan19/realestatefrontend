import React from 'react';
import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";
import { FiCheck } from 'react-icons/fi';

const PropertyIntroTwo = () => {
    return (
        <div className="pt-16 pb-20">
            <div className="flex flex-wrap gap-24">
                <div className="relative flex-1 basis-[18rem] border mx-5">
                    <img
                        src="/images/Info1.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                    />
                    <img
                        src="/images/Intro2.jpg"
                        alt=""
                        className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
                    />
                </div>
                <div className="relative flex-1 basis-[22rem]">
                    <h1 className="heading">No Matter Where You Are,
                        Your Property Is In Safe Hands</h1>
                    <div className="mt-4">
                        <div className="flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>
                                    Peace of Mind
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>
                                    Simple Fixed No-Fuss Annual Fee
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>

                                    Trusted and Experienced Professionals
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>

                                    Earn Maximum Returns
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>
                                    Manage Real Estate Assets in Dubai for local and international clients over a decade
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>
                                    Ensuring Long Term Savings
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>

                                    Always Available for tenants and landlords
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 flex-align-center gap-x-2">
                            <div className="icon-box text-white !bg-yellow-500">
                                <FiCheck />
                            </div>
                            <div>
                                <p className='text-sm'>
                                    Maintain good relations between tenants & landlords
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyIntroTwo