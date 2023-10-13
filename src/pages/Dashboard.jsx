import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Store } from "../context/store";
import Layout from "../components/Layout";
import ProgressButton from "../components/Dashboard/progressButton";
import Navbar from "../components/common/Navbar";

const Dashboard = () => {
  const [ameneties, setAmeneties] = useState([]);
  // const [puposeArray, setPurposeArray] = useState([]);
  // const [purposeValue, setPurposeValue] = useState('');
  // const [rooms, setRooms] = useState(0);
  const [elevatorBuilding, setElevatorBuilding] = useState(0);
  const [totalFloors, setTotalFloor] = useState(0);
  const [view, setView] = useState("");
  const [mainFeatures, setMainFeatures] = useState("");
  const [floor, setFloor] = useState(0);
  const [completionYear, setCompletionYear] = useState(0);
  const [facilities, setFacilities] = useState(0);
  const [landArea, setLandArea] = useState(0);
  const [bathRooms, setBathRooms] = useState(0);
  const [bedRooms, setBedRooms] = useState(0);
  const [nearbySchool, setNearbySchool] = useState("");
  const [nearbyHospitals, setNearbyHospitals] = useState("");
  const [nearbyMalls, setNearbyMalls] = useState("");
  const [distance, setDistance] = useState(0);
  const [nearbyTransport, setNearbyTransport] = useState("");
  const [otherNearbyPlaces, setOtherNearbyPlaces] = useState("");
  const [parkingSpaces, setParkingSpaces] = useState(0);
  const [petPolicy, setPolicy] = useState("");
  const [otherRooms, setOtherRooms] = useState("");
  const [stepcount, setStepcount] = useState(2);

  const { state, dispatch } = useContext(Store);
  // const handleChange = (e) => {
  //     const selectedValue = e.target.value;

  //     if (ameneties.includes(selectedValue)) {
  //         setAmeneties((prevAmenities) =>
  //             prevAmenities.filter((amenity) => amenity !== selectedValue));
  //     }
  //     else {
  //         setAmeneties([...ameneties, selectedValue]);
  //     }
  // };

  // const [floorValue, setFloorValue] = useState("option1");
  // const [floorOptions, setFloorOptions] = useState([]);

  // const [petValue, setPetValue] = useState("option1");
  const [petOptions, setPetOptions] = useState([]);

  // const [formData, setFormData] = useState({
  //     building: "",
  //     completionYear: 0,
  //     elevators: 0,
  //     totalFloors: 0,
  //     view: "",
  //     floors: 0,
  //     otherFeatures: "",
  //     otherRooms: 0,
  //     otherFacilities: "",
  //     landArea: 0,
  //     bathRooms: 0,
  //     bedRooms: 0,
  //     nearBySchool: "",
  //     nearByHospitals: "",
  //     nearByMalls: "",
  //     distance: 0,
  //     nearByTransport: "",
  //     otherNearByPlaces: "",
  //     parkingSpaces: 0,
  //     totalElevators: 0,

  // });

  useEffect(() => {
    if(state?.updatePropertyToggle){
      console.log('pppppppppp', state?.updateProperty?.amenities)
      setAmeneties(state?.updateProperty?.amenities)
      handleFormEdit()
    } else {
      setAmeneties(state.form.amenities);
      handleFormPersist();
    }

    // axios.get('http://localhost:4000/lov/purpose').then(res => {
    //     setPurposeArray(res.data.data)
    // })
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    const amenitiesArrayClone = [...ameneties];
    if (amenitiesArrayClone.some((item) => item == value)) {
      const tempArray = amenitiesArrayClone.filter((ele) => ele.name != value);
      setAmeneties(tempArray);
      return;
    }
    setAmeneties([...ameneties, { name: value, value: value }]);
  };

  // const handleChange = (e) => {
  //     const { value } = e.target;
  //     const amenitiesArrayClone = [...ameneties]
  //     // if (amenitiesArrayClone.includes(item)) {
  //         if (amenitiesArrayClone.length < 1) {
  //             setAmeneties([...ameneties, { name: value, value: value }])
  //             return
  //         }
  //     const tempArray = amenitiesArrayClone.filter(ele => ele?.name != value);
  //     setAmeneties(tempArray)
  //     // const storeArray = state.form.ameneties.filter(ele => ele.name != value);
  //     // }
  //     // if (state.form.ameneties.length > 0) {
  //     //     setAmeneties([state.form.ameneties, { name: value, value: value }])
  //     // } else {
  //     //     setAmeneties([...ameneties, { name: value, value: value }])
  //     // }
  // }

  // const handleInput = (e) => {
  //     const { name, value } = e.target;
  //     if (value.length <= 150) {
  //         setFormData((prevData) => ({
  //             ...prevData,
  //             [name]: value,
  //         }))
  //     }
  // }

  const NavigateTo = useNavigate();

  const prevPage = () => {
    NavigateTo("/page-one");
    setStepcount(stepcount - 1);
  };

  const nextPage = () => {
    // console.log('next_array',
    //     completionYear,
    //     elevatorBuilding,
    //     totalFloors,
    //     rooms,
    //     mainFeatures,
    //     facilities,
    //     landArea,
    //     bathRooms,
    //     bedRooms,
    //     nearbySchool,
    //     nearbyHospitals,
    //     nearbyMalls,
    //     distance,
    //     nearbyTransport,
    //     otherNearbyPlaces,
    //     parkingSpaces,
    //     view,
    //     floor,
    //     petPolicy)

    // let tempArray = [completionYear, elevatorBuilding, totalFloors, otherRooms,
    //     mainFeatures, facilities, landArea, bathRooms, bedRooms,
    //     nearbySchool, nearbyHospitals, nearbyMalls, distance,
    //     nearbyTransport, otherNearbyPlaces, parkingSpaces,
    //     view, floor, petPolicy]
    let tempArray = [
      { name: "bedRooms", value: bedRooms },
      { name: "bathRooms", value: bathRooms },
      { name: "completionYear", value: completionYear },
      { name: "elevatorBuilding", value: elevatorBuilding },
      { name: "totalFloors", value: totalFloors },
      { name: "otherRooms", value: otherRooms },
      { name: "mainFeatures", value: mainFeatures },
      { name: "facilities", value: facilities },
      { name: "landArea", value: landArea },
      { name: "nearbySchool", value: nearbySchool },
      { name: "nearbyHospitals", value: nearbyHospitals },
      { name: "nearbyMalls", value: nearbyMalls },
      { name: "distance", value: distance },
      { name: "nearbyTransport", value: nearbyTransport },
      { name: "otherNearbyPlaces", value: otherNearbyPlaces },
      { name: "parkingSpaces", value: parkingSpaces },
      { name: "view", value: view },
      { name: "floor", value: floor },
      { name: "petPolicy", value: petPolicy },
    ];
    let temp = [...ameneties, ...tempArray];

    setAmeneties(temp);
    dispatch({ type: "ADD_AMENITIES", payload: temp });
    // axios.post('http://localhost:4000/property/upload', state.form).then(res => {
    //     console.log(res.data);
    // });
    setStepcount(stepcount + 1);
    NavigateTo("/dashboard-page3");
    // NavigateTo("/dashboard-page3");
    // 1. purposeValue (select)
    // 2. completionYear
    // 3. elevatorBuilding
    // 4. totalFloors
    // 5. rooms
    // 6. mainFeatures
    // 7. facilities
    // 8. landArea
    // 9. bathRooms
    // 10. bedRooms
    // 11. nearbySchool
    // 12. nearbyHospitals
    // 13. nearbyMalls
    // 14. distance
    // 15. nearbyTransport
    // 16. otherNearbyPlaces
    // 17. parkingSpaces
    // 18. view
    // 19. floor
    // 20. petPolicy (select)
  };

  // const nextPage = () => {
  //     NavigateTo("/dashboard-page3");
  // }
  const handleFormPersist = () => {
    state?.form?.amenities?.map((item) => {
      // console.log('up and running', item?.name, item?.value)
      if (item?.name == "bedRooms") {
        setBedRooms(item.value);
      }
      if (item?.name == "bathRooms") {
        setBathRooms(item?.value);
      }
      if (item.name == "completionYear") {
        setCompletionYear(item?.value);
      }
      if (item.name == "elevatorBuilding") {
        setElevatorBuilding(item?.value);
      }
      if (item.name == "floor") {
        setFloor(item.value);
      }
      if (item.name == "otherRooms") {
        setOtherRooms(item?.value);
      }
      if (item.name == "mainFeatures") {
        setMainFeatures(item?.value);
      }
      if (item.name == "facilities") {
        setFacilities(item?.value);
      }
      if (item.name == "landArea") {
        setLandArea(item?.value);
      }
      if (item.name == "nearbySchool") {
        setNearbySchool(item?.value);
      }
      if (item.name == "nearbyHospitals") {
        setNearbyHospitals(item?.value);
      }
      if (item.name == "nearbyMalls") {
        setNearbyMalls(item?.value);
      }
      if (item.name == "distance") {
        setDistance(item?.value);
      }
      if (item.name == "nearbyTransport") {
        setNearbyTransport(item?.value);
      }
      if (item.name == "otherNearbyPlaces") {
        setOtherNearbyPlaces(item?.value);
      }
      if (item.name == "parkingSpaces") {
        setParkingSpaces(item?.value);
      }
      if (item.name == "view") {
        setView(item?.value);
      }
      if (item.name == "floor") {
        setFloor(item?.value);
      }
      if (item.name == "petPolicy") {
        setPolicy(item?.value);
      }
    });
  };
  const handleFormEdit = () => {
    state?.updateProperty?.amenities?.map((item) => {
      // console.log('up and running', item?.name, item?.value)
      if (item?.name == "bedRooms") {
        setBedRooms(item.value);
      }
      if (item?.name == "bathRooms") {
        setBathRooms(item?.value);
      }
      if (item.name == "completionYear") {
        setCompletionYear(item?.value);
      }
      if (item.name == "elevatorBuilding") {
        setElevatorBuilding(item?.value);
      }
      if (item.name == "floor") {
        setFloor(item.value);
      }
      if (item.name == "otherRooms") {
        setOtherRooms(item?.value);
      }
      if (item.name == "mainFeatures") {
        setMainFeatures(item?.value);
      }
      if (item.name == "facilities") {
        setFacilities(item?.value);
      }
      if (item.name == "landArea") {
        setLandArea(item?.value);
      }
      if (item.name == "nearbySchool") {
        setNearbySchool(item?.value);
      }
      if (item.name == "nearbyHospitals") {
        setNearbyHospitals(item?.value);
      }
      if (item.name == "nearbyMalls") {
        setNearbyMalls(item?.value);
      }
      if (item.name == "distance") {
        setDistance(item?.value);
      }
      if (item.name == "nearbyTransport") {
        setNearbyTransport(item?.value);
      }
      if (item.name == "otherNearbyPlaces") {
        setOtherNearbyPlaces(item?.value);
      }
      if (item.name == "parkingSpaces") {
        setParkingSpaces(item?.value);
      }
      if (item.name == "view") {
        setView(item?.value);
      }
      if (item.name == "floor") {
        setFloor(item?.value);
      }
      if (item.name == "petPolicy") {
        setPolicy(item?.value);
      }
    });
  };
  return (
    <Layout>
      <div
        className="bg-gradient-to-r from-gradient via-ordinary to-ordinary h-screen overflow-x-hidden"
        // style={{
        //     backgroundImage: "url('/images/info1.jpg')",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        // }}
      >
        <div
          className="relative inset-0 p-10"
          // style={{
          //     backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the opacity as needed
          //     backdropFilter: "brightness(0.8)", // Adjust the brightness to darken the background
          // }}
        >
          {console.log("ggggg", state.ameneties)}
          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <ProgressButton step={stepcount} />
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Recreation and Family</h1>
            </div>
            <div className="grid grid-rows-5 gap-6 lg:grid-rows-2 lg:grid-cols-3 lg:grid-flow-col lg:gap-6 lg:gap-x-20 mx-auto mt-6">
              {/* {/* <Customisedcheckbox name="Barbeque Area" value="Barbeque" handleChange={handleChange} /> */}
              <Customisedcheckbox
                name="Lawn or Garden"
                value="Garden"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Day Care Center"
                value="Care"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Cafeteria or Canteen"
                value="Cafeteria or Canteen"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Kids Play Area"
                value="Kids Play Area"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Health and Fitness</h1>
            </div>

            <div className="grid grid-rows-7 gap-4 lg:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row lg:gap-6lg: gap-x-10 mx-auto mt-6">
              <Customisedcheckbox
                name="First Aid Medical Center"
                value="First Aid Medical Center"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Sauna"
                value="Sauna"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Facilities for Disabled"
                value="Facilities for Disabled"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Steam Room"
                value="Steam Room"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Jacuzzi"
                value="Jacuzzi"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Swimming Pool"
                value="Swimming Pool"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Facilities for Disabled"
                value="Facilities for Disabled"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="relative w-[90%]  block rounded-[25px] bg-white px-6 py-[80px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg ">Laundry and Kitchen</h1>
            </div>
            <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-row lg:gap-6 lg:gap-x-20 mx-auto mt-6">
              <Customisedcheckbox
                name="Laundry Room"
                value="Lanudry Room"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Laundry Facility"
                value="Laundry Facility"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Shared Kitchen"
                value="Shared Kitchen"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Building</h1>
            </div>
            <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-flow-row lg:gap-6 lg:gap-x-20 mx-auto">
              <Customisedcheckbox
                name="Prayer Room"
                value="Prayer Room"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Balcony or Terrace"
                value="Balcony or Terrace"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Reception/Waiting Room"
                value="Reception/Waiting room"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Lobby in Building"
                value="Lobby in Building"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Service Elevators"
                value="Service Elevator"
                handleChange={handleChange}
              />
              <CustomisedInput
                type="number"
                name="completionYear"
                placeholder="Completion Year"
                value={completionYear}
                onChange={setCompletionYear}
              />
              <CustomisedInput
                type="number"
                name="totalFloors"
                placeholder="Total Floors"
                value={totalFloors}
                onChange={setTotalFloor}
              />
              <CustomisedInput
                type="number"
                name="totalElevators"
                placeholder="Total Elevators"
                value={elevatorBuilding}
                onChange={setElevatorBuilding}
              />
              {/* <CustomisedInput name="totalFloors" label="Total Floors" type="number" placeholder="" value={formData.totalFoors} onChange={handleInput} /> */}
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 pt-12 pb-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Business and Security</h1>
            </div>
            <div className="grid grid-rows-5 gap-4 lg:grid-rows-2 lg:grid-cols-3 lg:grid-flow-rows lg:gap-6 lg:gap-x-20 mx-auto my-6">
              <Customisedcheckbox
                name="Business Center"
                value="Business Center"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Conference Room"
                value="Conference Room"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Security Staff"
                value="Security Staff"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="CCTV Security"
                value="CCTV security"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 pt-12 pb-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Miscellaneous</h1>
            </div>

            <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-7 lg:grid-flow-row lg:gap-6 lg:gap-x-20 mx-auto">
              <CustomisedInput
                name="view"
                label="View"
                type="text"
                placeholder=""
                value={view}
                onChange={setView}
              />
              <CustomisedInput
                name="floors"
                label="Floors"
                type="number"
                placeholder="Number of floors"
                value={floor}
                onChange={setFloor}
              />
              <CustomisedInput
                name="otherFeatures"
                label="Other Main Features"
                type="text"
                placeholder="features"
                value={mainFeatures}
                onChange={setMainFeatures}
              />
              <CustomisedInput
                name="rooms"
                label="Other Rooms"
                type="number"
                placeholder="Number of rooms"
                value={otherRooms}
                onChange={setOtherRooms}
              />
              <CustomisedInput
                name="otherFacilities"
                label="Other Facilities"
                type="text"
                placeholder=""
                value={facilities}
                onChange={setFacilities}
              />
              <CustomisedInput
                name="landArea"
                label="Land Area"
                type="number"
                placeholder="Land Area"
                value={landArea}
                onChange={setLandArea}
              />
              <CustomisedInput
                name="bathRooms"
                label="Number Of Bathrooms"
                type="number"
                placeholder=""
                value={bathRooms}
                onChange={setBathRooms}
              />
              <CustomisedInput
                name="bedRooms"
                label="Number Of Bedrooms"
                type="number"
                placeholder=""
                value={bedRooms}
                onChange={setBedRooms}
              />
              <CustomisedInput
                name="nearBySchool"
                label="Near By School"
                type="text"
                placeholder="Nearby Schools"
                value={nearbySchool}
                onChange={setNearbySchool}
              />
              <CustomisedInput
                name="nearByMalls"
                label="Near By Shopping Malls"
                type="text"
                placeholder=""
                value={nearbyMalls}
                onChange={setNearbyMalls}
              />
              <CustomisedInput
                name="nearByHospitals"
                label="Near By Hospitals"
                type="text"
                placeholder=""
                value={nearbyHospitals}
                onChange={setNearbyHospitals}
              />
              <CustomisedInput
                name="distance"
                label="Distance"
                type="number"
                placeholder=""
                value={distance}
                onChange={setDistance}
              />
              <CustomisedInput
                name="nearByTransport"
                label="Near By Transport"
                type="text"
                placeholder=""
                value={nearbyTransport}
                onChange={setNearbyTransport}
              />
              <CustomisedInput
                name="otherNearByPlaces"
                label="Other Near By Places"
                type="text"
                placeholder=""
                value={otherNearbyPlaces}
                onChange={setOtherNearbyPlaces}
              />
              <CustomisedSelect
                label="Pet Policy"
                options={petOptions}
                selectedValue={petPolicy}
                onSelectChange={setPolicy}
              />
              <Customisedcheckbox
                name="Freehold"
                value="Freehold"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Maids Room"
                value="Maids Room"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="ATM Facility"
                value="ATM Facility"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="24 Hours Concierge"
                value="24 Hours Challenge"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 pt-12 pb-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Technology</h1>
            </div>
            <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-row lg:gap-6 lg:gap-x-20 mx-auto">
              <Customisedcheckbox
                name="Broadband Internet"
                value="Braodband Internet"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Satellite/Cable TV"
                value="Satellite/Cable Tv"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Intercom"
                value="Intercom"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 pt-12 pb-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">Features</h1>
            </div>
            <div className="grid grid-rows-7 gap-4 lg:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row lg:gap-6lg: gap-x-20 mx-auto">
              <Customisedcheckbox
                name="Double Glazed Windows"
                value="Double Glazed Windows"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Centrally Air-Conditioned"
                value="Centrally Air-Conditioned"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Central Heating"
                value="Central Heating"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Electricity Backup"
                value="Electricity Backup"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Furnished"
                value="Furnished"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Storage Areas"
                value="Storage Areas"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Study Room"
                value="Study Room"
                handleChange={handleChange}
              />
              <CustomisedInput
                name="parkingSpaces"
                label="Parking Spaces"
                type="number"
                placeholder=""
                value={parkingSpaces}
                onChange={setParkingSpaces}
              />
            </div>
          </div>

          <div className="relative w-[90%] block rounded-[25px] bg-white px-6 pt-12 pb-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-center items-center mt-20 mx-10">
            <div className="absolute bg-yellow-400 rounded-[5px] mt-[-36px] ml-[-36px] mb-[40px]">
              <h1 className="text-black mx-5 text-lg">
                Cleaning and Maintenance
              </h1>
            </div>
            <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-row lg:gap-6 lg:gap-x-20 mx-auto">
              <Customisedcheckbox
                name="Waste Disposal"
                value="Waste Disposal"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Maintenance Staff"
                value="Maintenance Staff"
                handleChange={handleChange}
              />
              <Customisedcheckbox
                name="Cleaning Services"
                value="Cleaning Services"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="float-right mr-[10%]">
            <div className="flex justify-center items-center gap-4">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={prevPage}
                class="mt-10 font-bold mb-5 inline-block w-[150px] rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="mt-10 font-bold mb-5 inline-block w-[150px] rounded bg-primary px-6 pt-2.5 pb-2 text-lg leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-[5vh]"
              >
                Next
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Dashboard;

const handleChecked = (state, value) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i]?.name === value) {
      console.log("trello");
      return true;
    }
  }
  // if (state.form.amenities.name.includes(value)) {
  //     return true
  // }
  return false;
};

