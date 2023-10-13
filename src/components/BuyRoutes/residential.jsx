import React from "react";

const residential = () => {
  return (
    <div
      className={`grid mt-[2vh] ${
        layout === "grid" && "lg:grid-cols-4 gap-4"
      } ${
        layout === "list" && "lg:grid-cols-3 gap-10"
      } md:ml-[10vh] md:mr-[10vh]`}
    >
      {layout === "grid" ? (
        <div className="grid lg:grid-cols-2 sm:row-span-1 lg:col-span-3">
          {propertydataArr?.map((item) => (
            <div className="lg:col-span-1 sm:row-span-1 md:w-4/5 pb-7">
              <SinglePropertyCard
                key={item?._id}
                name={item?.propertyDetails?.title}
                location={item?.locationAndAddress}
                price={item?.propertyDetails?.InclusivePrice}
                category={item?.typesAndPurpose?.category}
                status={item?.propertyDetails?.ownerShipStatus}
                number_of_bathrooms={item?.propertyDetails?.bathRooms}
                number_of_beds={item?.propertyDetails?.bedRooms}
                area={item?.propertyDetails?.areaSquare}
                image={item?.upload?.images[0]}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid col-span-2 grid-rows gap-4">
          {propertydataArr.map((item) => (
            <div className="w-full">
              <ListPropertyCard
                key={item?._id}
                name={item?.propertyDetails.title}
                location={item?.locationAndAddress}
                price={item?.propertyDetails.InclusivePrice}
                category={item?.typesAndPurpose.category}
                status={item?.propertyDetails.ownerShipStatus}
                number_of_bathrooms={item?.propertyDetails.bathRooms}
                area={item?.propertyDetails.areaSquare}
                image={item?.upload?.images[0]}
              />
            </div>
          ))}
        </div>
      )}

      <div className="md:col-span-1 sm:row-span-1">
        <AdvancedSearch category={selectedData} />
        <Type />
        <PriceRange />
      </div>
    </div>
  );
};

export default residential;
