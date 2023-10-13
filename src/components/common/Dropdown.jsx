import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const mainOptions = ['Option 1', 'Option 2', 'Option 3'];
const nestedOptions = ['Nested Option 1', 'Nested Option 2', 'Nested Option 3'];

const Dropdown = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-[100%] justify-center gap-x-[120px] rounded-md px-1  text-md h-10 font-semibold text-gray-900  ring-inset">
                    Options
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-[300px] origin-top-right divide-y  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                    <div className="py-1">

                        <Menu.Item className="w-[100%] m-2">
                            {({ active }) => (
                                <div className="flex justify-center min-h-screen ">
                                    <div className="flex flex-col w-full">
                                        {/* First-level dropdown */}
                                        <div className="w-[100%]">

                                            {/* First-level dropdown content */}
                                            <div className=" w-40 bg-white border border-gray-300 shadow-lg rounded">
                                                {/* First-level options */}
                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1
                                                    <div className=" bg-white border border-gray-300 flex flex-row  shadow-lg rounded">
                                                        {/* Second-level options */}
                                                        <div className="px-4 py-2 w-15 hover:bg-gray-100 cursor-pointer">Suboption 1</div>
                                                        <div className="px-4 py-2 w-15 hover:bg-gray-100 cursor-pointer">Suboption 2</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
                                                {/* Second-level dropdown */}
                                                <div className="relative mt-2">
                                                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
                                                    {/* Second-level dropdown content */}
                                                    <div className="origin-top-right absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded">
                                                        {/* Second-level options */}
                                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suboption 1</div>
                                                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suboption 2</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Archive
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Move
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Share
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Add to favorites
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Delete
                                </a>
                            )}
                        </Menu.Item>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default Dropdown;