const Customisedcheckbox = ({ name, value, handleChange }) => {
  const { state, dispatch } = useContext(Store);
  return (
    <div className="mb-[0.15rem] block min-h-[1.5rem] pl-[0.5rem] ">
      {console.log("customizedcheckbox", state.form.amenities)}
      <label class="relative inline-flex items-center mb-5 cursor-pointer">
        <input
          type="checkbox"
          value={value}
          onChange={handleChange}
          class="sr-only peer"
          defaultChecked={handleChecked(state?.updatePropertyToggle ? state?.updateProperty?.amenities : state.form.amenities, name)}
        />
        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-100 dark:peer-focus:ring-yellow-400 rounded-lg peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-lg after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
        <span class="ml-3 text-md font-medium text-gray-900 dark:text-gray-300">
          {name}
        </span>
      </label>
    </div>
  );
};

const CustomisedSelect = ({
  label,
  options,
  selectedValue,
  onSelectChange,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor="countries"
        className="inline-block mb-2 text-md text-gray-600 dark:text-white"
      >
        {label}
      </label>
      <select
        value={selectedValue}
        onChange={(e) => onSelectChange(e.target.value)}
        id="countries"
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {options.map((opt, i) => {
          return (
            <option key={i} value={opt.key}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const CustomisedInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onfocus,
  onblur,
}) => {
  return (
    <div>
      <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onFocus={onfocus}
        onBlur={onblur}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-black placeholder:text-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
