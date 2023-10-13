import { useState } from "react";
import Layout from "../Layout";
import { AiOutlineMail } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { MdPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { property } from "../../data/dummyData";

const options = ["Email", "SMS", "Phone", "Whatsapp", "Chat"];
const icons = [<AiOutlineMail className="text-lg" />, <FiMessageSquare className="text-lg" />, <MdPhone flip="vertical" className="text-lg" />, <FaWhatsapp flip="vertical" className="text-lg" />, <FaComments className="text-lg" />]

const Reports2 = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
          <div className="relative block rounded-[15px] bg-white px-6 pt-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-[50px] mx-6 pb-10">
                    <div className="flex mr-16 px-6 pt-6  ">
                        {options.map((option, index) => (

                            <button
                                key={index}
                                onClick={() => handleOptionChange(option)}
                                className={`${selectedOption === option
                                    ? 'bg-yellow-400 text-white'
                                    : 'bg-white text-yellow-400'
                                    } ${index === 0 ? 'rounded-l-lg ' : ''} ${index === options.length - 1 ? 'rounded-r-lg ' : ''} ${index !== options.length - 1 ? 'border-l border-r ' : ''} } p-2 w-auto border border-yellow-800 hover:bg-yellow-400 hover:text-white focus:outline-none flex flex-row gap-2 transform hover:-translate-y-2 rounded-lg`}
                            >
                                {icons[index]} {option}
                            </button>



                        ))}
                    </div>
                    <div className="relative block  bg-white  justify-center items-center mt-[50px] mx-6 h-auto ">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="text-md text-left text-gray-500 dark:text-gray-400 w-full h-full">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Details
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Enquiry About
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Message
                                        </th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {property.length > 0 ? (
                                        property.map(item => (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.name}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {item.price}

                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.category}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.area}

                                                </td>

                                            </tr>

                                        ))
                                    ) : (<div className="h-[400px] flex flex-col bg-pink-300 justify-center items-center">
                                        <img src="images/notfound.png" />
                                        <div>We Could not Find any leads to display. Try selecting a wider data tange or usage the Add Property option to share your properties.</div>
                                    </div>)}

                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
        
    );
}
export default Reports2;