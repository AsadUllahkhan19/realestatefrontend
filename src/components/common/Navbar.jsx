/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { BiSearch, BiMenu, BiUser, BiBuildingHouse } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Space } from "antd";
import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
import SingleLink from "./SingleLink";
import logo1 from "../../logo/logo1.png";
// import Dropdown from "./Dropdownnn";
import logo2 from "../../logo/logoblack.png";
import { navLinks } from "../../data/navLinks";
import { Store } from "../../context/store";
import LargeScreenWrapper from "../LargeScreenWrapper/LargeScreenWrapper";

const Navbar = ({ isloggedIn, setIsloggedIn }) => {
  // console.log(isloggedIn, "aaa");
  const location = useLocation();
  const rootDoc = document.querySelector(":root");
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [path, setPath] = useState(location.pathname);
  const { state, dispatch } = useContext(Store);
  const [name, setName] = useState("");
  const [navBarColor, setNavBarColor] = useState(
    location.pathname == "/" || location.pathname == "/home"
      ? "transparent"
      : "white"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navBarTextColor, setNavBarTextColor] = useState(
    location.pathname == "/" || location.pathname == "/home" ? "white" : "black"
  );
  const [navBarLogo, setNavBarLogo] = useState(
    location.pathname == "/" || location.pathname == "/home" ? logo1 : logo2
  );
  const dispatchRedux = useDispatch();
  const navigate = useNavigate();
  const currentRoute = location.pathname;
  const getCurrentRoute = () => {
    if (currentRoute === "/" || currentRoute === "/home") {
      return true;
    } else return false;
  };
  const signOut = () => {
    localStorage.clear();
    dispatch({ type: "AUTHORIZE_USER", payload: false });
    navigate("/login");
  };
  const fetchName = async () => {
    const name = localStorage.getItem("userData");
    const data = await JSON.parse(name);
    setName(data.name);
  };

  const updateNavbarAppearance = () => {
    if (window.scrollY >= 180 && getCurrentRoute()) {
      setNavBarColor("white");
      setNavBarLogo(logo2);
      setNavBarTextColor("black");
    } else if (getCurrentRoute()) {
      setNavBarLogo(logo1);
      setNavBarColor("transparent");
      setNavBarTextColor("white");
    } else {
      setNavBarColor("white");
      setNavBarLogo(logo2);
      setNavBarTextColor("black");
    }
  };

  useEffect(() => {
    fetchName();

    getCurrentRoute();
    updateNavbarAppearance();
  }, [currentRoute]);
  window.addEventListener("scroll", updateNavbarAppearance);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatchRedux(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal"))
      dispatchRedux(closeSidebar());
  };
  const items = [
    {
      label: <p className="text-black font-bold">Hello, {name}</p>,
      key: "0",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/page-one">Dashboard</Link>,
      key: "1",
    },
    {
      label: <Link to="/about">About</Link>,
      key: "2",
    },
    {
      label: <p onClick={() => signOut()}>Signout</p>,
      key: "3",
    },
  ];
  return (
    <div
      className={` w-screen flex  fixed top-0 justify-center z-10  bg-${navBarColor}`}
    >
      <div
        className={`max-w-screen-2xl w-full h-[45px]  flex justify-center  `}
      >
        <div
          className={`  h-[45px] fixed w-full max-w-screen-2xl z-40  bg-${navBarColor} text-${navBarTextColor}  top-0   flex-center-between   border-b backdrop-blur-sm dark:border-dark dark:bg-card-dark/60`}
          onMouseOver={handleClose}
        >
          {/* <Link to="/" className="flex-align-center gap-x-1">
       <img className="h-7 w-13" src="./images/logo1.png"/>
      </Link> */}
          <Link to="/" className="flex-align-center gap-x-1">
            {location.pathname === "/" ? (
              <img className="h-7 w-13" src={navBarLogo} />
            ) : (
              <img className="h-7 w-13" src={logo2} />
            )}
          </Link>

          <div className="flex-align-center gap-x-4">
            {/*-------------------------------------- Desktop Menu------------------------------------- */}
            <ul
              className={`hidden lg:flex-align-center ${
                showSearchBar && "!hidden"
              }`}
            >
              {navLinks.map((link) => (
                <SingleLink {...link} key={link.id} />
              ))}
            </ul>

            {/*---------------------------------------- Mobile Menu------------------------------------- */}
            <div
              className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a text-black  ${
                isSidebarOpen && "open"
              }`}
              onClick={handleCloseSidebar}
            >
              <ul
                className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4 p-3 bg-white dark:bg-card-dark h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
                  isSidebarOpen && "open"
                }`}
              >
                <div className="border-b flex-center-between dark:border-slate-800">
                  <p className="uppercase">menu</p>
                  <div
                    className="icon-box lg:hidden"
                    onClick={() => dispatchRedux(closeSidebar())}
                  >
                    <FiDelete />
                  </div>
                </div>
                {navLinks?.map(({ id, linkText, url, subLinks }) => (
                  <ul key={id}>
                    <NavLink
                      to={url}
                      end
                      className="w-fit before:!hidden"
                      onClick={() => dispatchRedux(closeSidebar())}
                    >
                      {linkText}
                    </NavLink>
                    {subLinks?.map(({ id, linkText, url }) => (
                      <ul key={id} className="mt-2">
                        <NavLink
                          to={url}
                          end
                          className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                          onClick={() => dispatchRedux(closeSidebar())}
                        >
                          {linkText}
                        </NavLink>
                      </ul>
                    ))}
                  </ul>
                ))}
              </ul>
            </div>

            <div className="space-x-2 flex-align-center">
              {/*----------------------------- Profile Icon-------------------------------------------------- */}
              {console.log("whhhhhh", state.isAuthorize)}
              {state.isAuthorize == false ? (
                <div className=" border-2 text-black font-bold hover:text-primary bg-primary border-primary p-4 hover:bg-transparent">
                  <Link to="/login">Join Us</Link>
                </div>
              ) : (
                <Dropdown menu={{ items }} className="hover:cursor-pointer">
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <BiUser size="20" />
                    </Space>
                  </a>
                </Dropdown>
              )}

              {/*------------------------------- Mobile Menu Toogle------------------------- */}
              <div
                className="icon-box lg:hidden"
                onClick={() => dispatchRedux(openSidebar())}
              >
                <BiMenu className={`text-${navBarTextColor}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
