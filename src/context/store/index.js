import React, { createContext, useReducer, useEffect } from "react";
import reducer from "../reducer";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const initialState = {
  form: {
    typesAndPurpose: null,
    locationAndAddress: null,
    propertyDetails: null,
    rentalDetails: null,
    contactDetails: null,
    amenities: [],
    upload: {
      images: [],
      videos: [],
    },
    isLoading: false,
    isError: false,
    featuredProperties: [],
    propertyDetails: [],
    propertydataArr: [],
    ownerId: String,
  },
  userProperty: [],
  isAuthorize: false,
  updateProperty: null,
  updatePropertyToggle: false,
};

export const Store = createContext(initialState);

const API = `${process.env.REACT_APP_SERVERURL}/property/featured-property`;

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProperties = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const featuredProperties = await res.data.data;
      dispatch({ type: "SET_API_PROPERTIES", payload: featuredProperties });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getPropertyDetails = async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVERURL}/property/property-detials/${id}`
    );
    const propertyDetails = await res.data.data;
    dispatch({ type: "SET_PROPERTY_DETAILS", payload: propertyDetails });
    console.log(propertyDetails, "??details");
  };

  const getPropertyData = async (
    category,
    subcatvalue,
    area,
    bedrooms,
    bathRooms,
    price,
    showPage
  ) => {
    console.log("page", showPage);
    try {
      const params = new URLSearchParams();
      const filterarr = [
        // { key: "category", value: category },
        { key: "subCategory", value: subcatvalue },
        { key: "area", value: area },
        { key: "bedRooms", value: bedrooms },
        { key: "bathRooms", value: bathRooms },
        { key: "price", value: price },
        // { key: "purpose", value: "forSale" },
      ];
      filterarr.map((element) => {
        if (
          element.value != ""
          // ||
          // element.value != [] ||
          // element.value !== 0 ||
          // element.value != undefined
        ) {
          console.log(element.key, element.value, "..");

          params.append(element.key, element.value);
        }
      });

      const response = await axios.get(
        `${
          process.env.REACT_APP_SERVERURL
        }/property/get-property?purpose=${showPage}&category=${category}&${params.toString()}`
      );
      if (response) {
        const propertydataArr = response.data.data;
        dispatch({ type: "GET_FILTER_DATA", payload: propertydataArr });
        console.log("Property Filter Data:", propertydataArr);
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const BuyData = async (purp, scope) => {
    try {
      const [MyURL] = useSearchParams();
      console.log(purp);
      console.log();
      let response;
      if (
        MyURL.get("subCategory") ||
        MyURL.get("bedRooms") ||
        MyURL.get("bathRooms")
      ) {
        response = await axios.get(
          `${
            process.env.REACT_APP_SERVERURL
          }/property/get-property?purpose=${purp}&category=${scope}${
            MyURL.get("subCategory") &&
            `&subCategory"=${MyURL.get("subCategory")}`
          }${MyURL.get("bedRooms") && `&bedRooms"=${MyURL.get("bedRooms")}`}
          }${
            MyURL.get("bathRooms") && `&bathRooms"=${MyURL.get("bathRooms")}`
          }}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_SERVERURL}/property/get-property?purpose=${purp}&category=${scope}`
        );
      }

      if (response) {
        const propertydataArr = response.data.data;
        dispatch({ type: "GET_BUY_DATA", payload: propertydataArr });
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const fetchData = async () => {
    try {
      const email = localStorage.getItem("userData");
      const data = await JSON.parse(email);
      const userEmail = data.email;

      const apiUrl = `${process.env.REACT_APP_SERVERURL}/property/property-list?userEmail=${userEmail}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const userProperty = response.data.data;
          dispatch({ type: "GET_USER_PROPERTY", payload: userProperty });
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onCategoryChange = (selectedData) => {
    if (selectedData === "residential") {
      const params = new URLSearchParams();
      const filterarr = [
        { key: "category", value: "residential" },
        { key: "purpose", value: "forSale" },
      ];
      filterarr.map((element) => {
        if (element.value !== "") {
          params.append(element.key, element.value);
        }
      });
      console.log(params.toString);
      axios
        .get(
          `${
            process.env.REACT_APP_SERVERURL
          }/property/get-property?${params.toString()}`
        )
        .then((res) => {
          const propertydataArr = res.data.data;
          dispatch({ type: "GET_BUY_DATA", payload: propertydataArr });
        });
    } else if (selectedData === "commercial") {
      const params = new URLSearchParams();
      const filterarr = [
        { key: "category", value: "commercial" },
        { key: "purpose", value: "forSale" },
      ];
      filterarr.map((element) => {
        if (element.value !== "") {
          params.append(element.key, element.value);
        }
      });

      axios
        .get(
          `${
            process.env.REACT_APP_SERVERURL
          }/property/get-property?${params.toString()}`
        )
        .then((res) => {
          const propertydataArr = res.data.data;
          dispatch({ type: "GET_BUY_DATA", payload: propertydataArr });
        });
    } else {
      BuyData("forSale", selectedData);
    }
  };
  useEffect(() => {
    getProperties(API);
  }, []);

  return (
    <Store.Provider
      value={{
        state,
        dispatch,
        getPropertyDetails,
        BuyData,
        getPropertyData,
        onCategoryChange,
        fetchData,
      }}
    >
      {children}
    </Store.Provider>
  );
  // return <Store.Provider value={{ ...state }}>{children}</Store.Provider>
};
