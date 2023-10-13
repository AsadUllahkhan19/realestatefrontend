import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
// import BackToTopButton from "./components/common/BackToTopButton";
// import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  Home,
  Buy,
  About,
  PropertyInformation,
  PropertyManagement,
  Contact,
  Blog,
  Rent,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
// import Dropdown from "./components/common/DropDown";
// import NewsLetter from "./components/common/NewsLetter";
import Loader from "./components/common/Loader";
import { Footer } from "./components/common";
import Agents from "./components/common/Agents";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AgentInformation from "./pages/AgentInformation";
import Otp from "./components/Otp";
import Agentdetails from "./pages/Agentdetails";
import Dashboard from "./pages/Dashboard";
import Dashboardpage3 from "./pages/Dashboardpage3";
import PageOne from "./pages/PageOne";
import { StoreProvider } from "./context/store";
import PropertyGallery from "./pages/PropertyGallery";
import ManageListings from "./pages/ManageListings";
import Portfolio from "./pages/Portfolio";
import Reports from "./pages/Reports";
import Traffic from "./pages/Traffic";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();
  const [isloggedIn, setIsloggedIn] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setIsloggedIn(true);
    } else setIsloggedIn(false);
  }, []);
  console.log(isloggedIn, "gyjg");
  const propertyImages = [
    { url: "/images/card1.png", alt: "Property Image 1" },
    { url: "/images/card2.png", alt: "Property Image 2" },
    { url: "/images/card3.png", alt: "Property Image 3" },
    { url: "/images/explore2.png", alt: "Property Image 4" },
    { url: "images/property3.png", alt: "Property Image 5" },
    { url: "images/property5.png", alt: "Property Image 6" },
    { url: "images/property4.png", alt: "Property Image 7" },
  ];

  // Show/Hide scroll to top button
  // window.addEventListener("scroll", () => {
  //   window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  // });

  // const handleCloseDropdown = (e) => {
  //   dispatch(closeDropdown());
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <StoreProvider>
      <div>
        {showLoader && <Loader />}
        {route.pathname !== "/dashboard" &&
          route.pathname !== "/dashboard-page3" &&
          route.pathname !== "/page-one" && (
            <Navbar isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />
          )}
        {/* {showLoader && <Loader />}
        {route.pathname !== "/dashboard" &&
          route.pathname !== "/dashboard-page3" &&
          route.pathname !== "/page-one" && 
          route.pathname !== "/portfolio" &&
          route.pathname !== "/listing-inventory" &&
          route.pathname !== "/reports" &&
          route.pathname !== "/traffic" && 
          (
            <Navbar isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />
          )} */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/dashboard-page3" element={<Dashboardpage3 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/property/:slug" element={<Buy />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/property-information/:id"
              element={<PropertyInformation />}
            />
            <Route
              path="/property-management"
              element={<PropertyManagement />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/agents" element={<Agents />} />
            <Route
              path="/login"
              element={<Login setIsloggedIn={setIsloggedIn} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="rent" element={<Rent />} />
            <Route path="/agentinformation" element={<AgentInformation />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/agentdetails" element={<Agentdetails />} />
            <Route path="/page-one" element={<PageOne />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/listing-inventory" element={<ManageListings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/traffic" element={<Traffic />} />
          </Routes>
        </div>
        {route.pathname !== "/dashboard" &&
          route.pathname !== "/dashboard-page3" &&
          route.pathname !== "/page-one" &&
          route.pathname !== "/portfolio" &&
          route.pathname !== "/listing-inventory" &&
          route.pathname !== "/reports" &&
          route.pathname !== "/traffic" && (
            <div className="px-[2%] md:px-[6%] bg-footer border border-footer">
              <div className="mt-20">
                <Footer />
              </div>
            </div>
          )}
      </div>
    </StoreProvider>
  );
}

export default App;
