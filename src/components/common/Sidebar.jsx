import React from 'react';
import {
    BsArrowLeftShort, BsSearch, BsChevronDown,
} from "react-icons/bs";
import {
    AiOutlineBarChart,
    AiFillPieChart
} from "react-icons/ai";
import { ImList2 } from "react-icons/im";
import { useState, useEffect } from 'react';
import { RiDashboardFill } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const [submenuOpen1, setSubmenuOpen1] = useState(false);
    const [submenuOpen2, setSubmenuOpen2] = useState(false);
    const [submenuOpen3, setSubmenuOpen3] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2)
    }


    const Menus = [
        { title: "Overview", icon: <AiFillPieChart className='hover:text-yellow-500 hover:animate-bounce duration-1000'/>, path: '/portfolio' },
        {
            title: "listings",
            icons: <ImList2 className='hover:text-yellow-500 hover:animate-bounce duration-1000' />,
            submenu1: true,
            submenuItems: [
                { title: "Listing Inventory ", path: '/listing-inventory' },
            ],
        },
        {
            title: "Reports",
            submenu2: true,
            icon: <TbFileReport className='hover:text-yellow-500 hover:animate-bounce duration-1000' />,
            submenuItems: [
                { title: "Leads", path: '/reports' },
                { title: "Traffic", path: '/traffic' },
            ]
        },
        {
            title: "Insights",
            icon: <AiOutlineBarChart className='hover:text-yellow-500 hover:animate-bounce duration-1000'/>,
            submenu3: true,
            submenuItems: [
                { title: "Listings", path: '/home' },
                { title: "Market", path: '/home' },
                { title: "Transactions", path: '/home' }
            ]
        },

    ];

   
    return (
        <div>
        <div className={`bg-footer2 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-ordinary text-footer text-3xl rounded-full absolute -right-3 z-50 top-9 border border-footer cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            <div className='flex flex-col gap-5 justify-center items-center mb-5'>
            <h1 className={`text-gray-300 font-medium text-2xl ${!open && "scale-0"}`}>Portfolio <span className='text-xs mb-5'>TM</span></h1>
                <div className={`${!open && "hidden duration-50"}`}>
                <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center bg-ordinary ml-[15px] rounded-md duration-75'>
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span
                        className={`flex items-center space-x-[6px] rounded py-2 pr-[18px] text-sm font-medium ${!isChecked ? 'text-primary bg-white' : 'text-body-color'
                            }`}
                    >
                        <Link to="/home">
                        <svg
                            width='16'
                            height='2'
                            viewBox='0 0 16 16'
                            className='mr-[6px] fill-current'
                        >
                            <g clipPath='url(#clip0_3122_652)'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'

                                ></path>
                            </g>
                            <defs>
                                <clipPath id='clip0_3122_652'>
                                    <rect width='16' height='16' fill='white'></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <img src='/images/logoblack.png' className='w-15 h-7 ml-2'/>
                        </Link>
                    </span>
                    <span
                        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-md font-medium ${isChecked ? 'text-primary bg-white' : 'text-body-color'
                            }`}
                    >
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            className='mr-[6px] fill-current'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                        Dubizzle
                    </span>
                </label>
            </div>
                
                
            </div>
            {/* <div className={`flex items-center rounded-md bg-gray-400 mt-6 px-4 py-2 ${!open ? "px-2.5" : "px-4"}`}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                <input type={"search"} placeholder="Search..." className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
            </div> */}
            <ul className='pt-2'>
                {Menus.map((menu, index) => (
                    <>

                        <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 bg-footer3 hover:bg-footer transition duration-1000 ease-linear rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <Link to={menu.path}>
                            <span className='text-white text-2xl block float-left'>
                                {menu.icon ? menu.icon : <RiDashboardFill className='hover:text-yellow-300 hover:animate-bounce duration-1000' />}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                            </Link>
                            {menu.submenu1 && open && (
                                <BsChevronDown className={`${submenuOpen1 && "rotate-180"}`} onClick={() => setSubmenuOpen1(!submenuOpen1)} />
                            )}
                            {menu.submenu2 && open && (
                                <BsChevronDown className={`${submenuOpen2 && "rotate-180"}`} onClick={() => setSubmenuOpen2(!submenuOpen2)} />
                            )}
                            {menu.submenu3 && open && (
                                <BsChevronDown className={`${submenuOpen3 && "rotate-180"}`} onClick={() => setSubmenuOpen3(!submenuOpen3)} />
                            )}
    
                        </li>
                        {menu.submenu1 && submenuOpen1 && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                     <Link to={submenuItem.path}>
                                    <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-footer rounded-md animate duration-1000 ease-linear group'>
                                        {submenuItem.title}
                                    </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                        {menu.submenu2 && submenuOpen2 && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <Link to={submenuItem.path}>
                                    <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-footer rounded-md animate duration-1000 ease-linear'>
                                        {submenuItem.title}
                                    </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                        {menu.submenu3 && submenuOpen3 && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <Link to={submenuItem.path}>
                                    <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-footer rounded-md animate duration-1000 ease-linear '>
                                        {submenuItem.title}
                                    </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
            <Link to="/page-one">
            <button type="button" data-te-ripple-init data-te-ripple-color="light"
                class={` ${!open && "hidden"} mt-10 font-bold mb-5 flex gap-7 w-full rounded bg-primary px-4 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh] transform hover:scale-105`}>
                    <FaHome className='text-white w-10 h-7'/>
                Add property
            </button>
            </Link>
            
            <div className={`${!open && "hidden duration-50"} absolute bottom-10`}>
                <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center border-2 border-white bg-footer2  ml-[15px] rounded-lg duration-75'>
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={isChecked2}
                        onChange={handleCheckboxChange2}
                    />
                    <span
                        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium border-r border-white ${!isChecked2 ? 'text-white bg-footer' : 'text-white bg-footer3'
                            }`}
                    >
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            className='mr-[6px] fill-current'
                        >
                            <g clipPath='url(#clip0_3122_652)'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'

                                ></path>
                            </g>
                            <defs>
                                <clipPath id='clip0_3122_652'>
                                    <rect width='16' height='16' fill='white'></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        English
                    </span>
                    <span
                        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${isChecked2 ? 'text-white bg-footer2' : 'text-white bg-footer3'
                            }`}
                    >
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            className='mr-[6px] fill-current'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                            ></path>
                        </svg>
                        العربية
                    </span>
                </label>
            </div>

        </div>
        </div >
    )
}

export default Sidebar