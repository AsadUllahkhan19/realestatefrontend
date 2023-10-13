import React from 'react';
import { priceRanges } from '../../data/dummyData';

const PriceRange = () => {
  return (
    <div className="p-3 mt-8 border card card-shadow">
    <h1 className="font-semibold">Property Type</h1>
    {priceRanges.map(({ id, name, range }) => (
      <div key={id} className="mt-3 filter flex-center-between">
        <div className="input-radio">
          <input type="radio" name="price" id={name} />
          <label htmlFor={name} className="capitalize">
            {name}
          </label>
        </div>
        <p>({range})</p>
      </div>
    ))}
  </div>
  )
}

export default PriceRange