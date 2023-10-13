import React, { useLayoutEffect } from "react";
import { PropertyDetails, SingleProperty } from "../components/common";
import { property } from "../data/dummyData";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../context/store";

const property1 = property[0];

const PropertyInformation = () => {
  const { id } = useParams();
  const { state, getPropertyDetails } = useContext(Store);
  const propertyDetails = state.propertyDetails;

  useLayoutEffect(() => {
    if (state?.propertyDetails?._id !== id) {
      getPropertyDetails(id);
    }
  }, [propertyDetails, id]);

  return (
    <div className="bg-ordinary">
      <SingleProperty
        name={propertyDetails?.propertyDetails?.title}
        arabicName={propertyDetails?.propertyDetails?.titleArabic}
        location={propertyDetails?.locationAndAddress?.location}
        status={propertyDetails?.typesAndPurpose?.purpose}
        price={propertyDetails?.propertyDetails?.InclusivePrice}
        number_of_beds={
          propertyDetails?.amenities?.filter(
            (item) => item.name == "bedRooms"
          )[0].value
        }
        number_of_bathrooms={
          propertyDetails?.amenities?.filter(
            (item) => item.name == "bathRooms"
          )[0].value
        }
        number_of_garage={property1?.number_of_garage}
        area={propertyDetails?.propertyDetails?.areaSquare}
        image={propertyDetails?.upload?.images || ""}
        // image={property1?.image}
        category={propertyDetails?.typesAndPurpose?.category}
        subCategory={propertyDetails?.typesAndPurpose?.subCategory}
      />
      <PropertyDetails
      listingOwner = {propertyDetails?.contactDetails?.ListingOwner}
      contactPerson = {propertyDetails?.contactDetails?.contactPerson}
      email = {propertyDetails?.contactDetails?.email}
      phone = {propertyDetails?.contactDetails?.phone}
        title={propertyDetails?.propertyDetails?.title}
        location={propertyDetails?.locationAndAddress}
        price={propertyDetails?.propertyDetails?.InclusivePrice}
        status={propertyDetails?.typesAndPurpose?.purpose}
        parkingSpace={property1?.number_of_garage}
        updatedAt={propertyDetails?.updatedAt}
        number_of_beds={
          propertyDetails?.amenities?.filter(
            (item) => item.name == "bedRooms"
          )[0].value
        }
        number_of_bathrooms={
          propertyDetails?.amenities?.filter(
            (item) => item.name == "bathRooms"
          )[0].value
        }
        number_of_garage={property1?.number_of_garage}
        area={propertyDetails?.propertyDetails?.areaSquare}
        image={property1.image}
        category={propertyDetails?.typesAndPurpose?.category}
        description={propertyDetails?.propertyDetails?.description}
        aracbiDescription={propertyDetails?.propertyDetails?.descriptionArabic}
        features={propertyDetails?.amenities}
      />
    </div>
  );
};

export default PropertyInformation;
