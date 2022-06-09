import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiScooter } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingCart, MdAddIcCall } from "react-icons/md";
import { RiMenuLine } from "react-icons/ri";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
import Drawer from "./Drawer/Drawer";
import { showModalTrue, logout } from "../store/reducers/authSlice";
import { drawerOpenTrue } from "../store/reducers/drawerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useGetSingleUserQuery } from "../store/services/userServices";
const NavBar = () => {
  const menus = [
    {
      item: "Home",
      path: "/",
    },
    {
      item: "Menu",
      path: "/menu",
    },
    {
      item: "About",
      path: "/about",
    },
    {
      item: "Shop",
      path: "/shop",
    },
    {
      item: "Contact",
      path: "/contact",
    },
  ];
  const [scrollPosition, setScrollPosition] = useState(false);
  const { data, isLoading, isSuccess } = useGetSingleUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigate = () => {
    if (user?.role === "user") {
      navigate("/user/dashboard");
    }
    if (user?.role === "admin") {
      navigate("/admin/dashboard");
    }
  };
  return (
    <>
      <nav
        className={`bg-white shadow-lg font-JosefinSans sticky ${
          !scrollPosition ? "py-7" : "py-2"
        } top-0 transition-all duration-100 z-[38]`}
      >
        <div className="container flex justify-between">
          <div className="lg:hidden text-2xl text-left flex items-center justify-center !ml-[15px]">
            <RiMenuLine />
          </div>
          <div className="flex items-center justify-between">
            <div className="mr-6">
              <Link to="/">
                <img src={require("../assets/images/logo.png")} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              {menus.map((menu, index) => (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "mx-4 text-lg text-primary font-semibold"
                      : "mx-4 text-lg hover:text-primary font-semibold"
                  }
                  to={menu.path}
                >
                  {menu.item}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="lg:hidden text-2xl text-left flex items-center justify-center !mr-[15px]">
            <MdAddIcCall />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <span className="!text-secondary mr-4">
              <GiScooter className="text-6xl" />
            </span>
            <div>
              <p className="text-gray-400 text-sm text-left">
                Call and order in
              </p>
              <h3 className="text-3xl font-bold text-primary">
                +1 718-904-4450
              </h3>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-between">
            <span className="navbar-icon">
              <BiSearchAlt2 />
            </span>
            <Link to="/wishlist" className="navbar-icon relative group">
              <BsFillSuitHeartFill />
              <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-primary rounded-[50%] absolute top-0 right-0 group-hover:bg-primary_hover">
                {data?.user?.wishlist.length ? data?.user?.wishlist.length : 0}
              </span>
            </Link>
            <span
              className="navbar-icon relative group"
              onClick={() => dispatch(drawerOpenTrue(true))}
            >
              <MdOutlineShoppingCart />
              <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-primary rounded-[50%] absolute top-0 right-0 group-hover:bg-primary_hover">
                {data?.user?.cart.length ? data?.user?.cart.length : 0}
              </span>
            </span>
            {user?.profilePic ? (
              <div className="cursor-pointer" onClick={handleNavigate}>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={user?.profilePic}
                  alt="profile photo"
                />
              </div>
            ) : (
              <span
                className="navbar-icon"
                onClick={() => dispatch(showModalTrue(true))}
              >
                <BsFillPersonFill />
              </span>
            )}
          </div>
        </div>
      </nav>
      <Drawer />
    </>
  );
};

export default NavBar;
