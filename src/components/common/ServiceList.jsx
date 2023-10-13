import { services } from '../../data/dummyData'

import React from 'react'

const ServiceList = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="heading">
          Our Services
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ id, name, icon, text }) => (
          <div
            className="p-3 text-center rounded-lg hover:card-shadow hover:border-t-4 hover:border-t-yellow-500 dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-yellow-500 text-white hover:!bg-yellow-400 hover:text-white">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceList